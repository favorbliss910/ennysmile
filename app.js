var myNav = document.querySelector('.mynav');
var openNav = document.querySelector('.open');
var closeNav = document.querySelector('.close');

openNav.addEventListener('click', show);
closeNav.addEventListener('click', close);

function show() {
  myNav.style.display = 'flex';
  myNav.style.left = '0';
}

function close(){
  myNav.style.left = '-100%';
}



