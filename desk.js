img = "";
Status = "";

function preload() {
    img = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    imagedetector = ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML = "Status - Detecting Object"
}

function draw() {
    image(img, 0, 0, 640, 420);
    
}

function modelloaded() {
    console.log("cocossd is initialized");
    Status = true;
    imagedetector.detect(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}