var pictureSource, destinationType;
document.addEventListener('deviceready', loaded, false);

function loaded(){
	pictureSource = navigator.camera.PictureSourceType.CAMERA;
	destinationType = navigator.camera.DestinationType.DATA_URL;
}

function capturePhoto(){
	navigator.camera.getPicture(getPhoto, onFail, {
		quality:80,
		destinationType:destinationType,
		sourceType:pictureSource,
		allowEdit:true
	});
}
function getPhoto(imageData){
	var smallImage = document.getElementById('selfie');
	smallImage.style.display = 'block';
	smallImage.src = "data:image/jpeg;base64,"+imageData;
}
function onFail(message){
	alert('Failed due to: '+message);
}

$(document).ready(function(e){
	$('html').addClass('js');
	$('#explore').fadeIn(500);
	$('#share').hide();
	$('#likes').hide();
	
	
	var hammertime = new Hammer(document.querySelector('[data-role=page]'));
	hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
	
	var isShowing = true;
	
	$('[data-role=page]').on('mouseover', '[data-icon]', function(e){
		$(this).addClass('active');
	});
	$('[data-role=page]').on('mouseout', '[data-icon]', function(e){
		$(this).removeClass('active');
	});
	
	$('[data-tab=explore]').on('click', function(e){
		$('#explore').fadeIn(500);
		$('#share').hide();
		$('#likes').hide();
		$('header h1').text('Explore');
		isShowing = true;
	});
	$('[data-tab=share]').on('click', function(e){
		$('#explore').hide();
		$('#share').fadeIn();
		$('#likes').hide();
		$('header h1').text('Share');
	});
	$('[data-tab=likes]').on('click', function(e){
		$('#explore').hide();
		$('#share').hide();
		$('#likes').fadeIn(500);
		$('header h1').text('Likes');
		isShowing = false;
	});
	
	$.ajax({
		url:'http://jmelsom.catstudents.com/snapIt/data.php',
		success: function(data){
			$('#explore ul').append(data);
		}
	});
	$('[data-role=page]').on('click', '.likethis', function(e){
		$(this).parent().parent().parent().clone().appendTo('#likeslist');
	});
	
	hammertime.on('swipe', function(e){
		if(isShowing == true){
			$('#explore').hide();
			$('#likes').fadeIn(500);
			$('header h1').text('Likes');
			isShowing = false;
		} else if(isShowing == false){
			$('#explore').fadeIn(500);
			$('#likes').hide();
			$('header h1').text('Explore');
			isShowing = true;
		}
		console.log(isShowing);
	});
	
});