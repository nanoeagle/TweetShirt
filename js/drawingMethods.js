function drawCircle(canvas, center) {
    var canvasContext = canvas.getContext("2d");
    var radius = randomInteger(STANDARD_SIZE_IN_PIXELS);
    var startAngle = convertToRadiansFrom(0);
    var endAngle = convertToRadiansFrom(360);
    var counterclockwise = false;
    canvasContext.beginPath();
    canvasContext.arc(
        center.x, center.y,
        radius, startAngle, endAngle,
        counterclockwise
    );
    canvasContext.fillStyle = 
        document.getElementById("patternColor").value;
    canvasContext.fill();
}

function drawRectangle(canvas, startingPoint) {
    var rectInfo = {
        colorElement: "patternColor",
        startingPoint: startingPoint,
        width: randomInteger(STANDARD_SIZE_IN_PIXELS),
        height: randomInteger(STANDARD_SIZE_IN_PIXELS)
    };
    fillRectangle(canvas.getContext("2d"), rectInfo);
}

function drawSquare(canvas, startingPoint) {
    var w = randomInteger(STANDARD_SIZE_IN_PIXELS);
    var squareInfo = {
        colorElement: "patternColor",
        startingPoint: startingPoint,
        width: w,
        height: w
    };
    fillRectangle(canvas.getContext("2d"), squareInfo);
}

function fillBackgroundWithSpecifiedColorOn(canvas) {
    var backgroundInfo = {
        colorElement: "backgroundColor",
        startingPoint: {x: 0, y: 0},
        width: canvas.width,
        height: canvas.height
    };
    fillRectangle(canvas.getContext("2d"), backgroundInfo);
}

function fillRectangle(canvasContext, rectInfo) {
    canvasContext.fillStyle = 
        document.getElementById(rectInfo.colorElement).value;
    canvasContext.fillRect(
        rectInfo.startingPoint.x, rectInfo.startingPoint.y, 
        rectInfo.width, rectInfo.height
    );
}

function drawTriangle(canvas, startingPoint) {
    var canvasContext = canvas.getContext("2d");
    canvasContext.beginPath();
    canvasContext.moveTo(startingPoint.x, startingPoint.y);
    for (var i = 0; i < 2; i++) {
        canvasContext.lineTo(
            randomInteger(canvas.width), randomInteger(canvas.height));
    }
    canvasContext.closePath();
    canvasContext.fillStyle =
        document.getElementById("patternColor").value;;
    canvasContext.fill();
}