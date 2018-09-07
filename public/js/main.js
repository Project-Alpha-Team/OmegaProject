
			var recordButton, stopButton, recorder;

			window.onload = function () {
  			recordButton = document.getElementById('record');
  			stopButton = document.getElementById('stop');

			// get audio stream from user's mic
			navigator.mediaDevices.getUserMedia({
				audio: true
			})
			.then(function (stream) {
				recordButton.disabled = false;
				recordButton.addEventListener('click', startRecording);
				stopButton.addEventListener('click', stopRecording);
				recorder = new MediaRecorder(stream);

				// listen to dataavailable, which gets triggered whenever we have
				// an audio blob available
				recorder.addEventListener('dataavailable', onRecordingReady);
			});
			};

			function startRecording() {
			recordButton.disabled = true;
			stopButton.disabled = false;

			recorder.start();
			}

			function stopRecording() {
			recordButton.disabled = false;
			stopButton.disabled = true;

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
			})

			}
