let peso = 102.5;
let listaPecas = [
  "Disco de freio",
  "Amortecedor",
  "Virabrequim",
  "Vela",
  "Bateria",
  "Radiador",
  "Biela",
  "Pistão",
  "Fusível",
];

let numeroPecas = listaPecas.length;

let nomePeca = listaPecas[4];

if (peso > 100) {
  console.log("A peça possui um peso adequado, prosseguindo com o cadastro...");

  if (numeroPecas < 10) {
    console.log(`A lista ainda possui espaço, seguindo com o cadastro...`);

    if (nomePeca.length > 3) {
      console.log("Nome da peça é valido, seguindo com o cadastro...");
    } else {
      console.log("Peça inválida, o nome deve ter mais de 3 caracteres!");
    }
  } else {
    console.log("A lista já está com o numero máximo de ítens permitidos");
  }
} else {
  console.log("A peça não possui o peso mínimo de 100g exigido!");
}
