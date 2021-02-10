let burgerIcon      = document.querySelector('.burger-icon');
let burgerMenu      = document.querySelector('.burger-menu');
let line1           = document.querySelector('.line1');
let line2           = document.querySelector('.line2');
let line3           = document.querySelector('.line3');

burgerIcon.addEventListener('click', function(){
    if(!burgerIcon.classList.contains('open')){
        burgerMenu.style.display    = 'block';
        line2.style.display         = 'none';
        line1.style.marginBottom    = '-5px';
        line1.style.transform       = 'rotate(45deg)';
        line3.style.transform       = 'rotate(-45deg)';
    
        burgerIcon.classList.add('open');
    }else{
        burgerMenu.style.display    = 'none';
        line2.style.display         = 'block';
        line1.style.marginBottom    = '4px';
        line1.style.transform       = 'rotate(0deg)';
        line3.style.transform       = 'rotate(0deg)';
        
        burgerIcon.classList.remove('open');
    }
});