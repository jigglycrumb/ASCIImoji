module.exports = {
  chromeExtension: {
    files: [
      {
        expand: true,
        cwd: "src/chrome-extension",
        src: ["images/*", "js/*", "options/*", "manifest.json", "key.pem"],
        dest: "dist/chrome-extension",
      },
      // depends on jQuery build
      {
        expand: true,
        flatten: true,
        src: ["dist/js/asciimoji.js", "dist/jquery/asciimoji.jquery.js"],
        dest: "dist/chrome-extension/js/",
      },
    ],
  },
  homepage: {
    expand: true,
    cwd: "src/homepage",
    src: [
      // "googlea7755739bc343761.html",
      // "homepage.js",
      "index.html",
      "install.html",
      "images/icon-16.png",
      "images/header.png",
      "images/icloud-sync-*.png",
      "images/macos-dictionary-installation-*.png",
    ],
    dest: "docs/",
  },
};
