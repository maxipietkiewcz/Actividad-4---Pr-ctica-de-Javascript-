function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

let numero = parseInt(prompt("Ingrese un número:"));
let mensaje = esPrimo(numero) ? "El número es primo" : "El número no es primo";
console.log(mensaje);
