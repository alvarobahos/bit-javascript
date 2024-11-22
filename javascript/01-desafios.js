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
