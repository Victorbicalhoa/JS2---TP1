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
  
  let indice1 = filmes.indexOf("Senhor dos Anéis");
  let indice2 = filmes.indexOf("Matrix");
  console.log(filmes.splice(indice1 + 1, indice2 - (indice1 + 1)));
  