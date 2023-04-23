module.exports = {
  options: {
    separator: "\n", //add a new line after each file
    // banner: "", //added before everything
    // footer: "" //added after everything
  },
  homepage: {
    src: [
      "src/homepage/bower_components/jquery/jquery.js",
      "src/homepage/bower_components/bootstrap/dist/js/bootstrap.js",
      // depends on jquery build
      "dist/js/asciimoji.js",
      "dist/jquery/asciimoji.jquery.js",
      "src/homepage/homepage.js",
    ],
    // the location of the resulting JS file
    dest: "docs/index.js",
  },
};
