$(document).ready(function(e){
	$('html').addClass('js');
	
	$dataicon = $('[data-icon]');
	
	$dataicon.mouseover(function(e){
		$(this).addClass('active');
	});
	$dataicon.mouseout(function(e){
		$(this).removeClass('active');
	});
	
	$.ajax({
		url:'/data.php',
		success: function(data){
			$('#explore ul').append(data);
		}
	});
});