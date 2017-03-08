$(document).ready(function() {
    $(".button-collapse").sideNav();

    var $bars = $();
    $('.progress-bar').each(function() {
        if ($(this).width() == 0)
            $(this).hide();

    });

    $('.collapsible-header').on('click', function() {
    	$(this).children().children('.fa').toggleClass('fa-angle-down fa-angle-up');
    });

    $('.collapsible').collapsible();

});
