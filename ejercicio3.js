//ejercicio objeto

//Crea un objeto llamado &quot;producto&quot; con las propiedades &quot;nombre&quot;, &quot;precio&quot; y &quot;cantidad&quot;.
//Luego, escribe una función llamada &quot;calcularTotal&quot; que tome un objeto producto como
//parámetro y devuelva el total a pagar (precio * cantidad).

// Objeto producto
let producto = {
  nombre: "Producto A",
  precio: 10,
  cantidad: 2,
};

// Función calcularTotal.
function calcularTotal(producto) {
  return producto.precio * producto.cantidad;
}

//Implementa un objeto llamado &quot;persona&quot; con las propiedades &quot;nombre&quot;, &quot;edad&quot; y &quot;profesion&quot;.
//A continuación, escribe una función llamada &quot;presentarPersona&quot; que tome un objeto persona
//como parámetro y muestre en la consola una presentación de la persona.

// Objeto persona
let persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "Ingeniero",
};

// Función presentarPersona.
function presentarPersona(persona) {
  console.log("Nombre: " + persona.nombre);
  console.log("Edad: " + persona.edad);
  console.log("Profesión: " + persona.profesion);
}
//Crea una función llamada &quot;esMayorEdad&quot; que reciba un objeto persona como parámetro y
//devuelva true si la persona es mayor de edad (edad mayor o igual a 18), y false en caso
//contrario.

// Función esMayorEdad.
function esMayorEdad(persona) {
  return persona.edad >= 18;
}
