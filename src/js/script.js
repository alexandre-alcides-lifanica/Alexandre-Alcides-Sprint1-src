// PIN correto
const pinCorreto = "1234";

// Função para verificar o PIN
function verificarPIN() {
  const pinDigitado = document.getElementById("pin").value;
  const resultadoElemento = document.getElementById("resultado");

  if (pinDigitado === pinCorreto) {
    resultadoElemento.textContent = "PIN correto! Acesso concedido.";
  } else {
    let dica = "";

    for (let i = 0; i < pinDigitado.length; i++) {
      if (pinDigitado[i] === pinCorreto[i]) {
        dica += "O dígito " + pinCorreto[i] + " está correto. ";
      } else if (pinDigitado[i] < pinCorreto[i]) {
        dica += "O dígito " + pinDigitado[i] + " é menor que o correto. ";
      } else {
        dica += "O dígito " + pinDigitado[i] + " é maior que o correto. ";
      }
    }

    resultadoElemento.textContent = "PIN incorreto! " + dica;
  }
}

// Evento de clique do botão
document.getElementById("verificar").addEventListener("click", verificarPIN);