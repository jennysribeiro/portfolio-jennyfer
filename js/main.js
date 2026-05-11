/* ============================================
   PORTFÓLIO - JENNYFER DE SOUZA RIBEIRO
   JavaScript compartilhado entre todas as páginas
   ============================================ */

// ============================================
// TEMA CLARO / ESCURO
// Salva a preferência do usuário no localStorage
// ============================================
(function () {
  const btnTema = document.getElementById('btn-tema');

  // Carrega tema salvo ao abrir a página
  if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('dark-mode');
    if (btnTema) btnTema.textContent = '☀️ Claro';
  }

  // Alterna tema ao clicar no botão
  if (btnTema) {
    btnTema.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      const escuro = document.body.classList.contains('dark-mode');
      btnTema.textContent = escuro ? '☀️ Claro' : '🌙 Escuro';
      localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
    });
  }
})();

// ============================================
// MENU HAMBÚRGUER (responsivo para mobile)
// Mostra/esconde os links ao clicar no botão
// ============================================
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const aberto = navLinks.classList.toggle('aberto');
      // Acessibilidade: indica estado do menu
      toggle.setAttribute('aria-expanded', aberto);
    });

    // Fecha o menu ao clicar em qualquer link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('aberto');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }
})();

// ============================================
// MARCA O LINK ATIVO NO MENU
// Compara a URL atual com o href de cada link
// ============================================
(function () {
  const links = document.querySelectorAll('.nav-links a');
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === paginaAtual) {
      link.classList.add('ativo');
    }
  });
})();
