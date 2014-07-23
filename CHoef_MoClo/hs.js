$(function(){


	//var lvl0 = $( "#level0" ).draggable({ handle: "p", axis: "y", containment: [0, 75, 800, 600] });
	var lvl1 = $( "#level1" ).draggable({ handle: "p", axis: "y", containment: [0, 10, 800, 600] });
	var lvl2 = $( "#level2" ).draggable({ handle: "p", axis: "y", containment: [0, 10, 800, 600] });
	
	var lvl1clicked = false;
	
	$("#level1").mousedown(function(){
		lvl1clicked = true;
	
	});	
	
	$("#level1").mouseup(function(){
		
		lvl1clicked= false;
	
		if($("#level1").position().top <= ($("#level0").position().top + 30)){
			lvl1.append(lvl1.position().top);
			var lvl0top = ($("#level0").position().top + 60) +"px";
			$("#level1").animate({
				top: lvl0top
			});
		
		}
		
		
		
	});
	
	$("#level2").mouseup(function(){
	
	
		if($("#level2").position().top <= ($("#level0").position().top + 30)){
			//lvl1.append(lvl1.position().top);
			var lvl0top = ($("#level0").position().top + 120) +"px";
			var lvl0top1 = ($("#level0").position().top + 60) +"px";
			$("#level2").animate({
				top: lvl0top
			});
			$("#level1").animate({
				top: lvl0top1
				
			});
			
			
					
		}else if($("#level2").position().top <= $("#level1").position().top + 30){
		
			if(lvl1clicked==true){
				lvl1clicked= false;
				var lvl1top = ($("#level1").position().top + 60) +"px";
				$("#level2").animate({
					top: lvl1top
				});
				
			
			}else{
				
				lvl2.append(lvl2.position().top);
				var lvl2top = ($("#level2").position().top - 60) +"px";
				$("#level1").animate({
					top: lvl2top
				});
			
		
			}
			
			
			
		}
	});
	
	
	
	

});