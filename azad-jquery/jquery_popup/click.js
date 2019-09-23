// :: THE WAY TO REPLACE '$' SIGN WITH 'jQuery' TO USE NO CONFLICT JQUERY IN WORDPRESS
(function($){
	// all the jquery code here how you like buddy...
	$(document).ready(function(){
		$("button").click(function(){
			$(".popup").slideToggle("slow");
			//$(".popup").fadeIn(400);
		});
		$("span").click(function(){
			//$(".popup-inner").slideToggle(400);
			$(".popup").fadeOut(400);
		});	
		$(".overlay").click(function(){
			//$(".popup").slideToggle(400);
			$(".popup").fadeOut(400);
		});			
	});
})(jQuery);