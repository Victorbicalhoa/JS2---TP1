let filmes = [
    "Deadpool",
    "Senhor dos Anéis",
    "Um Dia",
    "Matrix",
    "Salão de Baile",
    "De Volta para o Futuro",
    "Paris is Burning",
    "Longlegs",
    "Hellboy 2",
    "Pearl",
    "X",
    "Jurassic Park",
  ];
  
  let pergunta1 = prompt("Primeira ou segunda metade do vetor?").toLowerCase;
  let pergunta2 = Number(prompt("Quantos filmes? (De 1 a 3"));
  
  let primeiraMetade = filmes.slice(0, 6);
  let segundaMetade = filmes.slice(6);
  
  if (pergunta1 === "primeira" && pergunta2 === 1)
    [
      console.log(
        primeiraMetade[Math.floor(Math.random() * primeiraMetade.length)]
      ),
    ];
  else if (pergunta1 === "primeira" && pergunta2 === 2)
    [
      console.log(
        primeiraMetade[Math.floor(Math.random() * primeiraMetade.length)]
      ) +
        " e " +
        primeiraMetade[Math.floor(Math.random() * primeiraMetade.length)],
    ];
  else if (pergunta1 === "primeira" && pergunta2 === 2)
    [
      console.log(
        primeiraMetade[Math.floor(Math.random() * primeiraMetade.length)]
      ) +
        " e " +
        primeiraMetade[Math.floor(Math.random() * primeiraMetade.length)] +
        " e " +
        primeiraMetade[Math.floor(Math.random() * primeiraMetade.length)],
    ];
  else if (pergunta1 === "segunda" && pergunta2 === 1)
    [
      console.log(
        segundaMetade[Math.floor(Math.random() * segundaMetade.length)]
      ),
    ];
  else if (pergunta1 === "segunda" && pergunta2 === 2)
    [
      console.log(
        segundaMetade[Math.floor(Math.random() * segundaMetade.length)] +
          " e " +
          segundaMetade[Math.floor(Math.random() * segundaMetade.length)]
      ),
    ];
  else if (pergunta1 === "segunda" && pergunta2 === 3)
    [
      console.log(
        segundaMetade[Math.floor(Math.random() * segundaMetade.length)] +
          " e " +
          segundaMetade[Math.floor(Math.random() * segundaMetade.length)] +
          " e " +
          segundaMetade[Math.floor(Math.random() * segundaMetade.length)]
      ),
    ];
  