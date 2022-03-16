console.log('main process working');
console.log('main.js');

const { BrowserWindow } = require("electron");
const electron = require("electron");
const path = require("path");
const url = require("url");

let winone , wintwo;

function createWindow(){
    winone = new BrowserWindow();
    wintwo = new BrowserWindow();

    winone.loadURL(url.fowmat({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file',
        slashes: true
    }));

    wintwo.loadURL(url.fowmat({
        pathname: path.join(__dirname, 'two.html'),
        protocol: 'file',
        slashes: true
    }));

    winone.on('closed', ()=>{
        win = null;
    })
    wintwo.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin'){
        app.quit()
    }
});

app.on('activate', () =>{
    if (win===null){
        createWindow()
    }
});