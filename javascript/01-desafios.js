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

/* crear 6 funciones, (sumar, restar, multiplicar, dividir, modulo),
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

/* primera parte:
crear 6 funciones, (sumar, restar, multiplicar, 
dividir, modulo), cada funcion debe recibir 2 numeros 
y retornar un resultado segun corresponda
segunda parte:
crear una funcion que reciba el nombre
de la operacion y 2 numeros, debe imprimir el 
resultado*/

//primera parte

function suma(number1, numeber2) {
  return `${number1} + ${numeber2} = ${number1 + numeber2}`;
}
let resultadosuma = suma(8, 4);
console.log(resultadosuma);

function sustraer(number1, numeber2) {
  return `${number1} - ${numeber2} = ${number1 - numeber2}`;
}
let resultadoresta = sustraer(8, 4);
console.log(resultadoresta);

function producto(number1, numeber2) {
  return `${number1} x ${numeber2} = ${number1 * numeber2}`;
}
let resultadoproducto = producto(8, 4);
console.log(resultadoproducto);

function divition(number1, numeber2) {
  return `${number1} / ${numeber2} = ${number1 / numeber2}`;
}
let resultadodivition = divition(8, 4);
console.log(resultadodivition);

function exponencial(number1, numeber2) {
  return `${number1} ^ ${numeber2} = ${number1 ** numeber2}`;
}
let resultadoexponencial = exponencial(8, 4);
console.log(resultadoexponencial);

//segunda parte

//function operaciones(operar, number1, number2) {
// if (operar === "sumar");
//{
// console.log(`${number1} + ${number2} = ${resultadosuma(number1, number)}`);
// }
//}

//operaciones("sumar", 8, 4);

// ejemplo PEMDAS

/* crear una funcion que reciba 4 numeros,
mostrar el resultado de: a/b*(c+d)*/

function pmdas(a, b, c, d) {
  console.log((a / b) * (c + d));
}
pmdas(68, 2, 3, 9);

//control de flujo, condicional

function saludar(nombre) {
  if (nombre) {
    console.log(``);
  }
}

/* crear una funcion que reciba dos numeros,
imprimir el mayor*/

function mayorque(a, b) {
  if (a > b) {
    console.log(a);
  }
}

mayorque(4, 2);

/* crear una funcion que reciba
un numero, imprimir si negativo
o si es positivo*/

function posinega(a) {
  if (a >= 0) console.log(`positivo`);
  else console.log(`negativo`);
}
posinega(-5);
posinega(5);

/* crear una funcion que reciba 2 numero, 
imprimir si el primer numero
 es divisible por el segundo numero*/

function divisible(a, b) {
  if (a % b === 0) console.log(`divisble`);
  else console.log(`no divisible`);
}

divisible(12, 3);

/* crear una funcion que reciba 1 numero,
imprimir si es negativo
o si es positivo o si es cero*/

function posinegacero(a) {
  if (a > 0) console.log(`positivo`);
  if (a < 0) console.log(`negativo`);
  if (a === 0) console.log(0);
}

posinegacero(-4);
