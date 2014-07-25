$(function(){


	//Tabs in Level 0 contain the draggable "parts", meaning whatever pieces are being manipulated in the program
   	 $( "#tabs" ).tabs();
   	 
	//Various classes of draggable objects sorted into the different tabs. 
	//These pieces will only stick to things that they're meant to due to revert
	var greens = $(".greens").draggable({zIndex: 100, revert: "invalid"});
	var toppings = $(".toppings").draggable({zIndex: 100, revert: "invalid"});
	var dressing = $(".dressing").draggable({zIndex: 100, revert: "invalid"});
	
	//These two panels are movable and can be dragged up and down to resize
	var lvl1 = $( "#level1" ).draggable({ handle: "p", axis: "y", containment: [0, 10, 800, 600] });
	var lvl2 = $( "#level2" ).draggable({ handle: "p", axis: "y", containment: [0, 10, 800, 600] });
	
	//this variable helps to adjust for cases when level 1 is dragged behind level 2
	var lvl1clicked = false;
	
	//The drop class contains draggable items. It snaps them into place, then prevents them from moving again.
	$(".drop").droppable({
		hoverClass: "ui-state-active",
		drop: function( event, ui ) {
        	$( this ).css("background","yellow");
        	//$("#greens").draggable("snap", "#drop");
        	$(ui.draggable).appendTo($(this))
                                           .css({position:'static', left:'0px', top:'0px'})
                                           .draggable('option', 'disabled', true)
                                           .css({position:'relative'});
        	//$("#drop").append($("#greens"));
        	//$(ui.draggable).draggable("disabled", "true");
        	$(this).css("z-index", "0");
        }
		});
		
	//This prevents draggables from being dropped in the wrong place
	$("#greenDrop").droppable("option","accept",".greens");
	$("#toppingsDrop").droppable("option","accept",".toppings");
	$("#dressingDrop").droppable("option","accept",".dressing");
	
	
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
	});
	
	//adjusts level2 to not cover up level1
	$("#level2").mouseup(function(){
	
	
		if($("#level2").position().top <= ($("#level0").position().top + 100)){
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