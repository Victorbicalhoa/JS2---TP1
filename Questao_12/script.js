let pesos = [70, 85, 60, 90, 75];

console.log("Ordem invertida:", pesos.slice().reverse());

console.log(
  "Ordem crescente:",
  pesos.slice().sort((a, b) => a - b)
);
