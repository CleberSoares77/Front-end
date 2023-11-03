// Criando um objeto JSON com informações de cidades
var cidades = [
  {
    "nome": "Araçuaí",
    "estado": "Minas Gerais",
    "populacao": 36482
  },
  {
    "nome": "Itinga",
    "estado": "Minas Gerais",
    "populacao": 26580
  },
  {
    "nome": "Itaobim",
    "estado": "Minas Gerais",
    "populacao": 35957
  },
  {
    "nome": "Virgem da Lapa",
    "estado": "Minas Gerais",
    "populacao": 12798
  }
];

// Exibindo informações sobre as cidades
cidades.forEach(function(cidade) {
  console.log("Cidade: " + cidade.nome);
  console.log("Estado: " + cidade.estado);
  console.log("População: " + cidade.populacao.toLocaleString() + " habitantes");
  console.log("---------------------------");
});
