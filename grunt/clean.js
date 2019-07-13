module.exports = {
  dist: {
    src: "dist/**/*"
  },
  postbuild: {
    src: ["dist/chrome-extension/key.pem", "docs/index.js"]
  },
  homepage: {
    src: ["docs/images/**/*", "docs/index.**"]
  },
  homepagePostBuild: {
    src: "docs/index.js"
  },
  key: {
    src: "dist/chrome-extension/key.pem"
  },
  release: {
    src: ["dist/chrome-extension"]
  }
};
