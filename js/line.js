var Line = function() {
this.row = 0;
this.column = 0;
this.type = "Line";
this.rotation = 0;
this.shadowColor = "grey";
}

Line.prototype.draw = function(centreX, centreY, randius, lineWidth, color, context) {
context.save();
context.translate(centreX, centreY);
context.rotate(this.rotation * Math.PI /180);
context.translate(-centreX, -centreY);
context.lineWidth = lineWidth;
context.strokeStyle= color;
context.beginPath();
context.moveTo(centreX,centreY);
context.lineTo(centreX,centreY-randius);
context.closePath();
context.stroke();
context.restore();
}

Line.prototype.drawScale = function(centreX, centreY, randius, scaleWidth,lineWidth, color, context) {
context.save();
context.translate(centreX, centreY);
context.rotate(this.rotation * Math.PI /180);
context.translate(-centreX, -centreY);
context.lineWidth = lineWidth;
context.strokeStyle= color;
context.beginPath();
context.moveTo(centreX,randius);
context.lineTo(centreX,randius+ scaleWidth);
context.closePath();
context.stroke();
context.restore();
}

Line.prototype.drawLine = function(x1, y1, x2, y2, lineWidth, color, context) {
context.save();
context.strokeStyle= color;
context.lineWidth = lineWidth;
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.shadowBlur = 26;
context.shadowColor = this.shadowColor;
context.moveTo(x1,y1);
context.lineTo(x2,y2);
context.stroke();
context.restore();
}
