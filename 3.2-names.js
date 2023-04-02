//1--
const ahmet = "ahmet";
const mehmet = "mehmet";
const secret = "super secret";
const marushka="marushka"
//utilsdeki dosya ile çalışacak mı onu test ediyoruz

//4-
//console.log(module); //yazıyorsun sonra vscode terminale node ve dosya ismi   yani node 3.2-names.js
//run yaptığın zaman object module gözüküyor. onun içindeki exports ile ilgileniyorum.
//dolayısısyla  
module.exports={ahmet,mehmet} // diyebilirsin böylece ahmet shared oluyor. buradan say hey'e git  (test alanına yani )  // iki tane item olduğu için object içinde yolladı tek item olsa doğrudan yapar örneği var utils de oraya git