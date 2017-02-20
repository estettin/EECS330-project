$(document).ready(function() {
     $(".button-collapse").sideNav();

     var $bars = $();
     $('.progress-bar').each( function() {
     	if ($(this).width() == 0)
     		$(this).hide();
     
     });

     $('.collapsible').collapsible();
     
});
