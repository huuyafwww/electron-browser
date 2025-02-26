const { app, BrowserWindow } = require('electron');
const Config = require('electron-config');
const path = require('path');
const serve = require('electron-serve');

const isDev = () => {
    return !app.isPackaged;
};

const config = new Config({
    defaults: {
        bounds: {
            width: 800,
            height: 600,
        },
    },
});

const webPreferences = {
    nodeIntegration: true,
    webviewTag: true,
    nodeIntegrationInWorker: true,
};

let mainWindow;

const createMainWindow = () => {
    const { width, height, x, y } = config.get('bounds');
    mainWindow = new BrowserWindow({
        width,
        height,
        x,
        y,
        webPreferences,
    });

    mainWindow.loadURL('http://localhost:8000/');
    // loadURL(mainWindow);

    // mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));

    mainWindow.webContents.openDevTools();

    ['resize', 'move'].forEach(ev => {
        mainWindow.on(ev, () => {
            config.set('bounds', mainWindow.getBounds());
        });
    });

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
};

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', createMainWindow);
