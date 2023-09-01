//bloking code örneği  - nedir mesela nested for loop

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Home Page");
//   }
//   if(req.url==="/about"){
//     //bloking code !
//     for(let i=0;i<1000;i++){
//         for(let j=0;j<1000;j++){
//             console.log(`${i} ${j}`);//doesnt matter what we write we want to show nested loop as bloking code
//         }
//     }
//     res.end("About Page")
//   }
//    res.end("Error Page");
// });

// server.listen(5000,()=> {
//     console.log("Server Listening on port 5000...");
// })

//sonuç sadece about sayfasına navigate edip giden bloklanmıyor(çünkü zaman alan bir işlem) ayrıca home page'e ulaşma işlemi de bloklanıyor git aout sayfasını yenile ardından home'u o da bekliyor. about sayfası bitmeden diğerleri de yenilenmiyor.
// bloking code örneği  sonu

//Set Up promises
// eylemin ilk hali
// const { readFile } = require("fs");
// readFile("./content/first.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// }); // ama bazı sorunlar oluyor birden fazla text gibi dolayısıyla ikinci hale dönüşüyor. yani promise ile en son async awaite dönüşecek sistem. Şu anda promise ile yukardaki kodu refactor ediyoruz  aşağıda
// const { readFile } = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// //i can invoke gettext and it can return a promise ve ardından chaining .then
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//şimdi package.json'da scripts start'a bu dosaynın ismini yazarsak bu dosya işleme başlıyor. hnagi dosya ile uğraşıyorsan yahut doğrudan node 20-async-patterns.js  yazarsın. sonuç: hello this is first text file

///yukarıdaki sistemde zahmetli promise uğraştırıyor en iyisi async await hadi kodu bir kez daha refactor yapıp async await haline getirelim-
// const { readFile } = require("fs");
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// şimdi bunu da native option ile tekrar fakat son kez refactor edip çok daha temiz ve kısa hale getireceğiz böylece async await en temiz hali getText fonksiyonunu da düzelterek ortadan kaldırıp yeni bir şey  ortaya çıkartacak.

// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");
//     await writeFilePromise(
//       "./content/result-asyncpatterns.txt",
//       `this is awesome: ${first}${second}`
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
//dosya yoksa dosya oluşturuyor async patterns diye

//daha da  ileri gidip
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile); kısımlarını comment out yap  yani onun yerine şunu yaz

/// Final Design  aşağısı son hali  call back yerine async await her zaman daha iyidir .

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
const start = async () => {
  try {
    //readFilePromise tekrar readFile olacak
    // const first = await readFilePromise("./content/first.txt", "utf8");
    // const second = await readFilePromise("./content/second.txt", "utf8");
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-asyncpatterns.txt",
      `this is awesome: ${first}${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
// a append demek one more time repeats
/////////////////////////////////////////////////
