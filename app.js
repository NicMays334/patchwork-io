function main() {

  console.log('Application Initialized . . .');

  const {app, BrowserWindow} = require('electron');

  function createWindow () {
      window = new BrowserWindow({width: 800, height: 600});
      window.loadFile('index2.html');
  }

  app.on('ready', createWindow);
  console.log('Windows Built . . .');

  app.on('window-all-closed', () => {
      // On macOS it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') {
        app.quit();
      }
   });
   console.log('Done . . .');
}

main();
