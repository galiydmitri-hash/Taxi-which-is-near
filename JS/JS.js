
const cards = document.querySelectorAll('.con1');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const step1 = card.querySelector('.stap1');
        const step2Elements = card.querySelectorAll('.stap2, .stap2 li, .li_decore');

        const isRotated = card.style.transform.includes('180deg');

        if (!isRotated) {
            card.style.transform = 'rotateY(180deg)';
            if (step1) step1.classList.add('is-disabled');
            
            setTimeout(() => {
                step2Elements.forEach(el => el.classList.add('is-active'));
            }, 250);
        } else {
            card.style.transform = 'rotateY(0deg)'; 
            
            step2Elements.forEach(el => el.classList.remove('is-active'));
            
            setTimeout(() => {
                if (step1) step1.classList.remove('is-disabled');
            }, 250);
        }
    });
});


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

const btnmain = document.querySelector('.btnmain')
const updown = document.querySelector('.updown')
const mainupdown = document.querySelector('.mainupdown')

mainupdown.addEventListener('click', () => {
    const isActive = updown.classList.toggle('is-active');
    
    if (isActive) {
        mainupdown.style.height = '200px';
        btnmain.style.transform = 'rotate(180deg)';
    } else {
        mainupdown.style.height = '50px'; 
        btnmain.style.transform = 'rotate(0deg)';
    }
});

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