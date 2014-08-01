function drawTrafficControls(canvas, context, greenlight, yellowlight){
	//draw traffic lights
	var sign = true;
	
	//draw green light first
	clearCanvas6(canvas);
	
	var circleGre = new Circle();
	circleGre.draw(15, 51, 7, "lawngreen", context);
	circleGre.draw(15, 51, 6, "chartreuse", context);
	greenlight = true;
	yellowlight = false;
	
	//at first time, green light stays for 14s
	//green light stays for 3s
	//yellow light stays for 7s
	//red light stays for 4s

	setInterval(function(){
	//set big circle
	//redraw green light
	if(!circleGre)
	{
		clearCanvas6(canvas);
		var circleGre = new Circle();
		circleGre.draw(15, 51, 7, "lawngreen", context);
		circleGre.draw(15, 51, 5, "chartreuse", context);
		greenlight = true;
		yellowlight = false;
		}
		var yellowLight = null;
	
		setTimeout(function(){
		//draw yellow light
		yellowlight = true;
		greenlight = false;
			yellowLight = setInterval(function(){
				if(sign){
				clearCanvas6(canvas);
				sign = !sign;
				}
				else{
				var circleYellow = new Circle();
				circleYellow.draw(15, 32, 7, "#eeee00", context);
				circleYellow.draw(15, 32, 5, "#ffff00", context);
				sign = !sign;
				}
			},1000);//yellow light flash 3 times, every 2s of each time
		},3000);//set green light for 3s
	
		//draw red light
		setTimeout(function(){
		clearCanvas6(canvas);
		clearInterval(yellowLight);
		var circleRed = new Circle();
		circleRed.draw(15, 15, 7, "red", context);
		circleGre.draw(15, 15, 5, "tomato", context);
		greenlight  = false;
		yellowlight = false;
		},10000);//draw red light after 7s of yellow light flash	
	
	},14000);//red light stays for 4s
}