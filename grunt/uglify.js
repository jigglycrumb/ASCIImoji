module.exports = {
  // options: {
  //   banner: ""
  // },
  js: {
    expand: true,
    cwd: "dist/js",
    src: ["asciimoji.js"],
    ext: ".min.js",
    extDot: "last",
    dest: "dist/js",
  },
  jquery: {
    expand: true,
    cwd: "dist/jquery",
    src: ["asciimoji.jquery.js"],
    ext: ".min.js",
    extDot: "last",
    dest: "dist/jquery",
  },
  homepage: {
    src: "docs/index.js",
    dest: "docs/index.min.js",
  },
};
