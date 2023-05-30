//ejercicios funciones

// Escribe una función llamada "esMayorEdad" que reciba una edad como parámetro y devuelva
// true si la edad es mayor o igual a 18, y false en caso contrario.

function esMayorEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// Crea una función llamada "calcularAreaRectangulo" que tome dos parámetros: base y altura.
// La función debe calcular y devolver el área del rectángulo utilizando la fórmula área = base * altura.

function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}

// Implementa una función llamada "esPalindromo" que reciba una cadena como parámetro y
// devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a
// izquierda), y false en caso contrario. Por ejemplo, para la cadena "radar" la función debería
// devolver true.

function esPalindromo(cadena) {
  let cadenaReversa = cadena.split("").reverse().join("");
  if (cadena === cadenaReversa) {
    return true;
  } else {
    return false;
  }
}

// Crea una función llamada "generarNumeroAleatorio" que no tome parámetros y devuelva un
// número entero aleatorio entre 1 y 10.

function generarNumeroAleatorio() {
  let numero = Math.floor(Math.random() * 10) + 1;
  return numero;
}
