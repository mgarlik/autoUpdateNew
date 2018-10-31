const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600
  });
// win.loadURL(`file://$(__dirname)/index.html`);

win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
});
