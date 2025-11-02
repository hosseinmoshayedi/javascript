const nav = document.getElementById("nav-container");

window.addEventListener('scroll', () => {
    if (window.innerWidth < 992) {
        if (scrollY > 400) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    } else {
        if (scrollY > 175) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    }

})

function goToShop(){
    open("pages/shop.html");
}