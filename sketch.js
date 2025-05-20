let series = [
  { nome: "breakind dead", idade: 0, categorias: ["ação", "aventura"] },
  { nome: "prison break", idade: 0, categorias: ["ação", "aventura"] },
  { nome: "debi e loide", idade: 0, categorias: ["ação", "aventura"] },
  { nome: "pinoquio", idade: 12, categorias: ["fantasia", "aventura"] },
  { nome: "joao vitor miranda", idade: 0, categorias: ["fantasia, aventura"] },
  { nome: "it a coisa", idade: 14, categorias: ["drama"] }
];

let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama;
let seriesRecomendados = [];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de series", 20, 30);

  // Coletar idade
  idadeUsuario = int(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasia = prompt("Você gosta de series de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de series de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de series de drama? (sim/não)").toLowerCase() === "sim";

  // Lógica de recomendação
  for (let serie of series) {
    if (idadeUsuario >= serie.idade) {
      if (
        (gostaFantasia && serie.categorias.includes("fantasia")) ||
        (gostaAventura && serie.categorias.includes("aventura")) ||
        (gostaDrama && serie.categorias.includes("drama"))
      ) {
        // Evita filmes duplicados
        if (!seriesRecomendados.includes(serie.nome)) {
          seriesRecomendados.push(serie.nome);
        }
      }
    }
  }

  // Exibir recomendações na tela
  if (seriesRecomendados.length > 0) {
    text("series recomendados para você:", 20, 70);
    for (let i = 0; i < seriesRecomendados.length; i++) {
      text("- " + seriesRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum serie disponível para sua idade e preferências.", 20, 70);
  }
}
