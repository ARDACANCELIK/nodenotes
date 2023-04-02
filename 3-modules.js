//Modules
const john = "john";
const peter = "peter";

const sayHi = (name) => {
  console.log(`hello there  ${name}`);
};

const ahmet = function (age) {
  console.log(`hello my age is ${age} `);
};
ahmet(4);

sayHi(john);
sayHi(peter);
sayHi("marushka");

//everyfile is a module(by default) , modules are encapsulated code

//bu dosya ile bir işi yok diğer dosyaların
