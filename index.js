const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;


function fixedNav() {
    
if(window.scrollY >= topOfNav) {
    // pakt hoogte van navbar
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    // voeg klasse toe aan de nav
    document.body.classList.add('fixed-nav');

} else {
    
    document.body.style.paddingTop = 0;
    // verwijder sticky navbar
    document.body.classList.remove('fixed-nav');
}
}
    // reageer op scrool, start van de fixed nav functie
window.addEventListener('scroll', fixedNav);