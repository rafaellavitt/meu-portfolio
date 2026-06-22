// passo1, escolhendo quem
const elementoTexto = document.getElementById('digitacao');
const formacao = "estudante de Análise e Desenvolvimento de Sistemas";
// contador
let caractereIndex = 0
// passo2, o que fazer?
function digitarEfeito() {
    if (elementoTexto && caractereIndex < formacao.length) {// lenght conta a quantidade de caracteres
    elementoTexto.innerHTML += formacao.charAt(caractereIndex);
    caractereIndex++;
    setTimeout(digitarEfeito, 60);
    }
}
// passo3, quando? executar assim q o site abrir
document.addEventListener('DOMContentLoaded', digitarEfeito);