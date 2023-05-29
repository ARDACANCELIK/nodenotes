//nodeu yüklediğinde npm de yüklemiş oluyorsun  npm --v çek terminalini or npm --version

//local package or module or dependency is ::::  npm i <packageName>

//global package ise ::  npm install -g <packageName>

//global package daha çok Mac için  ::  sudo npm install -g <packageName>

//package.json - (stores important info about project/package)
//1- manual approach (create package.json in the root ,create properties)
//2- npm init (step by step , press enter to skip)
//3- npm init -y (everything default) // sonra json dosyasında manuel girersin istediklerini.

//ilk önce dependency yüklenmesi gerekiyor sayfa en başına http vs serverdan önce
const _ = require("lodash");
//now lets test
const items = [1, [2, [3, [4]]]];
const nova = _.flattenDeep(items);
console.log(nova);
//write this  "node  dosya ismi"    node 13-npm-command.js  tabi en önce lodashı indirecen  npm i lodash
