$(document).ready(function(){
	console.log("ready!")

$(".slidedown").click(function() {				
    $('html, body').animate({
        scrollTop: $("#col1").offset().top 		//scroll to this div
    }, 1200);
});

});