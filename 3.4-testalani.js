//3   //6 ise uncomment yap sayheyleri
// sayHey(ahmet);
// sayHey(mehmet);
// sayHey(secret);
// sayHey("marushka");
//sayMama(mehmet)
// bu komutlar çalışacak mı  node testalanı.js yazınca module not found yazısı çıkıyor.
//names 'e git orada dene' ---
//____________________________________________
//tekrar buraya geldik  //5
const namer = require("./3.2-names");
//const { ahmet } = require("./3.2-names");//destructure oluyor  yahut  xxberaber
console.log(namer); // 7  ve ardından node dosyaismini yaz bu dosyamızın yani testalanı

//9
const sayMama = require("./3.3-utils"); //yahut doğrudan const sayMama  diyebilirsin yahut başka bir ad

 //sayMama(ahmet); xx beraber
 sayMama(namer.mehmet);
 sayMama(namer.ahmet);