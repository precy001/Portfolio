const images = ['assets/images/background1.png', 'assets/images/background2.png', 'assets/images/background3.png']
const body = document.querySelector('.home')
let currentIndex = 0

function changeBackground(){
    currentIndex ++
    body.style.backgroundImage = `url(${images[currentIndex]})`
    /* textElement.innerhtml = `${text[currentIndex]}` */
    if(currentIndex === 2){
        currentIndex = -1
    }
}

changeBackground();
setInterval(changeBackground, 8000)

const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav')
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('is-active')
    mobileMenu.classList.toggle('is-active')
})
