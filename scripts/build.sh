#!/bin/sh

grunt clean:dist

# build Mac OS text replacement dictionary
TMP_BUILD_SCRIPT="dist/macos-dictionary/build.js"
grunt replace:dictionary # create temp copy of build script and inject dictionary
node ./$TMP_BUILD_SCRIPT # run temp build script
rm ./$TMP_BUILD_SCRIPT   # remove temp build script

# build text file
TMP_BUILD_SCRIPT="dist/text-file/build.js"
grunt replace:textfile   # create temp copy of build script and inject dictionary
node ./$TMP_BUILD_SCRIPT # run temp build script
rm ./$TMP_BUILD_SCRIPT   # remove temp build script

# build js source
grunt replace:js # inject dictionary
grunt uglify:js  # create minified build

# build jquery plugin
grunt replace:jquery # inject dictionary
grunt uglify:jquery  # create minified build

# build chrome extension
grunt copy:chromeExtension     # copy files to dist
grunt replace:chromeExtension  # inject version to manifest.json
grunt compress:chromeExtension # create zip file in release folder
grunt clean:chromeExtension    # remove chrome extension build files from dist

# build homepage
grunt clean:homepage   # clean docs folder
grunt copy:homepage    # copy images and html files
grunt replace:homepage # inject version and author
grunt concat:homepage  # copy & concat homepage scripts
grunt uglify:homepage  # minify homepage script
grunt cssmin:homepage  # copy & minify homepage css
rm ./docs/index.js     # remove unminified script

echo "All done!"
