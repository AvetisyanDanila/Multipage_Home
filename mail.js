$(document).ready(function () {
	
	$("#form-modal").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail1.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('.header-modal').fadeOut();
			$('.thank-modal').fadeIn();
			$("#form").trigger("reset");
		});
		return false;
	});
	$("#contacts-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail2.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('.contacts-modal').fadeOut();
			$('.thank-modal').fadeIn();
			$("#form").trigger("reset");
		});
		return false;
	});
	$("#calculator-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail3.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('.calculator').fadeOut();
			$('.thank-modal').fadeIn();
			$("#form").trigger("reset");
		});
		return false;
	});

});