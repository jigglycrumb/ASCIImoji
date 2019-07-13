module.exports = {
  options: {
    separator: "\n", //add a new line after each file
    banner: "", //added before everything
    footer: "" //added after everything
  },
  homepage: {
    src: [
      "src/homepage/bower_components/bootstrap/dist/css/bootstrap.css",
      "src/homepage/bower_components/bootstrap/dist/css/bootstrap-theme.css",
      "src/homepage/homepage.css"
    ],
    // the location of the resulting CSS file
    dest: "docs/index.min.css"
  }
};
