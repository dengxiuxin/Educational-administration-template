$(document).ready(function() {
	var o = $("#tab #tab_ipu");
	var array = [];
	for (var i = 0; i < o.length; i++) {
		var a = o[i].innerHTML;
		array.push(a);
	};
	var tr = $("#tab tr #tab_click");
	var bu = $("#tab tr #tab_cun");
	
	
	tr.click(function() {
		// $("#tab_tr #tab_ipu").text("");
		var h = $(this).parent().prev().parent();
			console.log(h);
		for (var xs = 1; xs <= 5; xs++) {
			
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
		var inp = $("#tab tr input");
		var sum = tr.index(this) ;
		for (var u = 0; u < array.length; u++) {
			if(sum ==0){
				inp.eq(u).val(array[u]);
			}else if(sum ==1){
				inp.eq(u).val(array[u+5]);
			}else if(sum ==2){
				inp.eq(u).val(array[u+10]);
			}else if(sum ==3){
				inp.eq(u).val(array[u+15]);
			}else if(sum ==4){
				inp.eq(u).val(array[u+20]);
			}else if(sum ==5){
				inp.eq(u).val(array[u+25]);
			}else if(sum ==6){
				inp.eq(u).val(array[u+30]);
			}else if(sum ==7){
				inp.eq(u).val(array[u+35]);
			}else if(sum ==8){
				inp.eq(u).val(array[u+40]);
			}else if(sum ==9){
				inp.eq(u).val(array[u+45]);
			}else if(sum ==10){
				inp.eq(u).val(array[u+50]);
			}else if(sum ==11){
				inp.eq(u).val(array[u+55]);
			}else if(sum ==12){
				inp.eq(u).val(array[u+60]);
			}else if(sum ==13){
				inp.eq(u).val(array[u+65]);
			}else if(sum ==14){
				inp.eq(u).val(array[u+70]);
			}else if(sum ==15){
				inp.eq(u).val(array[u+75]);
			}
			
		};
		tr.hide(300);
	});
	
	
});
