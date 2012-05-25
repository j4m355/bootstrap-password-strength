$(document).ready(function() {

	$.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
	);

	$(".passwordStrength").rules("add", { regex: "^[a-zA-Z'.\\s]{1,40}$" })




	$(".passwordStrength").keyup(function() { 

		$(".passwordStrength").validate({
			rules: {
				passwordStrength : "gay"
			}
		})
	  	alert('Handler for .keyup() called.');
	});

});