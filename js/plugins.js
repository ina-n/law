// tabs

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

});

//FlexSlider

// Can also be used with $(document).ready()
$(window).load(function() {

	$('.flexslider').each(function(){

		

 		 $('#timeline-slide').flexslider({
   			animation: "slide",
    		controlsContainer: $(".custom-controls-container"),
    		customDirectionNav: $(".custom-navigation a"),
    		
  			});// end timeline-slide

  		$('#feedback-slide').flexslider({
  			animation: 'slide',
  			controlNav: false,
  			directionNav: true

  		});// end feedback-slide

  		$('#hero-slider').flexslider({
  			animation: 'slide',
  			controlNav: false
  		});

	});// end each function
 

});


