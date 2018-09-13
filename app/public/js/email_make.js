$(document).ready(() => {



	$('#sendEmail').on('click', function(e){
		e.preventDefault();
        let emailType = "";
        const radio = document.getElementsByName('emailType');
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                emailType = radio[i].value;
                break;
            }
        }

		const emailElements = {
			subject: $("#email_subject").val().trim(),
			text: $("#email_text").val().trim(),
            sender: $("#email_sender").val().trim(),
            emailType
		};

		$.ajax({
			type: "post",
			url: "/email/send_email",
			data: emailElements,
		}).then(function(data){
            console.log("send email to users!!");
            console.log(data);
		});
    })
    
});