function drawClock(canvas0, canvas1, canvas2, canvas3, context0, context1, context2, context3){
	//canvas0 base
	//canvas1 second
	//canvas2 minute
	//canvas3 hour
	//set the current time
	var time = new Date();
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	if(hour > 12)
	{ho = (hour-12+ minute/60 + second/3600)*30;}
	else
	{ho = (hour+ minute/60 + second/3600)*30;}
	mo = minute*6;
	so = second*6
	//draw clock
	drawBase(canvas0, context0);
	drawSecond(canvas1, context1, so);
	drawMinute(canvas2, context2, mo);
	drawHour(canvas3, context3, ho);
}
