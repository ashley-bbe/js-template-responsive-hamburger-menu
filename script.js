//PC⇔SP版切り替えができるハンバーガーメニュー

const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navUl.classList.toggle('show');
});

////////////////////////////////////////////