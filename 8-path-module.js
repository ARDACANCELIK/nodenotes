const path = require("path"); //path dosyası olsa böyle alıyoruz.

//path seperator  path.sep

//content subfolderı burada kullanıyoruz.
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//path.resolve  absolute path gösteriyor,it accepts a sequence of paths and resolves it to absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute); //dirname directory burada
