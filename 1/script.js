$(document).ready(function(){

	$(".well").addClass("animated bounceInUp");
	$(".navbar").addClass("animated bounceInDown");

	/*$(".navbar-nav li a").hover(function(){
			$(this).addClass("animated wobble");
	});*/

	$("#btnNini").click(function(){
		$("#resultBtnNini").toggle(200);
		$("#resultBtnNini").css("display", "block");
		$("#resultBtnNini").text("Holis!");
	});
});
