var fs = require("fs");

// @@dictionary

var prefix = "(";
var suffix = ")";

var content = `<?xml version="1.0" encoding="UTF-8"?>
<!--
    ASCIImoji keyboard shortcuts for Mac OS
    Version: @@version

    By @@author
    https://asciimoji.com
-->
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<array>
`;

var entries = Object.keys(dictionary);

function escape(str) {
  str = str.replace(/&/g, "&amp;");

  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");

  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");

  return str;
}

entries.forEach(key => {
  var entry = dictionary[key];

  entry.words.forEach(word => {
    word = escape(word);

    if (typeof entry.ascii === "string") {
      var ascii = entry.ascii;
      ascii = escape(ascii);

      content += `    <dict>
        <key>phrase</key>
        <string>${ascii}</string>
        <key>shortcut</key>
        <string>${prefix + word + suffix}</string>
    </dict>
`;
    }
  });
});

content += `</array>
</plist>`;

fs.writeFileSync("./dist/macos-dictionary/asciimoji.plist", content);
