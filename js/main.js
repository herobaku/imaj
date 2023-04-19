$(document).ready(() => {
    const date = new Date()
    const year = date.getFullYear()
    $('span.date').html(" " + year + " ")

})

new Swiper('.swiper-referans', {
    grabCursor: true,
    draggable: true,
    breakpoints: {
        '@0.25': {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        '@0.50': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        '@1.50': {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
});

$(document).ready(function () {
    // nav items hover  
    $('.menu li').on('mouseover', function () {
        if (!($(this).hasClass('dropdown-toggle') && $(this).parent().hasClass('active'))) {
            var widthThis = $(this).width();
            var leftThis = $(this).offset().left - $('ul.menu').offset().left;
            $('.line-hover').width(widthThis);
            $('.line-hover').css('left', leftThis);
        }
        if ($(this).hasClass('dropdown-toggle') || $(this).parent().hasClass('active')) {
            $('.line-hover').width('0');
        }
    });
    $('ul.menu').on('mouseleave', function () {
        $('.line-hover').width('0');
    });
});

$(".lang").click((e) => {
    e.stopPropagation();
    $('.lang-container').toggleClass('active')
})

$(window).click(() => {
    $('.lang-container').removeClass('active')
})

// new Swiper('.swiper-gallery', {
//     loop: true,
//     slidesPerView: 2,
//     spaceBetween: 20,
//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiperbuttonnext',
//         prevEl: '.swiperbuttonprev',
//     },
// })

$(document).ready(function () {
    $('.slideSlick').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: false
                }
            }
        ]
    })
});