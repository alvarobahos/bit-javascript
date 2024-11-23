let nombre = "alvaro bahos";
const edad = 30;
console.log("hola, soy " + nombre + " y tengo " + edad + " años.");
console.log(`hola, soy ${nombre} y tengo ${edad} años.`);

// crear una funcion llamada presentarme, dentro crear una variable y asiganerle su nombre, crear una constante y asignarle su edad, luego imprimir en consola: hola, soy - y tengo- años
function presentarme() {
  let nombre = "alvaro bahos";
  const edad = 30;
  console.log(`hola, soy ${nombre} y tengo ${edad} años.`);
}
presentarme();

// crear una funcion que reciba un nombre y edad por parametros, luego imprimir en consola hola, soy - y tengo - años
function soyyo(nombre, edad) {
  console.log(`hola, soy ${nombre} y tengo ${edad} año.`);
}

soyyo("alvaro", 30);

// crear una funcion que reciba nombre, apellido y una edad por parametros, la funcion debe imprimir en consola: su nombre es --- y usted tiene --- años. si no se recibe la edad imprimir: su nombre es ---- y usted tiene 100 años.

function namecomplete(nombre, apellido, edad = 100) {
  console.log(`su nombre es ${nombre} ${apellido} y usted tiene ${edad} años.`);
}

namecomplete("Alvaro", "Bahos", 30);
namecomplete("Alvaro", "Bahos");

/* crea una funcion que reciba dos parametros un nombre y
un apellido y retorne el nombre completo, pirmero
y luego el apellido y luego el nombre */

function retorno(nombre, apellido) {
  return `${apellido} ${nombre}`;
}

namecomplete = retorno("bahos", "alvaro");
let otherfirend = retorno("web", "desarrollo");
console.log(namecomplete, otherfirend);

/* crear una funcion que reciba
cuatro parametros, un nombre, una prenda,
un color y una cantidad y retorne: 
pepita tiene 2 camisas de color azul.*/

function fourparametros(nombre, prenda, color, cantidad) {
  return `${nombre} tiene ${cantidad} ${prenda} de color ${color}.`;
}

let historia = fourparametros("pepita", "2", "camisas", "azul");
let othehistoria = fourparametros("julio", "6", " pantalon", "azul");
console.log(historia);
console.log(othehistoria);

/* crear una funcion para saludar, si
la funcion recibe un nombre, imprimir
por consola: hola,---!, 
si la funcion no recibe un nombre,
imprimir: hola, desconocido!*/

function saludar(nombre = "desconocido") {
  console.log(`hola, ${nombre}!`);
}

saludar("alvaro");
saludar();

/* crear 5 funciones, (sumar, restar, multiplicar, dividir, modulo),
debe recibir 2 numeros e imprimir el resultado asi: 
EJ entrada: 8, 4
Ej salida: 8 + 4 = 12*/

function suma(number1, numeber2) {
  console.log(`${number1} + ${numeber2} = ${number1 + numeber2}`);
}
suma(8, 4);

function resta(number1, numeber2) {
  console.log(`${number1} - ${numeber2} = ${number1 - numeber2}`);
}
resta(8, 4);

function multiplicacion(number1, numeber2) {
  console.log(`${number1} x ${numeber2} = ${number1 * numeber2}`);
}
multiplicacion(8, 4);

function division(number1, numeber2) {
  console.log(`${number1} / ${numeber2} = ${number1 / numeber2}`);
}
division(8, 4);

function modul(number1, numeber2) {
  console.log(`${number1} % ${numeber2} = ${number1 % numeber2}`);
}

modul(7, 3);
modul(100, 25);

function potenciacion(number1, numeber2) {
  console.log(`${number1} ^ ${numeber2} = ${number1 ** numeber2}`);
}

potenciacion(10, 5);
