let burgerMenu      = document.querySelector('.burger-menu');
let burgerNav       = document.querySelector('.burger-nav');

burgerMenu.addEventListener('click', function(){
    if(burgerMenu.classList.contains('closed')){
        burgerNav.style.display     = 'block';
        burgerMenu.classList.remove('closed');
        burgerMenu.classList.add('open');
    }else{
        burgerNav.style.display     = 'none';
        burgerMenu.classList.remove('open');
        burgerMenu.classList.add('closed');
    }
});