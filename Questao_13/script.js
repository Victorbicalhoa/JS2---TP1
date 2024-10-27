let fibonacci = [0, 1];

while (true) {
  let nextNumber =
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];

  if (nextNumber > 55) {
    break;
  }

  fibonacci.push(nextNumber);
}
console.log(fibonacci);
