// ======================================
// VIDA VERDE - JAVASCRIPT
// ======================================


// Mensagem de confirmação do formulário
const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;

        alert(
            "Olá, " + nome +
            "! 🌱\n\nSua mensagem foi enviada com sucesso."
        );

        formulario.reset();

    });

}


// ======================================
// ANO AUTOMÁTICO DO RODAPÉ
// ======================================

const anoAtual = new Date().getFullYear();

const rodapes = document.querySelectorAll("footer p");

rodapes.forEach(function(rodape) {

    rodape.innerHTML =
        "&copy; " + anoAtual +
        " Vida Verde - Um cuidado a mais";

});