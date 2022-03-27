module.exports = {
  dictionary: {
    options: {
      patterns: [
        { match: "version", replacement: "<%= package.version %>" },
        { match: "author", replacement: "<%= package.author %>" },
        {
          match: "dictionary",
          replacement: '<%= grunt.file.read("src/dictionary.js") %>',
        },
      ],
    },
    files: [
      {
        src: "src/macos-dictionary/build.js",
        dest: "dist/macos-dictionary/build.js",
      },
    ],
  },
  textfile: {
    options: {
      patterns: [
        { match: "version", replacement: "<%= package.version %>" },
        { match: "author", replacement: "<%= package.author %>" },
        {
          match: "dictionary",
          replacement: '<%= grunt.file.read("src/dictionary.js") %>',
        },
      ],
    },
    files: [
      {
        src: "src/text-file/build.js",
        dest: "dist/text-file/build.js",
      },
    ],
  },
  js: {
    options: {
      patterns: [
        { match: "version", replacement: "<%= package.version %>" },
        { match: "author", replacement: "<%= package.author %>" },
        {
          match: "dictionary",
          replacement: '<%= grunt.file.read("src/dictionary.js") %>',
        },
      ],
    },
    files: [
      {
        src: "src/js/asciimoji.js",
        dest: "dist/js/asciimoji.js",
      },
    ],
  },
  jquery: {
    options: {
      patterns: [
        { match: "version", replacement: "<%= package.version %>" },
        { match: "author", replacement: "<%= package.author %>" },
        // the next one depends on replace:js been run before
        {
          match: "asciimoji",
          replacement: '<%= grunt.file.read("dist/js/asciimoji.js") %>',
        },
      ],
    },
    files: [
      {
        src: "src/jquery/asciimoji.jquery.js",
        dest: "dist/jquery/asciimoji.jquery.js",
      },
    ],
  },
  chromeExtension: {
    options: {
      patterns: [{ match: "version", replacement: "<%= package.version %>" }],
    },
    files: [
      {
        src: "dist/chrome-extension/manifest.json",
        dest: "dist/chrome-extension/manifest.json",
      },
    ],
  },
  homepage: {
    options: {
      patterns: [
        { match: "version", replacement: "<%= package.version %>" },
        { match: "author", replacement: "<%= package.author %>" },
      ],
    },
    files: [
      {
        src: "docs/index.html",
        dest: "docs/index.html",
      },
      {
        src: "docs/install.html",
        dest: "docs/install.html",
      },
    ],
  },
};
