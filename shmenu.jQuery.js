(function($){

	$.fn.shmenu = function(){
		
		var element = this;

		var id = $(element).attr('id');
		
		// $(window).load(function(){

			$(window).bind("scroll", function(){
				checkElementPosition();
			}); // end window.bind

			function checkElementPosition(){
				console.log("checkElementPosition");
				
				// if elementTop < windowMiddle < elementBottom
				var elementTop = document.getElementById(id).offsetTop; 
				var elementBottom = elementTop + document.getElementById(id).offsetHeight; 
				var windowMiddle = window.pageYOffset + (window.innerHeight / 2); 
				
				if ((elementTop < windowMiddle) && (windowMiddle < elementBottom)){
					$(element).css({
						"background" : "#FFC2CE"
					});
					
					$("#shmenu_" + id).addClass('selected');
				}
				else{
					$(element).css({
						"background" : "none"
					});
					
					$("#shmenu_" + id).removeClass('selected');		
				}
			} // end checkElementPosition
			
		// }); // end window.load

	}; // end $fn.center

})(jQuery); // end function($)
