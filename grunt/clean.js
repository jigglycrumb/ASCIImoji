module.exports = {
  dist: {
    src: "dist/**/*"
  },
  postbuild: {
    src: ["dist/chrome-extension/key.pem", "dist/homepage/index.js"]
  },
  homepage: {
    src: "dist/homepage/**/*"
  },
  homepagePostBuild: {
    src: "dist/homepage/index.js"
  },
  key: {
    src: "dist/chrome-extension/key.pem"
  }
};
