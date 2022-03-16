console.log('main process working');

const { MenuItem } = require("electron");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu
const menuItem = electron.MenuItem
const globalShortcut = electron.globalShortcut


let win;

function createWindow(){

    
    win = new BrowserWindow();
    
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('closed', ()=>{
        win = null;
    })
}

app.on('ready', function(){
    createWindow()

    const template = [
        {
            label: 'edit',
            submenu: [
                {role: 'undo'},
                {role: 'redo'},
                {role: 'seperator'},
                {role: 'cut'},
                {role: 'copy'},
                {role: 'paste'},
                {role: 'pasteandmatchstyle'},
                {role: 'delete'},
                {role: 'selectall'},
            ]

        },
        {
            label: 'demo',
            submenu: [
                {
                    label: 'submenu1',
                    click: function(){
                        console.log('Clicked submenu 1')
                    }
                },
                {
                    type: 'seperator'
                },
                {
                    label1: 'submenu2'
                }
            ]
        },
        {
            label: 'help',
            submenu:[
                {
                    label: 'About electron',
                    click: function(){
                        electron.shell.openExternal('http://electron.atom.io')
                    },
                    accelerator: 'CmdorCtrl + Shift + H'
                }
            
            ]
           
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const ctxMenu = new menu()
    ctxMenu.append(newMenuItem({
    label: 'hello',
    click: function(){
        console.log('Context menu item clicked')
    }
    }))
    ctxMenu.append(new MenuItem({role: 'selectall'}))

    win.webContents.on('context-menu', function (e,parms){
        ctxMenu.popup(win, parms.x, params.y)
    })

    globalShortcut.register('Alt+1', function(){
        win.show()
    })
});

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