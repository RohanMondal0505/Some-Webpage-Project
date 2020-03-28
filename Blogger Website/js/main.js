const res = {
    0:{
        items:0
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}

$(document).ready(function () {
    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    $togglecollapse.click(function () {
        $nav.toggleClass('collapse');
    });

    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:res
    });

    //move-up
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000)
    });

    //Animation
    AOS.init();

});