const pointe = document.querySelector('.pointe_menu')
const navbar = document.querySelector('.navbar');
const refus = document.querySelector('.refus')


const updateColor = () => {
    if (window.scrollY > 50 || pointe.matches(':hover')) {
        pointe.style.backgroundColor = 'rgb(43, 43, 44)';
        pointe.style.boxShadow = '0 0 10px rgb(43, 43, 44)';
    } else {
        pointe.style.backgroundColor = 'transparent';
        pointe.style.boxShadow = 'none'
    }
};

window.addEventListener('scroll', updateColor);
pointe.addEventListener('pointerenter', updateColor);
pointe.addEventListener('pointerout', updateColor);



pointe.addEventListener('click', () => {
    if(!navbar.classList.contains('is-active')){
        navbar.classList.add('is-active')
        pointe.classList.add('is-disabled')
    }
})

refus.addEventListener('click', () => {
    navbar.classList.remove('is-active')
    pointe.classList.remove('is-disabled')
})

const newscon = document.querySelector('.newscon');

function updateLayout() {
    if (window.innerWidth > 768) { 
        newscon.style.flexDirection = 'column';
    } else {
        newscon.style.flexDirection = 'column'; 
    }
}

window.addEventListener('resize', updateLayout);
updateLayout();

const btnhome = document.querySelector('.btnhome')

window.addEventListener('scroll', () => {
    btnhome.classList.toggle('is-active', window.scrollY > 400);
});

btnhome.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
    })
})