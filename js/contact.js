jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
});



 function validate(){
                    //select item
                    var email = document.getElementById("email").value;
                    var Name = document.getElementById("Name").value;
					var Subject = document.getElementById("Subject").value;
					var message = document.getElementById("message").value;
                    var errorMessage =document.getElementById("error_message");
                
                    //style css for error_message
                    errorMessage.style.textAlign="center";
                    errorMessage.style.backgroundColor="rebeccapurple";
                    errorMessage.style.color="#fff";
                    errorMessage.style.padding = "10px";
                    errorMessage.style.transition =" all 1s ease-in-out"
                    errorMessage.style.fontFamily = "cursive";

                    //varaible to store 
                    var text;
                    if(email=="" && Name=="" && Subject=="" && message==""){
                        text = "Empty !!!";
                        errorMessage.innerHTML =text;
		                 Name.focus();
						 email.focus();
						 Subject.focus();
						 message.focus();
                        return false;
                    }else{
                        text = "ok";
                        errorMessage.innerHTML =text;
                        return false;
					}
				}
validate();