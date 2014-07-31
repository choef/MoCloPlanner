$(function(){


//Tabs in Level 0 contain the draggable "parts", meaning whatever pieces are being manipulated in the program
   	 $( "#tabs" ).tabs();
   	 
	//Various classes of draggable objects sorted into the different tabs. 
	//These pieces will only stick to things that they're meant to due to revert
	var greens = $(".greens").draggable({zIndex: 2, revert: "invalid"});
	var toppings = $(".toppings").draggable({zIndex: 2, revert: "invalid"});
	var dressing = $(".dressing").draggable({zIndex: 2, revert: "invalid"});
	
	
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
        	//$(this).css("z-index", "0");
        }
		});
		
		
	
		
	//This prevents draggables from being dropped in the wrong place
	$("#greenDrop").droppable("option","accept",".greens");
	$("#toppingsDrop").droppable("option","accept",".toppings");
	$("#dressingDrop").droppable("option","accept",".dressing");
	
	
	
	$("#comboButton").click( function(){
		
		//this needs work to place it in the right spot
		var greenImg = $("#greenDrop").find("img");
		var topImg = $("#toppingsDrop").find("img");
		var dressImg = $("#dressingDrop").find("img");
		
		var x = 0;
		for(var i = greenImg.length; i>0; i--){
			for(var j = topImg.length; j>0; j--){
				for(var k = dressImg.length; k>0; k--){
			$("#combos").append("<span class ='lvl1Perm' id='perm"+x+"'></span>");
			$(".lvl1Perm").draggable({
       			containment: 'document',
       			helper: 'clone',
       			zIndex:10000,
       			appendTo: "#lvl2Drop"
   			});
			var gi = $("#greenDrop img:nth-child("+i+")").clone().appendTo("#perm"+x);//.draggable({snap: "#perm"+x, disabled: true});
			var ti = $("#toppingsDrop img:nth-child("+j+")").clone().appendTo("#perm"+x);//.draggable({snap: true, disabled: true});
			var di = $("#dressingDrop img:nth-child("+k+")").clone().appendTo("#perm"+x);//.draggable({snap: true, disabled:true});
			$("#combos").append("<p></p>");
			
			x++;
			
			
				}
			}
		}
	
		
		
	
	});
	
	$(".lvl1Perm").draggable({
		drag: function( event, ui ) { 
		
		$(".lvl1Perm").css({display:"inline", overflow:"scroll-x"})
		}
	
	});
	
	$("#lvl2Drop").droppable({
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
        	//$(this).css("z-index", "0");
        	$("<p></p>").appendTo($(this));
        }
		});
		$(".lvl2Drop").droppable("option","accept",".lvl1Perm");
		
		
	$("#comboButton2").click( function(){
		console.log($("#lvl2Drop .lvl1Perm").length);
		var lvl1seq = $("#lvl2Drop .lvl1Perm").find();
		
	
	});
	
	
		
	
	
	
	
	
	
});