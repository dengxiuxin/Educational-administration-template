$(document).ready(function() {
					$("#pwd").click(function() {
						if ($("#pwd").hasClass("glyphicon-eye-open")) {
							
							$("#pwd").removeClass("glyphicon-eye-open");
							$("#pwd").addClass("glyphicon-eye-close");
							
							$(".pwds").attr("type", "password");
						} else {
							$("#pwd").removeClass("glyphicon-eye-close");
							$("#pwd").addClass("glyphicon-eye-open");
							$(".pwds").attr("type", "text");
						}
					});
				});
