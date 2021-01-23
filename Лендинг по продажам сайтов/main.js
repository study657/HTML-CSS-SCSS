let closeButton     = document.querySelector('.closeButton');
let popUp           = document.querySelector('.pop-up');
let enterButton     = document.querySelector('.enter');
let visible         = document.querySelector('.visible');
let invisible       = document.querySelector('.invisible');
let passInput       = document.querySelector('[name="pass"]');

enterButton.addEventListener('click', function(){
    popUp.style.display = 'flex';
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