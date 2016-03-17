module.exports = {
  chromeExtension: {
    options: {
      archive: 'release/ASCIImoji-Chrome-<%= package.version %>.zip',
    },
    files: [{
      expand: true,
      cwd: 'dist/chrome-extension/',
      src: ['**'],
    }]
  }
};
