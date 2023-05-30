function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
let unidad = prompt("Ingrese la unidad de temperatura (C o F):");

if (unidad.toUpperCase() === "C") {
  let fahrenheit = celsiusToFahrenheit(temperatura);
  console.log(`${temperatura}°C equivale a ${fahrenheit}°F`);
} else if (unidad.toUpperCase() === "F") {
  let celsius = fahrenheitToCelsius(temperatura);
  console.log(`${temperatura}°F equivale a ${celsius}°C`);
} else {
  console.log("Unidad de temperatura inválida");
}
