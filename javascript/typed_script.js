const slideLeft = {
    delay: 375,
    duration: 1250,
    distance: "130px",
    origin:"left"
};
const slideRight = {
    delay: 375,
    duration: 1250,
    distance: "130px",
    origin:"right"
};
const slideUp = {
    delay: 375,
    duration: 1250,
    distance: "130px",
    origin:"top"
};

//constructor
ScrollReveal({ reset: false });

//slide reveal
ScrollReveal().reveal('.slideLeft',slideLeft);
ScrollReveal().reveal('.slideRight',slideRight);
ScrollReveal().reveal('.slideUp',slideUp);

var typed= new Typed("#type",{
    strings:["Web Developer","Flutter Developer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:3000,
    loop:true
});