const STANDARD_SIZE_IN_PIXELS = 40;

window.onload = function() {
    var previewBtn = document.getElementById("previewButton");
    previewBtn.onclick = previewBtnHandler;
}

function previewBtnHandler() {
    var tshirtCanvas = document.getElementById("tshirtCanvas");
    drawPatternIfSpecifiedOn(tshirtCanvas);
}

function drawPatternIfSpecifiedOn(canvas) {
    var drawPattern = determineDrawingMethodBasedOnPatternIfSpecified();
    if (drawPattern) {
        fillBackgroundWithSpecifiedColorOn(canvas);
        for (var shapes = 0; shapes < 20; shapes++) {
            var startingPoint = {
                x: randomInteger(canvas.width),
                y: randomInteger(canvas.height)
            };
            drawPattern(canvas, startingPoint);
        }
    }
}

function determineDrawingMethodBasedOnPatternIfSpecified() {
    var pattern = document.getElementById("pattern").value;
    switch (pattern) {
        case "circles":
            return drawCircle;
        case "rectangles":
            return drawRectangle;
        case "squares":
            return drawSquare;
        case "triangles":
            return drawTriangle;
        default: // none 
            return null;
    }
}