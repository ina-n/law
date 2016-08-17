//Dropdown

$('.dropDown-Panel > div').hide();
	$('.dropDown-Panel > div:first').show();

	$('.dropDown-Panel h3').click(function(){
  
  $(this).next().slideToggle();

  $(this).toggleClass('close');
});

