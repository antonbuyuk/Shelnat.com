$(document).foundation();

$(document).ready(function(){
    $('select').styler();

    $('.burger').click(function () {
        $(this).toggleClass('is-active');
    })
})

// fullpage
$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        menu: '#menu',
        anchors: ['main', 'about', 'how', 'app', 'team', 'backUp', 'contact'],
        autoScrolling: true,
        scrollHorizontally: true,
        fadingEffect: true,
        // responsiveWidth: 640,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
    });
});

$(window).ready(function () {
    $('body').css('opacity', '1');
 })