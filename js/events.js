var txt = true;

function initialize(){
	canvas0 = document.getElementById('layer0');
	context0 = canvas0.getContext('2d');
	if (!context0) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	canvas1 = document.getElementById('layer1');
	context1 = canvas1.getContext('2d');
	if (!context1) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	
	canvas2 = document.getElementById('layer2');
	context2 = canvas2.getContext('2d');
	if (!context2) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	
	canvas3 = document.getElementById('layer3');
	context3 = canvas3.getContext('2d');
	if (!context3) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	
	canvas4 = document.getElementById('layer4');
	context4 = canvas4.getContext('2d');
	if (!context4) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	
	canvas5 = document.getElementById('layer5');
	context5 = canvas5.getContext('2d');
	if (!context5) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	
	canvas6 = document.getElementById('layer6');
	context6 = canvas6.getContext('2d');
	if (!context6) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	
	canvas7 = document.getElementById('layer7');
	context7 = canvas7.getContext('2d');
	if (!context7) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	
	canvas8 = document.getElementById('layer8');
	context8 = canvas8.getContext('2d');
	if (!context8) {
	      alert('Error: failed to getContext!');
	      return;
	    }
	
	canvas9 = document.getElementById('layer9');
	context9 = canvas9.getContext('2d');
	if (!context9) {
	      alert('Error: failed to getContext!');
	      return;
	    }
}

function post_mouseDOWN(ev) {
        context7.font = "32px";
        if(txt)
		{context7.fillStyle = '#000000';context7.fillText("#", 5, 5);}
		else
		{context7.fillStyle = '#ffffff';context7.fillText("#", 5, 5);}
		txt=!txt;
}

	//  touchstart event
function post_touchSTART(ev) {
	    ev.preventDefault();
        context7.font = "32px";
        if(txt)
		{context7.fillStyle = '#000000';context7.fillText("#", 5, 5);}
		else
		{context7.fillStyle = '#ffffff';context7.fillText("#", 5, 5);}
		txt=!txt;
}

//traffic lights shaker
$(function(){
  $("#layer6").bind("click", function (event) {
   if (!$("#layer6").hasClass("shake")) {
	$("#layer6").addClass("shake");
	} else {
	$('#layer6').removeClass("shake")}
  });
});

//top layer
$(function(){
  $("#layer9").bind("click", function (event) {
    alert('top layer!');
  });
});

//white car layer
$(function(){
  $("#layer7").bind("click", function (event) {
    alert('white car!');
  });
});

function svgEvent() {
	alert('embedded SVG');
}