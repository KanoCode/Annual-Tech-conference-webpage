const navBtn = document.querySelector('nav > a > i');
console.log(navBtn)

const mobileMenu = document.querySelector('nav');

navBtn.addEventListener('click',function(){
    mobileMenu.classList.toggle("active");
navBtn.classList.toggle('fa-times');
console.log(mobileMenu.classList)    
})