$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                last: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 10
                },
                phone: {
                    required: true,
                },
                web: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please fill in the required information",
                    minlength: "your name must consist of at least 2 characters"
                },
                last: {
                    required: "Please fill in the required information",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "Please fill in the required information",
                    minlength: "your name must consist of at least 4 characters"
                },
                phone: {
                    required: "Please enter your number",
                },
                web: {
                    required: "Please fill in the required information",
                    minlength: "your web must consist of at least 4 characters"
                },
                email: {
                    required: "Please an email is required"
                },
                message: {
                    required: "Please you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})