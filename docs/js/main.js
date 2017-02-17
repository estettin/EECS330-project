$(document).ready(function() {
     $(".button-collapse").sideNav();

     $('.progress-bar').each( function() {
     	if ($(this).width() == 0)
     		$(this).hide();
     
     });
     
});
