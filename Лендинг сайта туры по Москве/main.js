let popUp           = document.querySelector('.pop-up-general');
let up              = document.querySelector('.up');
let closeButton     = document.querySelector('.close');
let noVisible       = document.querySelector('.no-visible');
let visible         = document.querySelector('.visible');
let inputPass       = document.querySelector('[name="pass"]');
let inputRange      = document.querySelector('[type="range"]');
let result          = document.querySelector('.result');

up.addEventListener('click', function(){
    popUp.style.display = 'flex';
});

closeButton.addEventListener('click', function(){
    popUp.style.display = 'none';
});

noVisible.addEventListener('click', function(){
    noVisible.style.display = 'none';
    visible.style.display   = 'block';
    inputPass.type              = 'text';
});

visible.addEventListener('click', function(){
    noVisible.style.display = 'block';
    visible.style.display   = 'none';
    inputPass.type              = 'password';
});

inputRange.addEventListener('input', function(){
    result.innerHTML    = inputRange.value;
});