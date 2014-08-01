function drawGrass(context, gridWidth, gridHeight){
	//draw the grass background
	var line1 = new Line();
	line1.shadowColor = "lime";
	line1.drawLine(0, gridHeight-81, gridWidth+7 , gridHeight-81, 2, "lawngreen", context);
	for(var i = -25; i < gridWidth+14 ; i=i+5)
	{
	var line2 = new Line();
	line2.rotation =11;
	line2.draw(i, gridHeight , 81, 1, "lawngreen", context);
	}
	
	//draw the grass
	var square0 = new Square();
	square0.x =0;
	square0.y =291;
	square0.width = 666;
	square0.height = 69;
	square0.fillColor = "lawngreen";
	square0.draw(context);
}

function drawLanes(context, gridWidth, gridHeight){
	//car lanes
	var line5 = new Line();
	line5.shadowColor = "grey";
	for(var startx = -91; startx > -171; startx = startx - 20)
	{
	line5.drawLine(0, gridHeight+startx,gridWidth, gridHeight+startx, 0.5, "white", context);
	}
	for(var starty = -12; starty > -53; starty = starty - 20)
	{
	line5.drawLine(gridWidth+starty, gridHeight-161, gridWidth+starty , 1, 0.5, "white", context);
	}
}
