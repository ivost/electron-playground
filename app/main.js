const { app, BrowserWindow } = require('electron')

function createWindow () {
  console.log("createWindow")
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  console.log("node version: " + process.versions.node)
  
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
    const fs = require('fs')
    const root = fs.readdirSync('/')    
    console.log("ROOT: " + root)
  }
})
