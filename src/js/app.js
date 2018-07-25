$(document).foundation();

$(document).ready(function(){
    $('select').styler();

    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.menu_area').toggleClass('is-active');
    });    
})


// fullpage
$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        navigation: true,
        anchors:['main', 'portfolio', 'design-project', 'services', 'articles', 'video', 'education', 'faq', 'contacts'],
        navigationPosition: 'right',
        navigationTooltips: ['main', 'portfolio', 'design-project', 'services', 'articles', 'video', 'education', 'faq', 'contacts'],
        showActiveTooltip: false,
        autoScrolling: true,
        scrollHorizontally: true,
        scrollingSpeed: 400,
        fadingEffect: true,
        // responsiveWidth: 640,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",

        onLeave: function(origin, destination, direction){
            var leavingSection = this;
    
            //после покидания раздела 2
            if(destination.index == 3){
                $('.header').removeClass('header-black');
                $('.header').addClass('header-white');
            }
    
            else if(destination.index == 7){
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