// built module de import etmene gerek yok ve require yazarken  /. kullanmana gerek
// yok

const os = require("os");
//os.     yaptığında birçok  method ve property çıkıyor
// yahut destructure
//const {getPriority}  = require("os"); // gibi

//info about current user
const user = os.userInfo();
console.log(user); // görmek için  "node 7-os-module.js"  yaz  vscode terminale

//method returns the system  uptime in seconds
console.log(`the System uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
