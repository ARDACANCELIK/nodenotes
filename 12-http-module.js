//allows us to set up a web server
//what do web servers do , they keep on listening  request
//request(client wants from  webrowser a  request of your webpage--- client request ) ve response(what we send back)
const http = require("http");
const server = http.createServer((req, res) => {
  //if reqest url is equal to the homepage
  if (req.url === "/") {
    //this is i would like to send back
    res.end("welcome haci");
    return; //sorun çözücü
  }
  if (req.url === "/about") {
    res.end("welcome to about page haci");
    return; //sorun çözücü
  }
  res.end(`<h1>Ooops hata verdi </h1>
  <p>we cant find the page you are looking for </p>
  <a href="/">back to home </a>
  `);
  //   res.write("welcome to our new home page");
  //   res.end();
});

server.listen(5000);
//node 12-http-module.js  yazınca ilk websitesini yapmış oluyorsun.
// what adress or end point is requesting == url  .
//home page "/"  işareti bu url requestinde  simple slash

//not::: //return olmadıkça kodu okumaya devam ediyor ve biz sadece bir response yollayabiliriz per request  cçzüm return diyebiliriz if bloklarına yahut,, (if, else if, else) diyebiliriz yoksa hem home page a hoş geldiniz diyecek hem de errorü yollayacak return de sorunu çömzmek için
