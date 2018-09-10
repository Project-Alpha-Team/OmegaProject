
			var recordButton, stopButton, recorder;
			var toggle=0;
			window.onload = function () {
  			// recordButton = document.getElementById('record');
  			// stopButton = document.getElementById('stop');

			// get audio stream from user's mic
			navigator.mediaDevices.getUserMedia({
				audio: true
			})
			.then(function (stream) {
				// recordButton.disabled = false;
				// recordButton.addEventListener('click', startRecording);
				// stopButton.addEventListener('click', stopRecording);
				recorder = new MediaRecorder(stream);

				// listen to dataavailable, which gets triggered whenever we have
				// an audio blob available
				recorder.addEventListener('dataavailable', onRecordingReady);
			});
			};

			function startRecording() {
			// recordButton.disabled = true;
			// stopButton.disabled = false;

			recorder.start();
			}

			function stopRecording() {
				
			// recordButton.disabled = false;
			// stopButton.disabled = true;

			// Stopping the recorder will eventually trigger the `dataavailable` event and we can complete the recording process
			recorder.stop();
			}

			function onRecordingReady(e) {
			//var audio = document.getElementById('audio');
			// e.data contains a blob representing the recording
			//audio.src = URL.createObjectURL(e.data);
			console.log("e.data: ", e.data)
			//var audio=URL.createObjectURL(e.data);
			//console.log('\n\n ******** \n audio: ', audio);
			//audio.play();
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
				console.log("**** \n \n End of work");
				let displayData = $("<div>");
				displayData.append(`<p>Artist: ${data.artist}</p>`);
				displayData.append(`<p>Title: ${data.trackname}</p>`);
				displayData.append(`<p>Spotify Link: <a href="${data.spotifyURL}">${data.spotifyURL}</a></p>`);
				$(".audio-data").append(displayData);
				$('html, body').animate({
					scrollTop: $(".audio-data").offset().scrollTop
				}, 500);
			})

			}
			$(document).ready(() => {

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
						console.log("**** \n \n End of work");
						let displayData = $("<div>");
						displayData.append(`<p>Artist: ${data.artist}</p>`);
						displayData.append(`<p>Title: ${data.trackname}</p>`);
						displayData.append(`<p>Spotify Link: <a href="${data.spotifyURL}">${data.spotifyURL}</a></p>`);
						$(".audio-data").append(displayData);
						$('html, body').animate({
							scrollTop: $(".audio-data").offset().top
						}, 500);
						});
					});

					$(".record-icon").click(function () {
						
						if (toggle==0){
							recorder.start();
							toggle=1;
						}
						
						else
						{	
							toggle=0;				
							recorder.stop();
					}
					});
				})
