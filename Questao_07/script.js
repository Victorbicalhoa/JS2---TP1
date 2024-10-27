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
  
  filmes.splice(filmes.indexOf("Matrix"), 1);
  filmes.splice(
    filmes.indexOf("Senhor dos Anéis"),
    1,
    "Senhor dos Anéis:A Sociedade do Anel",
    "Senhor dos Anéis:As Duas Torres",
    "Senhor dos Anéis:O Retorno do Rei"
  );
  