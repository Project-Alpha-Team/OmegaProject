$(document).ready(() => {

	var recorder;
	var toggle=0;
	var modal = document.getElementById("signUp_pop");
	var btn = $("#signUp_button");
    var closeButton = document.getElementsByClassName("close")[0];

	window.onload = function() {	
		navigator.mediaDevices.getUserMedia({ audio: true })
		.then(function (stream) {
			recorder = new MediaRecorder(stream);
			// listen to dataavailable, which gets triggered whenever we have
			// an audio blob available
			recorder.addEventListener('dataavailable', onRecordingReady);
		});
	};

	function startRecording() {
		recorder.start();
	}

	function stopRecording() {
		recorder.stop();
	}
				
	function onRecordingReady(e) {
		console.log("e.data: ", e.data);
		var fd=new FormData();
		fd.append('fname', 'test.wav');
		fd.append('data', e.data);
		console.log("fd",fd);
		$.ajax({
			type:'POST',
			url: '/voice_search',
			data: fd,
			processData: false,
			contentType: false
		}).done(function(data){
			console.log("\n\n ****\n********\n data",data);
			print_information(data);
		})
	}

	function print_information(data) {
		let displayData = $("<div>");
		displayData.append(`<p>Artist: ${data.artist}</p>`);
		displayData.append(`<p>Title: ${data.trackname}</p>`);
		displayData.append(`<p>Spotify Link: <a href="${data.spotifyURL}">${data.spotifyURL}</a></p>`);
		$(".audio-data").append(displayData);
		$('html, body').animate({
			scrollTop: $(".audio-data").offset().scrollTop
		}, 500);
	}



		$("#uploadForm").on('submit', function(e) {
			e.preventDefault();
			console.log('e', e);
			$.ajax({
				type: "post",
				url: "/file_search",
				data: new FormData($('#uploadForm')[0]),
				processData: false,
				contentType: false
			}).done(function(data){
				console.log("\n\n ****\n********\n data",data);
				print_information(data);
			});
		});

		$(".record-icon").click(function () {
			if (toggle==0){
				recorder.start();
				toggle=1;
			$(".record-icon").css("color","red");
			} else {	
				toggle=0;				
				recorder.stop();
				$(".record-icon").css("color","blue");
			}
		});

		$( ".record-icon" ).hover(function() {
			$( ".record-icon" ).css("opacity","0.5");
		}, function() {
			$( ".record-icon" ).css("opacity","1");
		});

// *********************************** sign up form ****************************************//

	$('#signUp_button').on('click', function() {
		modal.style.display = "block";
	});

	$('#close_button').on('click', function() {
		modal.style.display = "none";
	});

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};

	$('#singUp-form-btn').on('click', function(e){
		e.preventDefault();

		// console.log('YOUR EMAIL and PASSWORD IS: ' + email + ', ' + password);
		console.log('e', e);

		var newEmail = {
			email: $("#account-email").val().trim(),
			password: $("#account-password").val().trim()
		  };

		$.ajax({
			type: "post",
			url: "/api/new_email",
			data: newEmail,
		}).then(function(data){
			console.log("successfully sent new email to server.");
			modal.style.display = "none";
			alert('You are successfully subscribed!');
		});
	})


});