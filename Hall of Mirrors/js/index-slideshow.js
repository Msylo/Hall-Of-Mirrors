var slides = document.querySelectorAll('.slide');
var slider_btns = document.querySelectorAll('.slider-btn');
let currentSlide = 1;
//funtion to add active class to slide elements, and removing it from other instances
var manualNav = function(manual){
    slides.forEach((slide) =>{
        slide.classList.remove("active");
        slider_btns.forEach((slider_btn)=>{
            slider_btn.classList.remove("active");
        })
    });

    slides[manual].classList.add('active');
    slider_btns[manual].classList.add('active');
}
// iterate adding click event that sets current slide number
slider_btns.forEach((slider_btn, i) => {
    slider_btn.addEventListener("click", () =>{
        manualNav(i);
        currentSlide = i;
    });
    
});

//timer cycle for slide autocycle
var repeat = function(){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeClass) => {
                activeSlide.classList.remove('active');
            })

            slides[i].classList.add('active');
            slider_btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();