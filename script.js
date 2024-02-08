let cores = ["#f9f9f9", "#e6e6e6", "#d3d3d3", "#f8e9f9", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff", "#ccffff"];
let corIndex = 0;

let calculoEmAndamento = false;

const dados = [
  { codigo: 1, nome: "João", fatorMult: 4, pontuacao: 7.8 },
{ codigo: 2, nome: "Robson", fatorMult: 2, pontuacao: 8.5 },
{ codigo: 3, nome: "Whindersson", fatorMult: 3, pontuacao: 7.2 },
{ codigo: 4, nome: "Daiana", fatorMult: 5, pontuacao: 9.1 },
{ codigo: 5, nome: "Emily", fatorMult: 2, pontuacao: 8.6 },
{ codigo: 6, nome: "Pedro", fatorMult: 4, pontuacao: 7.9 },
{ codigo: 7, nome: "Paulo", fatorMult: 3, pontuacao: 8.3 },
{ codigo: 8, nome: "Henryque", fatorMult: 2, pontuacao: 7.6 },
{ codigo: 9, nome: "Isabella", fatorMult: 4, pontuacao: 8.7 },
{ codigo: 10, nome: "Jepeto", fatorMult: 3, pontuacao: 7.4 },
{ codigo: 11, nome: "Kelly", fatorMult: 5, pontuacao: 9.2 },
{ codigo: 12, nome: "Liliam", fatorMult: 2, pontuacao: 8.1 },
{ codigo: 13, nome: "Maria", fatorMult: 4, pontuacao: 7.7 },
{ codigo: 14, nome: "Rodrigo", fatorMult: 3, pontuacao: 8.9 },
{ codigo: 15, nome: "Olivia", fatorMult: 2, pontuacao: 7.3 }
];

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("codigoInput").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          calcularPontuacao();
      }
  });

  document.getElementById("conquistasInput").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          calcularPontuacao();
      }
  });
});

function calcularPontuacao() {
  const codigo = parseInt(document.getElementById("codigoInput").value);
  const conquistas = parseInt(document.getElementById("conquistasInput").value);

  const dado = dados.find(item => item.codigo === codigo);
  
  if (!dado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = "Código não encontrado.";
    return;
  }

  const pontuacao = (conquistas * dado.fatorMult * dado.pontuacao).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = `Nome: ${dado.nome}, Pontuação Total: ${pontuacao}`;
}


function mudarCorTela() {
  const body = document.querySelector("body");
  corIndex = (corIndex + 1) % cores.length;
  body.style.backgroundColor = cores[corIndex];
}