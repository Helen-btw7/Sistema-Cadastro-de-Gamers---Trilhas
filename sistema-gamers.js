const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
  console.log("\n======================================");
  console.log("--------- SISTEMA DE GAMERS -------");
  console.log("1 - Cadastrar");
  console.log("2- Deletar");
  console.log("3- Mostrar Equipe");
  console.log("4- Cálculo da Média da Equipe");
  console.log("5- Buscar Jogador");
  console.log("6- Atualizar Pontos");
  console.log("7- Sair");
}

function mostrarEquipe() {
  if (time.length === 0) {
    return;
  }

  for (let i = 0; i < time.length; i++) {
    let jogador = time[i];
    console.log(
      i +
        1 +
        "." +
        jogador.nome +
        " | Função: " +
        jogador.funcao +
        "| Pontuação: " +
        jogador.pontuacao,
    );
  }
}

function cadastrarJogador() {
  let nomeJogador = prompt("Digite o nome do(a) jogador(a): ");
  let funcaoJogador = prompt("Digite o função do jogador(a): ");
  let pontuacaoJogador = Number(prompt("Digite o pontuação do jogador(a): "));

  if (isNaN(pontuacaoJogador)) {
    console.log("Pontuação inválida!");
    return;
  } else {
    let recruta = {
      nome: nomeJogador,
      funcao: funcaoJogador,
      pontuacao: pontuacaoJogador,
    };

    time.push(recruta);
    console.log("Jogador(a) " + nomeJogador + " foi cadastrado com sucesso!");
  }
}

function deletarJogador() {
  if (time.length === 0) {
    console.log("Nenhum jogador(a) cadastrado.");
    return;
  }

  let nomeDeletado = prompt("Digite o nome a ser deletado: ");
  let indexDeletado = -1;

  for (let i = 0; i < time.length; i++) {
    if (time[i].nome === nomeDeletado) {
      indexDeletado = i;
      break;
    }
  }

  if (indexDeletado === -1) {
    console.log("Jogador(a) não encontrado.");
    return;
  }

  time.splice(indexDeletado, 1);
  console.log("O Jogador(a) foi deletado com sucesso!");
}

function calculoDaMedia() {
  if (time.length == 0) {
    console.log("Nenhum jogador(a) cadastrado.");
    return;
  }

  let totalpontos = 0;

  for (let i = 0; i < time.length; i++) {
    totalpontos = totalpontos + time[i].pontuacao;
  }

  let mediaPontos = totalpontos / time.length;

  console.log("O time possui uma pontuação de: ", mediaPontos);
}

function buscarJogador() {
  let nomeDesejado = prompt("Digite o nome desejado: ");
  console.log("Buscando por: " + nomeDesejado + "...");
  let encontrou = false;

  for (let i = 0; i < time.length; i++) {
    let jogadorAtual = time[i];

    if (jogadorAtual.nome === nomeDesejado) {
      console.log("Jogador(a) Encontrado(a)!");
      console.log(
        "Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao,
      );
      encontrou = true;
      break;
    }
  }
  if (encontrou === false) {
    console.log(
      " O Jogador(a) " + nomeDesejado + "não faz parte da da equipe.",
    );
  }
}

function atualizarPontos() {
  if (time.length === 0) {
    console.log("Nenhum jogador(a) cadastrado.");
    return;
  }

  let nomeAtualizado = prompt("Qual jogador(a) deseja atualizar? ");
  let encontrou = false;

  for (let i = 0; i < time.length; i++) {
    let jogadorAtual = time[i];

    if (jogadorAtual.nome === nomeAtualizado) {
      let pontosDiarios = Number(
        prompt("Quantos pontos o jogador(a) conquistou hoje? "),
      );

      if (isNaN(pontosDiarios)) {
        console.log("Pontuação inválida!");
        return;
      }
      jogadorAtual.pontuacao += pontosDiarios;

      console.log("Pontuação atualizada com sucesso!");
      console.log("Pontuação atual: " + jogadorAtual.pontuacao);

      encontrou = true;
      break;
    }
  }
  if (encontrou == false) {
    console.log("Nenhum jogador(a) encontrado.");
  }
}

while (continuar === true) {
  mostrarMenu();
  let opcao = prompt("Digite sua opção: ");

  if (opcao === "1") {
    cadastrarJogador();
  } else if (opcao === "2") {
    deletarJogador();
  } else if (opcao === "3") {
    mostrarEquipe();
  } else if (opcao === "4") {
    calculoDaMedia();
  } else if (opcao === "5") {
    buscarJogador();
  } else if (opcao === "6") {
    atualizarPontos();
  } else if (opcao === "7") {
    continuar = false;
  } else {
    console.log("Jogador(a) não encontrado.");
  }
}
