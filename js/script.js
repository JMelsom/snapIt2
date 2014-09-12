$(document).ready(function(e){
	$('html').addClass('js');
	
	$dataicon = $('[data-icon]');
	
	$dataicon.mouseover(function(e){
		$(this).addClass('active');
	});
	$dataicon.mouseout(function(e){
		$(this).removeClass('active');
	});
	
});