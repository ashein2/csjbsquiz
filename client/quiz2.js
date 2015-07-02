Template.quiz2.events({
	"click #erase": function(event){
		erase();
	}
})

var touch=false,
	prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_touch = false;

var color = "black",
    y = 10;



Template.quiz2.rendered = init;


function init() {
    drawContext = drawSpace.getContext("2d");
   	drawContext.fillStyle = "yellow";
	drawContext.fillRect(0,0,500,500);
    drawSpace.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    drawSpace.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    drawSpace.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    drawSpace.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}


function draw() {
	drawContext = drawSpace.getContext("2d");
    drawContext.beginPath();
    drawContext.moveTo(prevX, prevY);
    drawContext.lineTo(currX, currY);
    drawContext.strokeStyle = color;
    drawContext.lineWidth = y;
    drawContext.stroke();
    drawContext.closePath();
}

function erase() {
    
        drawContext.clearRect(0, 0, drawSpace.width, drawSpace.height);
        init();
        
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - drawSpace.offsetLeft;
        currY = e.clientY - drawSpace.offsetTop;

        touch = true;
        dot_touch = true;
        if (dot_touch) {
            drawContext.beginPath();
            drawContext.fillStyle = color;
            drawContext.fillRect(currX, currY, 2, 2);
            drawContext.closePath();
            dot_touch = false;
        }
    }
    if (res == 'up' || res == "out") {
        touch = false;
    }
    if (res == 'move') {
        if (touch) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - drawSpace.offsetLeft;
            currY = e.clientY - drawSpace.offsetTop;
            draw();
        }
    }
}

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      var canvas = document.getElementById("drawSpace");
      canvas.addEventListener("mousemove", function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var position = '(' + mousePos.x + ',' + mousePos.y+')';
      }, false);