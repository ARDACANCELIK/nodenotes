//example 1 -
// const { readFile } = require("fs");
// console.log("started a first task ");
// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   console.log("completed first task");
// });
// console.log("starting a new task");

//example 2

//started operating system

// console.log("first ");
// setTimeout(() => {
//   console.log("second");
// }, 0);
// console.log("third");

//completed amd exited operating system

//example 3

// setInterval(() => {
//     console.log("hello world ");
// }, 2000);
// console.log("i will run first ");
// process stays alive unless
// killing the process control+c
//unexpeceted error.

//example 4
// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("request event "); //everytime the request comes in we invoke  this callback(const server yani ends with res.end).
//   res.end("hello world");
// });

// server.listen(5000, () => {
//   console.log("serverlistening on port :5000");
// });
// localhost'a gittiğimizde sayfayı yenileyince request event yazısı çıkıyor.
// genel sonuç : önce server listening yazısı sonra bir request olursa request event yazısı
