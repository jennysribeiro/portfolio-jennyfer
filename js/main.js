/* =================================================================
   Script principal do Portfólio
   Aluna: Jennyfer de Souza Ribeiro
   Disciplina: Ferramentas de Desenvolvimento Web - Uninter
   ================================================================= */

// Executa os scripts apenas quando a página terminar de carregar
window.onload = function() {
    console.log("Site carregado com sucesso!");
    animarBarrasDeHabilidade();
};

/* -----------------------------------------------------------------
   1. ANIMAÇÃO DAS BARRAS DE HABILIDADE (Página: Sobre Mim)
   ----------------------------------------------------------------- */
function animarBarrasDeHabilidade() {
    var barras = document.querySelectorAll('.barra-preenchida');
    
    if (barras.length > 0) {
        setTimeout(function() {
            for (var i = 0; i < barras.length; i++) {
                var largura = barras[i].style.width;
                barras[i].style.width = largura;
            }
        }, 500);
    }
}

/* -----------------------------------------------------------------
   2. VALIDAÇÃO DO FORMULÁRIO (Página: Contato)
   ----------------------------------------------------------------- */
function validarFormulario(evento) {
    // Impede a página de recarregar e apagar os dados sozinhos
    evento.preventDefault();

    // Pega os valores que o usuário digitou
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Verifica se os campos estão em branco
    if (nome === "" || email === "" || mensagem === "") {
        alert("Atenção: Por favor, preencha todos os campos do formulário.");
        return false;
    }

    // Validação do e-mail
    if (email.indexOf("@") === -1) {
        alert("Erro: O e-mail digitado precisa conter um '@'.");
        return false;
    }

    // Se passar por todas as verificações, dá o aviso de sucesso!
    alert("Obrigada pelo contato, " + nome + "! Sua mensagem foi recebida com sucesso e responderei em breve.");
    
    // Limpa os campos do formulário para o usuário
    document.getElementById('form-contato').reset();
}
