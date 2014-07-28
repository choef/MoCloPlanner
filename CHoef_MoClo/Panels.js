$(function(){


	/*This document provides all of the JQuery for the MoClo Panels. It includes features from the
	JQuery UI library. The panels are all draggables. 
	//Written by Cassie Hoef (choef@wellesley.edu) with the assistance of Jasmine Davis (jdavis4@wellesley.edu)

	Things that may have to be changed:
	1. The containment for levels 1 and 2
	2. The threshold for bouncing back when things overlap
	3. The placement of the bounced back things. 
	
	*/
	
	//These two panels are movable and can be dragged up and down to resize
	var lvl1 = $( "#level1" ).draggable({ handle: "p", axis: "y", containment: [0, 0, 800, 575] });
	var lvl2 = $( "#level2" ).draggable({ handle: "p", axis: "y", containment: [0, 0, 800, 575] });
	
	
	//this variable helps to adjust for cases when level 1 is dragged behind level 2
	var lvl1clicked = false;
	
	
	//This condition manages keeping the sliding panels in the right order
	$("#level1").mousedown(function(){
		lvl1clicked = true;
	});	
	
	//adjust level one to not go over level zero
	$("#level1").mouseup(function(){
		lvl1clicked= false;
		//moves level1 back to proper position
		if($("#level1").position().top <= ($("#level0").position().top + 30)){
			var lvl0top = ($("#level0").position().top + 60) +"px";
			$("#level1").animate({
				top: lvl0top
			});
		}	
		
	if($("#level1").position().top >= 500){
			var backUp = (500) +"px";
			var backUp2 = 575 + "px";
			$("#level1").animate({
				top: backUp
			});
			$("#level2").animate({
				top:backUp2
			});
		}	
		
		
		
	});
	
	//adjusts level2 to not cover up levels
	$("#level2").mouseup(function(){
		
		//can't cover level0
		if($("#level2").position().top <= ($("#level0").position().top + 100)){
			
			var lvl0top = ($("#level0").position().top + 120) +"px";
			var lvl0top1 = ($("#level0").position().top + 60) +"px";
			$("#level2").animate({
				top: lvl0top
			});
			$("#level1").animate({
				top: lvl0top1	
			});
			
		//can't cover level1 when pulling 1 down
		}else if($("#level2").position().top <= $("#level1").position().top + 30){
		
			if(lvl1clicked==true){
				lvl1clicked= false;
				var lvl1top = ($("#level1").position().top + 60) +"px";
				$("#level2").animate({
					top: lvl1top
				});
				
			
			}else{
				//can't cover level1 when pulling 2 up
				var lvl2top = ($("#level2").position().top - 60) +"px";
				$("#level1").animate({
					top: lvl2top
				});
			
			}
		}
		
		if($("#level1").position().top >= 500){
			var backUp = (500) +"px";
			var backUp2 = 575 + "px";
			$("#level1").animate({
				top: backUp
			});
			$("#level2").animate({
				top:backUp2
			});
		}	
	});
	
	
	
	

});