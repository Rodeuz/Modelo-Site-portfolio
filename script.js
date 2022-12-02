$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
});

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});

    var typed = new Typed(".typing",{
        strings:["Desenvolvedor","Analista","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    })

    var typed = new Typed(".typing-2",{
        strings:["Desenvolvedor","Analista","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true,
    })


$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});


// Tema escuro/claro

// $('.theme-btn').click(function(){
//     $('.home').toggleClass("switch");
//     $('.navbar .menu  a').toggleClass("switch");
//     $('.theme-btn').toggleClass("switch");
//     $('.logo a').toggleClass("switch");
//     $('.navbar').toggleClass("switch");
//     $('.navbar.sticky').toggleClass("switch");
//     $('.sticky').toggleClass("switch");
//     $('.home .home-content .text-3 span').toggleClass("switch");
//     $('.navbar .logo a span').toggleClass("switch");
//     $('.home .home-content a').toggleClass("switch");
//     $('.navbar .menu').toggleClass("switch");
//     $('.menu-btn').toggleClass("switch");
//     $('.theme-btn i').toggleClass("switch");
// });

