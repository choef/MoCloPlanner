$(function(){


//Tabs in Level 0 contain the draggable "parts", meaning whatever pieces are being manipulated in the program
   	 $( "#tabs" ).tabs();
   	 
	//Various classes of draggable objects sorted into the different tabs. 
	//These pieces will only stick to things that they're meant to due to revert
	var greens = $(".greens").draggable({zIndex: 100, revert: "invalid"});
	var toppings = $(".toppings").draggable({zIndex: 100, revert: "invalid"});
	var dressing = $(".dressing").draggable({zIndex: 100, revert: "invalid"});
	
	
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
	
	
	$("#comboButton").click( function(){
		//this needs work to place it in the right spot
		$("#greenDrop img").clone().appendTo("#combos");
		$("#toppingsDrop img").clone().appendTo("#combos");
		$("#dressingDrop img").clone().appendTo("#combos");					
		//$("#greenDrop img").clone().appendTo("body");
	
	});
	
	
	
	
	
	
	
	
	
});