$(function() {
  	$('#level0').resizable({
  		alsoResizeReverse: "#level2",
  		handles: "s",
  	
  	});
  	//$('#level1').resizable({
  	//	alsoResizeReverse: "#level2",
  	//	alsoResize:"#level0",
  	//	handles: "s",
  		
  	
  	//});
  	
  	//$('#level2').resizable({
  		//alsoResizeReverse: "#level0, #level1",
  		
  	
  //	});
  	$('body').click(function(){
  	var minH = 100;
  	if(minH>$('#level0').height()){
  		$('#level0').append($('#level0').height());
  	}else{
  	
  		$('#level0').append("<p>dung</p>");
  	}
    });
  });
  
  
  
