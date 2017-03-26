$(document).ready(function () {
//set options

    var speed = 500; // fade speed
    var autosSwitch = true; // auto slider options
    var autoSwitchSpeed = 4000; // auto slider speed

    // add initial active class

    $('.slide').first().addClass('active');
    //hide all slides
    $('.slide').hide();
    //show first slide
    $('.active').show();

    $('#next').on('click', NextSlide);
    $('#prev').on('click', PrevSlide);

    if (autosSwitch == true) {
        setInterval(NextSlide, autoSwitchSpeed);
    }
    function NextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    function PrevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
});
