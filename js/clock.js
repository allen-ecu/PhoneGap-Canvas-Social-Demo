// Clock variables
var centreX = 43;
var centreY = 43;
var clockRadius = 40;
var coreRadius = 6;
var so = 0;
var mo = 0;
var ho = 0;
var ss = 0;

//draw the clock base on canvas0
function drawBase(canvas0, context0) {
clearCanvas(canvas0);
context0.translate(0.5, 0.5);
//generate random color from hash table
var cx = new ColorHash();
var c = cx.colors;
var rN = Math.floor((Math.random()*(c.length-1))+1);
var co = null;
if(c.hasOwnProperty(rN)){co = c[rN];}
else{co = "yellow";}
//draw big yellow circle
var clockEx = new Circle();
clockEx.draw(centreX, centreY, clockRadius, co, context0);
//draw small black circle
var clockIx = new Circle();
clockIx.draw(centreX, centreY, coreRadius, "black", context0);

//draw scales
for(ss= 0; ss < 360; ss= ss + 6){
drawScal(canvas0, context0, ss, centreX-clockRadius, 5, 1.5, "black");
}

for(ss= 0; ss < 360; ss= ss + 30){
drawScal(canvas0, context0, ss, centreX-clockRadius, 9, 1.8, "black");
}

//draw second, minute, hour
drawStick(canvas1, context1, so, clockRadius, 1.5, "green");
so = so + 6;
drawStick(canvas2, context2, mo, Math.floor(clockRadius /3 * 2), 2.5, "red");
mo = mo + 6;
drawStick(canvas3, context3, ho, Math.floor(clockRadius /2), 3.5, "blue");
ho = ho + 30;
}

function drawSecond(canvas1, context1, so) {
setInterval(function(){
//draw second stick
clearCanvas(canvas1);
if(0 < so < 360)
{so = so + 6;}
else
{so = 0;}
drawStick(canvas1, context1, so, clockRadius, 1.5, "green");
//console.log(so);
},1000);
}

function drawMinute(canvas2, context2, mo) {
setInterval(function(){
//draw minute stick
clearCanvas(canvas2);
if(0 < mo < 360)
{mo = mo + 6;}
else
{mo = 0;}
drawStick(canvas2, context2, mo, Math.floor(clockRadius /3 * 2), 2.5, "red");
//console.log(ho);
},60000);
}

function drawHour(canvas3, context3, ho) {
setInterval(function(){
//draw minute stick
clearCanvas(canvas3);
if(0 < ho < 360)
{ho =ho + 30;}
else
{ho = 0;}
drawStick(canvas3, context3, ho, Math.floor(clockRadius /2), 3.5, "blue");
//console.log(ho);
},3600000);
}

function drawStick(canvas, context, obj, radius, strokeWidth, color){
clearCanvas(canvas);
var str = new Line();
str.rotation = obj;
str.draw(centreX, centreY, radius, strokeWidth, color, context);
}

function drawScal(canvas, context, obj, radius, scaleWidth, strokeWidth, color){
var str = new Line();
str.rotation = obj;
str.drawScale(centreX, centreY, radius, scaleWidth, strokeWidth, color, context);
}

