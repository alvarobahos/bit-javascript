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

/* crear formulario con funciones*/

/*crear una funcion y que cuando la 
llame genere una salida*/

/* REPASO*/

function formu(a, c, b, d) {
  if (a === 5) console.log(`el hombre es mas bonito que la mujer`);
  if (a === 4) console.log(`la mujer es mas bonita que el hombre`);
  if (b === 3) console.log(`conecta mas con los hombres`);
  if (a === 2) console.log(`conecta mas con las mujeres`);
  if (a === 6) console.log(`el hombre es mas aspero que la mujer`);
  if (d === 7) console.log(`la mujer es mas aspera que el hombre`);
  if (d === 8) console.log(`recocho mas con los hombres`);
  if (d === 9) console.log(`recocho mas con las mujeres`);
  if (b === 1)
    console.log(`me gusta el hombre con pelo largo y mujer pelo cortico`);
  if (b === 0)
    console.log(
      `me gusta el hombre con pelo corto, sin nada y mujer con pelo largo`
    );
  if (c === 10)
    console.log(`me gusta el hombre con pelo cedoso y mujer pelo cortico`);
  if (c === 11)
    console.log(`me gusta el hombre con sin pelo y mujer con pelo largo`);
  if (c === 12) console.log(`mujeres al fin`);
}

formu(4, 12, 1, 9);
