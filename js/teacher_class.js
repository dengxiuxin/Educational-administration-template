$(document).ready(function(){
	var cla = $("#cla #cla_ipu");
	var array = [];
	for (var i = 0; i < cla.length; i++) {
		var a = cla[i].innerHTML;
		array.push(a);	
	};
	console.log(array)
	var tr = $("#cla tr #cla_click");
	var bu = $("#cla tr #cla_cun");

	
	tr.click(function() {
		var h = $(this).parent().prev().parent();
		for (var xs = 0; xs <= 7; xs++) {
			console.log(tr);
			h.find("td").eq(xs).text("");
			h.find("td").eq(xs).append('<input style="width: 87px;" type="text" class="form-control form_con" value=" ">');
		}
		bu.click(function() {
			for (var ms = 0; ms <= 7; ms++) {
				var y = h.find(".form-control");
				y.remove();
	
				tr.show(150);
			}
	
		});
		var inp = $("#cla tr input");
		var sum = tr.index(this) ;
		for (var u = 0; u < array.length; u++) {
			if(sum ==0){
				inp.eq(u).val(array[u]);
			}else if(sum ==1){
				inp.eq(u).val(array[u+8]);
			}else if(sum ==2){
				inp.eq(u).val(array[u+16]);
			}else if(sum ==3){
				inp.eq(u).val(array[u+24]);
			}else if(sum ==4){
				inp.eq(u).val(array[u+32]);
			}else if(sum ==5){
				inp.eq(u).val(array[u+40]);
			}else if(sum ==6){
				inp.eq(u).val(array[u+48]);
			}
			
		};
		tr.hide(150);
	});
	
	
});