$(function(){

    $(".menu a, .go-top").on("click",function (e) {

        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        });
        
    
    var mixer = mixitup(".portfolio__content");

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/icons/left.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/icons/right.svg"</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
              },
        ]
    })

    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

});




