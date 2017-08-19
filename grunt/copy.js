/* Copy various files */
module.exports = {
  js: {
    expand: true,
    cwd: 'src',
    src: [
      'asciimoji.js',
    ],
    dest: 'dist/',
  },
  jquery: {
    expand: true,
    cwd: 'src/jquery',
    src: [
      'asciimoji.jquery.js',
    ],
    dest: 'dist/jquery',
  },
  chromeExtension: {
    files: [
      {
        expand: true,
        cwd: 'src/chrome-extension',
        src: [
          'images/*',
          'js/*',
          'options/*',
          'manifest.json',
          'key.pem',
        ],
        dest: 'dist/chrome-extension',
      },
      {
        expand: true,
        flatten: true,
        src: [
          'src/asciimoji.js',
          'src/jquery/asciimoji.jquery.js',
        ],
        dest: 'dist/chrome-extension/js/',
      }
    ],
  },
  homepage: {
    expand: true,
    cwd: 'src/homepage',
    src: [
      'googlea7755739bc343761.html',
      'index.html',
      'images/icon-16.png',
      'images/header.png',
    ],
    dest: 'dist/homepage/',
  },
};
