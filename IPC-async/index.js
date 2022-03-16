const electron = require("electron");
const ipc = electron.ipcRenderer

const syncBtn = document.getElementById('syncBtn')
const asyncBtn = document.getElementById('asyncBtn')
asyncBtn.addEventListener('click', function(){
    console.log('async msg 1')
    ipc.send('async-message')
    console.log('async msg 2')
})

syncBtn.addEventListener('click', function(){
    console.log('sync msg 1')
    const reply = ipc.sendSync('sync-message')
    console.log(reply)
    console.log('sync msg 2')
})

ipc.on('async-reply', function(event, arg){
    console.log(arg)
})

const BrowserWindow = electron.remote.BrowserWindow
let window = new BrowserWindow()
Window.loadURL('http://github.com')