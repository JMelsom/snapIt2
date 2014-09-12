var pictureSource, destinationType;

document.addEventListener('deviceready', loaded, false);

function loaded(){
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
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
	
	$('[data-role=page]').on('mouseover', '[data-icon]', function(e){
		$(this).addClass('active');
	});
	$('[data-role=page]').on('mouseout', '[data-icon]', function(e){
		$(this).removeClass('active');
	});
	
	$.ajax({
		url:'http://jmelsom.catstudents.com/snapIt/data.php',
		success: function(data){
			$('#explore ul').append(data);
		}
	});
});