//ejercicio arreglos

// Crea una función llamada "obtenerSuma" que reciba un arreglo de números como parámetro y
// devuelva la suma de todos los elementos del arreglo.

function obtenerSuma(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}

// Implementa una función llamada "obtenerPares" que tome un arreglo de números como
// parámetro y devuelva un nuevo arreglo con solo los números pares del arreglo original.

function obtenerPares(arreglo) {
  let pares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    }
  }
  return pares;
}

// Escribe una función llamada "obtenerPromedioPonderado" que reciba dos arreglos: uno con
// las notas de los estudiantes y otro con los pesos correspondientes. La función debe calcular y
// devolver el promedio ponderado de las notas.

function obtenerPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length) {
    return "Los arreglos deben tener la misma longitud.";
  }
  let suma = 0;
  let sumaPesos = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }
  let promedioPonderado = suma / sumaPesos;
  return promedioPonderado;
}

// Crea una función llamada "obtenerMaximo" que tome un arreglo de números como
// parámetro y devuelva el número máximo encontrado en el arreglo.
function obtenerMaximo(arreglo) {
  let maximo = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }
  return maximo;
}
