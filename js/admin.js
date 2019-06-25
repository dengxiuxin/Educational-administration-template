$(document).ready(function() {

			$("#admin_select").click(function() {
				$(".admin_select").fadeToggle(500);
			});
			$("#admin_create").click(function() {
				$(".admin_create").fadeToggle(500);
			});


			var ter = $("#ter #ter_cla");
			var array = [];
			for (var i = 0; i < ter.length; i++) {
				var a = ter[i].innerHTML;
				array.push(a);
			};
			console.log(array);

			var tr = $("#ter tr #ter_res");
			var bu = $("#ter tr #ter_save");
			var dl = $("#ter tr #ter_del");

			tr.click(function() {
				// $("#tab_tr #tab_ipu").text("");
				var h = $(this).parent().parent().prev().parent();
				console.log(h);
				for (var xs = 0; xs < 2; xs++) {

					h.find("td").eq(xs).text("");
					h.find("td").eq(xs).append('<input type="text" class="form-control" value=" ">');
				}
				bu.click(function() {
					for (var ms = 0; ms <= 5; ms++) {
						var y = h.find(".form-control");
						y.remove();

						tr.show(300);
					}
				});
				var inp = $("#ter tr input");
				var sum = tr.index(this) ;
				for (var u = 0; u < array.length; u++) {
					if(sum ==0){
						inp.eq(u).val(array[u]);
					}else if(sum ==1){
						inp.eq(u).val(array[u+2]);
					}else if(sum ==2){
						inp.eq(u).val(array[u+4]);
					}else if(sum ==3){
						inp.eq(u).val(array[u+6]);
					}else if(sum ==4){
						inp.eq(u).val(array[u+8]);
					}else if(sum ==5){
						inp.eq(u).val(array[u+10]);
					}
					
				};
				tr.hide(300);
			});		
});
