module.exports = {
  dist: {
    src: 'dist/**/*'
  },
  postbuild: {
    src: [
      'dist/chrome-extension/key.pem',
      'dist/homepage/index.js',
    ]
  },
};
