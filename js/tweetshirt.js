const STANDARD_SIZE_IN_PIXELS = 40;

var tweets = [
    "Try something new, learn beyond the book, and practice your programming skills.",
    "New JavaScript project, videos videos videos, and a new conversation.",
    "Head First HTML & CSS has particularly good coverage of the box model and margins, padding, borders",
    "Yale names college after computer scientist Grace Murray Hopper"
];

window.onload = function() {
    updateTweets(tweets);
    makeImageFromCanvasIfClicked();
    var previewBtn = document.getElementById("previewButton");
    previewBtn.onclick = previewBtnHandler;
}

function updateTweets(tweets) {
    var tweetSelection = document.getElementById("tweets");
    for (var i = 0; i < tweets.length; i++) {
        addTweetOptionTo(tweetSelection, tweets[i])
    }
    tweetSelection.selectedIndex = 0;
}

function addTweetOptionTo(tweetSelection, tweet) {
    var option = document.createElement("option");
    option.text = tweet;
    option.value = tweet;
    tweetSelection.add(option);
}

// The project may must be run on a web server 
// to make this feature work.
function makeImageFromCanvasIfClicked() {
    var canvas = document.getElementById("tshirtCanvas");
    canvas.onclick = function () {
        var imageIframe = 
            '<iframe title="The image on the shirt" src="' + canvas.toDataURL() + 
            '" frameborder="0" width="100%" height="100%"></iframe>';
        window.open().document.write(imageIframe);
    };
}

function previewBtnHandler() {
    var tshirtCanvas = document.getElementById("tshirtCanvas");
    fillBackgroundWithSpecifiedColorOn(tshirtCanvas);
    drawPatternIfSpecifiedOn(tshirtCanvas);
    drawText(tshirtCanvas);
    drawIcon(tshirtCanvas);
}

function drawPatternIfSpecifiedOn(canvas) {
    var drawPattern = determineDrawingMethodBasedOnPatternIfSpecified();
    if (drawPattern) {
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