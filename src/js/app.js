$(document).foundation();

$(document).ready(function(){
    course();
    $('select').styler();

    if ($('#fullpage').length) {
        $('#default_page').attr('id', 'main_page');
    } else if ($('.week').length) {
        $('#default_page').attr('id', 'courses_page');
    }

    $('.article_info .article_text').each(function () {
        var text = $(this).text();
        more = '...';

        $(this).html(text + more);
    });

    $('.course_info .course_text').each(function () {
        var text = $(this).text();
        more = '...';

        $(this).html(text + more);
    })

    if ($('.infinite').length) {
        $('.infinite').infiniteScroll({
            // options
            path: '.next.page-numbers',
            append: '.infinite_post',
            history: false,
        });
    }


    $('.design_card .btn').click(function () {
        var price = $(this).parents('.design_card').find('.priceCourse').text();
        $('.totalCash span').parents('.totalCash').fadeIn('slow');
        $('.totalCash span').text(price);

        console.log($('#selectCourse').val())
    })
    


    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.menu_area').toggleClass('is-active');
    });
    
    $('.video_list_item').click(function () {
        var src = $(this).data('src');
        $('.iframe_parents iframe').attr('src', src);
    });

    if ($('.video_page').length) {
        $('.video_list_item').click(function () {
            $('.overlay').addClass('is-active');
        });
    }

    $('.showProject').click(function(){
        setTimeout(function(){ $('.fancybox-container').addClass('fancybox-show-thumb'); }, 1000);
    })

    $('.overlay').click(function () {
        $(this).removeClass('is-active');
    });

    if ($('.grid').length){
        // init Masonry
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.masonry();
        });
    }

    if ($(window).width() > '1024') {
        $('.grid_information').click(function () {
            $(this).toggleClass('is-active');
            $('.grid').toggleClass('is-active');

            // init Masonry
            var $grid = $('.grid').masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
            });
            // layout Masonry after each image loads
            $grid.imagesLoaded().progress(function () {
                $grid.masonry();
            });
        })
    }

    if ($("iframe").length) {
        $("iframe").each(function () {
            $(this).parents("p").addClass("iframe_parents")
        })
    }
})

$(window).on("load", function () {
    
    $(".slider_countainer").mCustomScrollbar({
        axis: "x"
    });

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

// Slider  
$(window).on("load", function () {

    $('.slider').each(function () {
        var imgWidth = +$('.slider_item').width();
            imgCount = +$('.slider_item').length;
            areaWidth = imgWidth * imgCount + 30 * imgCount - 0;
        
        $(this).find('.slider_area').css('width', areaWidth);

        $(this).find('.slider_arrow-right').click(function () {
            
        })
    })
});


$('.portfolio_carousel').owlCarousel({
    loop: true,
    margin: 30,
    navText: ["<img src='/wp-content/themes/shelnat/templates/_ares/img/svg/prev.svg'>", "<img src='/wp-content/themes/shelnat/templates/_ares/img/svg/next.svg'>"],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        640: {
            items: 2,
            nav: true
        },
        1024: {
            items: 4,
            nav: true
        }
    }
});

$('.courses_carousel').owlCarousel({
    loop: false,
    margin: 30,
    navText: ["<img src='/wp-content/themes/shelnat/templates/_ares/img/svg/prev.svg'>", "<img src='/wp-content/themes/shelnat/templates/_ares/img/svg/next.svg'>"],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        640: {
            items: 1,
            nav: true
        },
        1024: {
            items: 2,
            nav: true,
        }
    }
});

$('.carousel_project').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,

})

// fullpage
$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        navigation: true,
        anchors: ['main', 'portfolio', 'design-project', 'services', 'articles', 'video', 'education',  'faq', 'contacts'],
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

function course() {
    $('.design_card').each(function () {
        var name = $(this).find('.nameCourse').text();
            price = $(this).find('.priceCourse').text();
            price = price.replace(/\s+/g, '');
            intPrice = parseInt(price.substr(0, price.length - 4));
            
        $('#selectCourse').append('<option value=' + intPrice + '>' + name + '</option>');
    })
}

$('#countOrder').val(randomInteger(1, 999999));

function randomInteger(min, max) {
    var rand = min - 1 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}



$(window).on('load', function () {
    setTimeout(function () {
        $('.wrapper').css('opacity', '1');
    }, 1000);
    $('.pleloader').fadeOut('slow');
    $('body').removeClass('preloader_is-active');
});