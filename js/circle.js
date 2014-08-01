var Circle = function() {
this.row = 0;
this.column = 0;
this.type = "Circle";
this.rotation = 0;
this.moveX = 0;
this.moveY = 0;
}
Circle.prototype.draw = function(centreX, centreY, radius, color, context) {
context.save();
context.fillStyle = color;
context.beginPath();
context.arc(centreX, centreY, radius, 0, Math.PI * 2);
context.closePath();
context.fill();
context.restore();
}

Circle.prototype.drawSun = function(centreX, centreY, radius, colorS, colorF, shadowBlur, context) {
context.save();
context.translate(centreX, centreY);
//transform
context.transform(1,0,0,1,-this.moveX,1);
context.translate(-centreX, -centreY);
context.lineWidth = 1;
context.strokeStyle = colorS;
context.fillStyle = colorF;
context.shadowColor = "yellow";
context.shadowBlur = shadowBlur;
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.beginPath();
context.arc(centreX, centreY, radius, 0, Math.PI * 2);
context.closePath();
context.stroke();
context.fill();
context.restore();
}
