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
    		
  			});

  		$('#feedback-slide').flexslider({
  			animation: 'slide',
  			controlNav: false,
  			directionNav: true

  		});

	});
 

});


