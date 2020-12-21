console.log('main started');

const { NONAME } = require('dns');
const { protocol, ipcMain } = require('electron');
const electron = require('electron');
const app = electron.app;
const remote = require('electron').remote;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const { windowsStore } = require('process');
const {autoUpdater} = require("electron-updater");
const url = require('url');
const log = require('electron-log');
let login_win;

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...')
function createWindow() {

    login_win = new BrowserWindow({
        show: false,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    // win.webContents.toggleDevTools();
    login_win.show();
    login_win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    login_win.on('closed', () => {
        login_win = null;
    })
}

app.on('ready', function(){
    createWindow(),
    autoUpdater.checkForUpdates();
});

autoUpdater.on('checking-for-update', () => {
})
autoUpdater.on('update-available', (info) => {
})
autoUpdater.on('update-not-available', (info) => {
})
autoUpdater.on('error', (err) => {
})
autoUpdater.on('download-progress', (progressObj) => {
})
autoUpdater.on('update-downloaded', (info) => {
  autoUpdater.quitAndInstall();  
})