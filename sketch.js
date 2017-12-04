var mapimg;
function preload() {
    mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/0,0,0.9.25,0,0/1024x512?access_token=pk.eyJ1IjoiamFjaGVuY2FybCIsImEiOiJjajJlaHE0OW8wNXo4MzJwaXB1YnFrb3RmIn0.WYeP_WLjofL9L3rW7PjMVA');
}

var url = 'http://api.open-notify.org/iss-now.json';
var issX = 0;
var issY = 0;

function setup() {    
    createCanvas(1024,512);
    setInterval(askIss, 1000);
    }

function askIss() {
    loadJSON(url, gotData, 'jsonp');    
}

function gotData(data) {
print(data.iss_position.latitude, data.iss_position.longitude);
    lat  = data.iss_position.latitude;
    long  = data.iss_position.longitude;   
    issX = map(long, -180, 180, 0, width);
    issY = map(lat, 90, -90, 0, height);
}

function draw() {
    background(mapimg); // Consult p5 Reference
    fill(255, 0, 0);
    strokeWeight(1);
    ellipse(issX, issY, frameCount % 75*0.2, frameCount % 75*0.2);
    
    lo = map(issX, 0, width, -180, 180);
    lo4 = lo.toFixed(4);
    la = map(issY, height, 0, -90, 90);
    la4 = la.toFixed(4);

    fill(0);
    textSize(20);
    textAlign(LEFT);
    text('Latitude: ' + la4, 30, 240);
    text('Longitude: ' + lo4, 20, 270); 
}
