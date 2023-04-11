const { readFile, writeFile } = require("fs");

//asyncronous için we need to provide a callback
//second argument is callback function
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // functionality here for result
  //   console.log(result)
  const first = result;
  readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./content/result-async.txt",
      `buradan yarattım dosyayı: ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
        console.log(result);
      }
    );
  });
});
console.log("starting next text");
//burada start dedikten sonra starting new task diyor  done with this task daha sonra. okuma işlemini en son yapıyor bekletmiyor diğer kullanıcıyı. sync çlışmasında ise her şey sırası ile birinci kullanıcı bir işlem yaparsa diğer kullanıcılar bekliyor.

//utf kodu yazmazsan buffer yazısı çıkıyor  buffer callback öncesi //path sonrası

//result will be undefined fakat async txt dosyası oluşuyor güzel

//alternatives are async await ve promises. (bu sayfa güzel fakat eksikleri çok ve  20'nolu async patterns.js dosyasının primitive versiyonu  fakat en iyisi  promises ve async await )
