function calcularTotalCompra() {
  let productos = [];
  let producto = "";
  while (producto !== "total") {
    producto = prompt(
      "Ingrese el precio del producto (o 'total' para finalizar):"
    );
    if (producto !== "total") {
      productos.push(parseFloat(producto));
    }
  }

  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    total += productos[i];
  }

  return total;
}

let totalCompra = calcularTotalCompra();
console.log(`El total de la compra es: ${totalCompra}`);
