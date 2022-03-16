const openBtn = document.getElementById('openBtn')
const shell = require('electron').shell

openbth.addEventListener('click', function(event){
    shell.showItemInFolder('E:\\ElectronFolder\\demo.txt')
    shell.openItem('E:\\ElectronFolder\\ytlogo.jpg')
    shell.openExternal('http://electron.atom.io')
})