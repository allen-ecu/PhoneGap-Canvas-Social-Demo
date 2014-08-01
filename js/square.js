var Square = function() {
this.x = 0;
this.y = 0;
this.width = 0;
this.height = 0;
this.type = "Square";
this.fillColor = "black";
}

Square.prototype.draw = function(context) {
context.fillStyle = this.fillColor;
context.fillRect(this.x, this.y, this.width, this.height);
context.stroke();
}
