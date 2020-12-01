$(document).ready(function(){
	
	var windowWidth = $(window).width()
	var mouseX = 0;

	$("#a").hide();

	$(document).mousemove(function (e) {
		mouseX = e.pageX;
		if (mouseX > windowWidth / 2) {
			$("#a").show(function(){
				console.log("okok")
			});
		};
})