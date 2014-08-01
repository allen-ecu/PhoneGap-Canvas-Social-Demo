function drawSun(canvas, context){
	//draw the sun
	var circleSun = new Circle();
	clearCanvas(canvas);
	circleSun.drawSun(495, 40, 20, "white", "yellow", blur,context);
	var sunMove = 10;
	var blur = 30;
	setInterval(function(){
	blur = Math.floor((Math.random()*200)+100);
	if(sunMove < 340)
	{sunMove = sunMove + 0.5;}
	clearCanvas(canvas);
	circleSun.moveX = sunMove;
	circleSun.drawSun(500, 40, 20, "white", "yellow", blur,context);
	},1000 * 0.01667);
}