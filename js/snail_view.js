$(document).keyup(function(evt){
if (evt.keyCode == 39) //'right'key
{
moveSnailRight(canvas4, context4);
}
});

$(document).keyup(function(evt){
if (evt.keyCode == 37) //'left'key
{
moveSnailLeft(canvas4, context4);
}
});

$(document).keyup(function(evt){
if (evt.keyCode == 38) //'up'key
{
moveSnailUp(canvas4, context4);
}
});

$(document).keyup(function(evt){
if (evt.keyCode == 40) //'down'key
{
moveSnailDown(canvas4, context4);
}
});

function drawSnail(canvas, context) {
	setInterval(function(){
	//draw minute stick
	clearCanvas(canvas);
	snail0.moveX += 1;
	snail0.draw(context);
	},1000);
}

function drawSnails(canvas, context){
	//draw the snail
	snail0 = new Snail(0,90);
	drawSnail(canvas,context);
	//mouse click event
	if(canvas4!=null)
	{
	canvas4.addEventListener('mouseup', snail_mouseUP, false);
	canvas4.addEventListener('mousedown', snail_mouseDOWN, false);
	canvas4.addEventListener('touchstart', snail_touchSTART, false);
	canvas4.addEventListener('touchend', snail_touchEND, false);
	}
	else
	console.log("canvas4 not initialized!");
}

function snail_mouseUP(ev) {
    if (ev.layerX || ev.layerX == 0) { // Firefox
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    }
    else if (ev.offsetX || ev.offsetX == 0) { // Opera
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }
    else if (ev.pageX || ev.pageX == 0) { // Opera
      ev._x = ev.pageX;
      ev._y = ev.pageY;
    }
    cur_X1 = ev._x;
    cur_Y1 = ev._y;
    //mouse move down
    if(cur_Y1-cur_Y0>0)
    {
    moveSnailDown(canvas4, context4);
    }
    else//mouse move up
    {
    moveSnailUp(canvas4, context4);
    }
    if(cur_X1-cur_X0>0)//mouse move right
    {
    moveSnailRight(canvas4, context4);
    }
    else//mouse move left
    {
    moveSnailLeft(canvas4, context4);
    }
}

function snail_mouseDOWN(ev) {
    if (ev.layerX || ev.layerX == 0) { // Firefox
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    }
    else if (ev.offsetX || ev.offsetX == 0) { // Opera
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }
    else if (ev.pageX || ev.pageX == 0) { // Opera
      ev._x = ev.pageX;
      ev._y = ev.pageY;
    }
    cur_X0 = ev._x;
    cur_Y0 = ev._y;
}

function snail_touchEND(ev) {
	ev.preventDefault();
    //check if it is a touch device
    if(ev.hasOwnProperty("changedTouches"))
    {
    var touchobj = ev.changedTouches[0];
    var tx = touchobj.clientX - canvas.offsetLeft;
    var ty = touchobj.clientY - canvas.offsetTop;
    ev._x = tx;
	ev._y = ty;
	//alert("a:"+tx+" b:"+ty);
    }
    cur_X1 = ev._x;
    cur_Y1 = ev._y;
    //mouse move down
    if(cur_Y1-cur_Y0>0)
    {
    moveSnailDown(canvas4, context4);
    }
    else//mouse move up
    {
    moveSnailUp(canvas4, context4);
    }
    if(cur_X1-cur_X0>0)//mouse move right
    {
    moveSnailRight(canvas4, context4);
    }
    else//mouse move left
    {
    moveSnailLeft(canvas4, context4);
    }
}

function snail_touchSTART(ev) {
	ev.preventDefault();
    //check if it is a touch device
    if(ev.hasOwnProperty("changedTouches"))
    {
    var touchobj = ev.changedTouches[0];
    var tx = touchobj.clientX - canvas.offsetLeft;
    var ty = touchobj.clientY - canvas.offsetTop;
    ev._x = tx;
	ev._y = ty;
    }
    cur_X0 = ev._x;
    cur_Y0 = ev._y;
}

function moveSnailRight(canvas, context) {
	if(snail0.moveX<snailboundRight){
	clearCanvas(canvas);
	snail0.moveX += snailpace;
	snail0.draw(context);}
}

function moveSnailLeft(canvas, context) {
	if(snail0.moveX>snailboundLeft){
	clearCanvas(canvas);
	snail0.moveX -= snailpace;
	snail0.draw(context);}
}

function moveSnailUp(canvas, context) {
	if(snail0.moveY>snailboundUp){
	clearCanvas(canvas);
	snail0.moveY -= snailpace+5;
	snail0.draw(context);}
}

function moveSnailDown(canvas, context) {
	if(snail0.moveY<snailboundDown){
	clearCanvas(canvas);
	snail0.moveY += snailpace+5;
	snail0.draw(context);}
}

