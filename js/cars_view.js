function drawCarwithCSSAnimation(canvas, context, greenlight, yellowlight){
	//draw one car
	var car0 = new Car(0,-249);
	car0.moveY = 180;
	car0.scaleX = 0.2;
	car0.scaleY = 0.2;
	clearCanvas7(canvas);
	car0.draw(context);
	car0.draw(context);//no idea weird!
}

function drawCarwithJSAnimation(canvas, context, greenlight, yellowlight){
	//draw another car
	var car1 = new Car(0,0);
	car1.fillColor = "black";
	car1.moveY = 207;
	car1.scaleX = 0.3;
	car1.scaleY = 0.3;
	clearCanvas(canvas);
	car1.draw(context);
	var carMove1 = 0;

	setInterval(function(){
		if(carMove1 < 520)
		{
		if(greenlight){carMove1 = carMove1 + 0.05;}
		if(yellowlight){carMove1 = carMove1 + 0.02;}
		if(!greenlight&&!yellowlight){}
		}
		if(520 < carMove1 < 666)
		{
		if(greenlight){carMove1 = carMove1 + 0.05;}
		if(yellowlight){carMove1 = carMove1 + 0.02;}
		}
		if(carMove1 >666)
		{
		carMove1 = -60;
		}
	clearCanvas(canvas);
	car1.moveX = carMove1;
	car1.draw(context);
	//console.log(carMove);
	},1000 * 0.01667);

}