var fs = require("fs");

// @@dictionary

var content = "";

for ([key, values] of Object.entries(dictionary)) {
  if (typeof values.ascii === "function") {
    continue; // we need to skip functions as this is a static list
  }
  content += `${[...new Set([key, ...values.words])]} ${values.ascii}\n`;
}

fs.writeFileSync("./dist/text-file/asciimoji.txt", content);
