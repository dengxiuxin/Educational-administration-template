$(document).ready(function() {
					$("#pwd").click(function() {
						if ($("#pwd").hasClass("glyphicon-eye-open") == true) {
							$("#pwd").removeClass("glyphicon-eye-open");
							$("#pwd").addClass("glyphicon-eye-close");
							$(".form-control").attr("type", "text");
						} else {
							$("#pwd").removeClass("glyphicon-eye-close");
							$("#pwd").addClass("glyphicon-eye-open");
							$(".form-control").attr("type", "password");
						}
					});
				});
