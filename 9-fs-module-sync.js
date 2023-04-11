//file system module
//const {readFileSync}=require("fs") //same as
// const fs=require("fs")
// fs.readFileSync
const { readFileSync, writeFileSync } = require("fs");
//first ve second txt fileları kullanacak
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8"); //ne yazıyorsa içeriğine ulaştı
console.log(first, second);
// yeni dosya yaratmak ise writefilesync / provide two arguments alıyor ilk filename dosya orada değilse yaratıyor, ikincisi geçmek istediğimiz değer
writeFileSync(
  "./content/result-sync.txt",
  `buradan yarattım dosyayı: ${first},${second}`
);
console.log("done with task");
console.log("starting new task");
//node dosya ismini yani 9-fs-module  yazdığın anda yaratıyor result-sync dosyasını
//dosya içinde birşey zaten varsa overwrite yapıyor ama append yapmak ekleme yapmak istiyorsan bir arguman daha geçecen  o da  flag
//   writeFileSync(
//     "./content/result-sync.txt",
//     `buradan yarattım dosyayı: ${first},${second}`,
//     { flag: "a" }
//   );
