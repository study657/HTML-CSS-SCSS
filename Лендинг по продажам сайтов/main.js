let closeButton     = document.querySelector('.closeButton');
let popUp           = document.querySelector('.pop-up');
let enterButton     = document.querySelector('.enter');
let visible         = document.querySelector('.visible');
let invisible       = document.querySelector('.invisible');
let passInput       = document.querySelector('[name="pass"]');
let burgerMenu      = document.querySelector('.burger-menu');
let burgerNav       = document.querySelector('.burger-nav');
let burgerEnter     = document.querySelector('.burger-enter');

enterButton.addEventListener('click', function(){
    popUp.style.display = 'flex';
});

burgerEnter.addEventListener('click', function(){
    popUp.style.display = 'flex';
    burgerNav.style.display   = 'none';
    burgerMenu.classList.remove('open');
    burgerMenu.classList.add('closed');
});

closeButton.addEventListener('click', function(){
    popUp.style.display = 'none';
});

invisible.addEventListener('click', function(){
    visible.style.display   = 'block';
    invisible.style.display = 'none';
    passInput.type          = 'text';
});

visible.addEventListener('click', function(){
    visible.style.display   = 'none';
    invisible.style.display = 'block';
    passInput.type          = 'password';
});

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