$(document).foundation();

$(document).ready(function(){
    $('select').styler();

    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.menu_area').toggleClass('is-active');
    });
    
    $('.video_list_item').click(function () {
        var src = $(this).data('src');

        console.log(src);
        $('.video_container iframe').attr('src', src);
    })
})

$(window).on("load", function () {
    

    if ($(window).width() < '1024') {
        $("#videoList").mCustomScrollbar({
            axis: "x"
        });
    } else {
        $("#videoList").mCustomScrollbar({
            axis: "y"
        });
    }
});

$('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ["<img src='./templates/_ares/img/svg/prev.svg'>", "<img src='./templates/_ares/img/svg/next.svg'>"],
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 2
        },
        1024: {
            items: 4
        }
    }
});

$('.courses_carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    navText: ["<img src='./templates/_ares/img/svg/prev.svg'>", "<img src='./templates/_ares/img/svg/next.svg'>"],
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 1
        },
        1024: {
            items: 2
        }
    }
});

$('.carousel_project').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1
})

// fullpage
$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        navigation: true,
        anchors: ['main', 'portfolio', 'design-project', 'services', 'articles', 'video', 'education', 'faq', 'contacts'],
        navigationPosition: 'right',
        navigationTooltips: ['main', 'portfolio', 'design-project', 'services', 'articles', 'video', 'education', 'faq', 'contacts'],
        showActiveTooltip: false,
        autoScrolling: true,
        scrollHorizontally: true,
        scrollingSpeed: 600,
        fadingEffect: true,
        responsiveWidth: 1024,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            //после покидания раздела 2
            if (destination.index == 3) {
                $('.header').removeClass('header-black');
                $('.header').addClass('header-white');
            } else if (destination.index == 7) {
                $('.header').removeClass('header-black');
                $('.header').addClass('header-white');
            } else {
                $('.header').removeClass('header-white');
                $('.header').addClass('header-black');
            }
        }
    });
});

$(window).ready(function () {
    $('body').css('opacity', '1');
 })