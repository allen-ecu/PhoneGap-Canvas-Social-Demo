//WEIQING MAO, Peth, WA, 6010
//Animated Object shall be in one layer only
//Still Objects can be in one layer
// Global variables
var gridWidth = 666;
var gridHeight = 366;
var canvas0,canvas1,canvas2,canvas3,canvas4,canvas5,canvas6,canvas7,canvas8,canvas9;
var context0,context1,context2,context3,context4,context5,context6,context7,context8,context9;
var canvasWidth = gridWidth + 1;
var canvasHeight = gridHeight + 1;
var can6Width = 27;
var can6Height = 58;
var can7Width = 666;
var can7Height = 34;
var snail0 = null;
var line0 = null;
var i = 0;
var snailpace = 5;
var snailboundLeft =55;
var snailboundRight =660;
var snailboundUp =-140;
var snailboundDown =15;
var cur_X0, cur_Y0, cur_X1, cur_Y1;

//start of document.ready()
$(document).ready(function() {

	$(document).attr('unselectable','on')
	     .css({'-moz-user-select':'-moz-none',
	           '-moz-user-select':'none',
	           '-o-user-select':'none',
	           '-khtml-user-select':'none',            
	           '-webkit-user-select':'none',
	           '-ms-user-select':'none',
	           'user-select':'none'
	     }).bind('selectstart', function(){ return false; });
	
	initialize();
		
	drawClock(canvas0, canvas1, canvas2, canvas3, context0, context1, context2, context3);
	
	drawGrass(context0, gridWidth, gridHeight);
	
	drawLanes(context0, gridWidth, gridHeight);
	
	drawSnails(canvas4, context4);
	
	drawSun(canvas5, context5);
	
	var greenlight = true;
	var yellowlight = false;

	drawTrafficControls(canvas6, context6, greenlight, yellowlight);

	// draw a white car
	drawCarwithCSSAnimation(canvas7, context7, greenlight, yellowlight);
	
	// draw a black car
	drawCarwithJSAnimation(canvas8, context8, greenlight, yellowlight);

	// Attach the mouse,touch events listeners.
	var e_post = document.getElementById('svg_post').getSVGDocument();
	e_post.addEventListener('mousedown', post_mouseDOWN, false);
	e_post.addEventListener('touchstart', post_touchSTART, false);

});//end of document.ready()

function clearCanvas(canv) {
	canv.width = canvasWidth;
	canv.height = canvasHeight;
}

function clearCanvas6(canv) {
	canv.width = can6Width;
	canv.height = can6Height;
}

function clearCanvas7(canv) {
	canv.width = can7Width;
	canv.height = can7Height;
}
