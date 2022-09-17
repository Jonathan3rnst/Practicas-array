/*  function Persona(nombre , edad , direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}
let nombrepers = prompt("ingrese su nombre");
let edadpers = prompt("ingrese su edad");
let direccionpers= prompt("ingrese su direccion");

const persona1 = new Persona (nombrepers , edadpers , direccionpers);
alert(`hola ${nombrepers} , veo que tenes ${edadpers} y vivis en ${direccionpers},  como estas ?`);
 





 */
let mostrarProducto = []
let productos;

const acumularP = () =>{
  for (let i = 0; i <= 5; i++) {
    productos = prompt("ingrese su producto a listar")
    mostrarProducto.push(productos)
    
    
  }
  alert(mostrarProducto.toString());

}

acumularP();





















/* const productos = [] 

for (let i = 0; i <= producto10; i++) {
  let x = prompt("ingrese sus productos");
  const element = productos[i];
  
}


console.log(productos); */





/* function names() {
  var nombres = [];
  var cont = "";
  for (var i = 0; i <= 2; i++) {
      var x = prompt("Ingresa tu nombre:");
      nombres[i] = x;
  }
  for (var i = 0; i <= 2; i++) {
      cont += nombres[i] + " ";
  }
  document.getElementById("here").innerHTML = cont;
}

names(); */



/* let action = prompt();
let items = action.split(' ');

console.log(items);

 */























































// const arregloVacio = [];
// const numeros = [1, 2, 3, 2, 4, 5, 3];
// const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
// const booleanos = [true, false];
// const varios = [1, "gabriel", true];

// console.log(numeros[2] + numeros[5]);

// for (let index = 0; index < nombres.length; index++) {
//   const elemento = nombres[index];
//   console.log(index, elemento);
// }

// nombres[0] = "mateo";
// console.log(nombres);

/* const nombres = ["camila", "andres"];
nombres.push("Pedro"); //agrega elementos al final del arreglo
console.log(nombres);
nombres.unshift("Yuliana");//agregar elementos al principio del arreglo
console.log(nombres); */

/* const nombres = ["camila", "andres"];
nombres.pop(); //sacar elemento del final
console.log(nombres); */

/* const nombres = ["camila", "andres"];
nombres.shift(); //sacar elemento del inicio del arreglo
console.log(nombres); */

/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
nombres.splice(1, 3);// elimina desde la posicion dada y la cantidad dada */

/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
nombres.splice(1, 0, "gabriel");// agrega elemento en la posicion pasada como primer parametro */
// console.log(nombres);

/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
console.log(nombres.join("")); //une todos los elementos de un arreglo en un string y los separa por el parametro pasado
 */

/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
const perritos = ["firu", "zeus", "max"];
const varios = perritos.concat(nombres); //une dos arreglos en uno solo
console.log(varios); */

/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
const fragmento = nombres.slice(1, 5);// genera una copia de un fragmento del arreglo
console.log(fragmento); */

/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
console.log(nombres.indexOf("mario")); //busca la posicion del elemento pasado por parametro */

/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
console.log(nombres.includes("pedro")); */

/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
nombres.reverse();
console.log(nombres); */
/* const nombres = ["camila", "andres", "mariana", "pedro", "mario", "yuliana"];
const eliminarNombre = (nombre) => {
  let indice = nombres.indexOf(nombre);
  if(indice != -1){
    nombres.splice(indice, 1);
  }
  console.log(nombres);
};
eliminarNombre("mariana"); */

/* const productos = [
  { id: 1, producto: "Arroz" },
  { id: 2, producto: "Fideo" },
  { id: 3, producto: "Pan" },
];
for(const producto of productos){
  console.log(producto);
} */

/* class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  let productos = [];
  productos.push(new Producto(productos.length + 1, "camisa", 1000));
  productos.push(new Producto(productos.length + 1, "pantalon", 2000));
  
  console.log(productos);
  
  let objeto = {
    nombre: "jaime",
    edad: 34
  }
  
  console.log(objeto.nombre); */