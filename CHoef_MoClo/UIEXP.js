// JavaScript Document
$(document).ready(function(){
	$('h1').click(function () {	
		$('h1').fadeOut('fast')
	})
	
	$( "#tabs" ).tabs();
	$('#fragment-1').resizable();
	
})