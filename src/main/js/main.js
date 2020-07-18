'use strict';
const { app, BrowserWindow } = require('electron');
const Config = require('electron-config');
const path = require('path');


const config = new Config({
    defaults: {
        bounds: {
            width: 800,
            height: 600,
        },
    },
});

let mainWindow;

const createMainWindow = () => {
    const { width, height, x, y } = config.get('bounds');
    mainWindow = new BrowserWindow({ width, height, x, y });

    mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));

    mainWindow.webContents.openDevTools();

    ['resize', 'move'].forEach((ev) => {
        mainWindow.on(ev, () => {
            config.set('bounds', mainWindow.getBounds());
        });
    });

    return mainWindow;
};

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = createMainWindow();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
