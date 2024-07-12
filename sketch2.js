var car, city_dark, city_light, bg, city_dark_2, city_light_2, bg_2, city_dark_3, city_light_3, bg_3, star, road, additive;
var carHeight, cityDarkHeight, cityLightHeight, bgHeight, roadHeight, starHeight;
var cityDarkX1, cityLightX1, cityDarkX2, cityLightX2, roadX1, roadX2, starX1, starX2;
var currentCityVersion = 1;
var currentBgVersion = 1;
let music;

var font;
var phrases = [
  "I don't remember who said it, but...",
  '"We are all soldiers chosen by fate."',
  "Mom, dad, i was reborn.",
  "My soul had been fated to slowly die, but it was reborn...",
  "Thanks to you.",
  "This is what true happiness is.",
  "This is how it should be. Don't worry.",
  "Please give everyone my regards.",
  "Don't worry about it, mom",
  "I'm only going back to where I was supposed to go.",
  "I'm simply returning to how I once was...",
  "That's all...",
  "Sweetheart, you saved my life",
  "You gave me all the courage I needed",
  "To let go...",
  "Isn't it fun how we used to sit and talk...",
  "...about nothing at all",
  "I never knew how I would fill that gap then, nor do I now",
  "I know you'd be okay",
  "Arrivederci..."
];
var currentPhraseIndex = 0; 

function preload() {
  car = loadImage("assets/car.png");
  city_light = loadImage("assets/1_city_light.png");
  city_dark = loadImage("assets/1_city_dark.png");
  bg = loadImage("assets/1_bg.png");
  city_light_2 = loadImage("assets/2_city_light.png");
  city_dark_2 = loadImage("assets/2_city_dark.png");
  bg_2 = loadImage("assets/2_bg.png");
  city_light_3 = loadImage("assets/3_city_light.png");
  city_dark_3 = loadImage("assets/3_city_dark.png");
  bg_3 = loadImage("assets/3_bg.png");
  road = loadImage("assets/road.png");
  star = loadImage("assets/star.png");
  font = loadFont("assets/DisposableDroidBB_ital.ttf");
  additive = loadImage("assets/additive.png")
  music = loadSound("assets/ES_Fuchsia Badusha.mp3", function() {
  });
}

function setup() {
  var cnv = createCanvas(960, 540);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0);

  carHeight = height; 
  cityLightHeight = height; 
  cityDarkHeight = height;
  bgHeight = height;
  roadHeight = height; 
  starHeight = height; 

  cityDarkX1 = 0;
  cityDarkX2 = width;
  cityLightX1 = 0;
  cityLightX2 = width;
  roadX1 = 0;
  roadX2 = width;
  starX1 = 0;
  starX2 = width;

  textFont(font);
  textSize(25);
  textAlign(CENTER, BOTTOM);
  fill(255);
}

function draw() {
  var cityImage_d, bgImage, cityImage_l;
  if (currentCityVersion === 1) {
    cityImage_d = city_dark;
    cityImage_l = city_light;
  } else if (currentCityVersion === 2) {
    cityImage_d = city_dark_2;
    cityImage_l = city_light_2;
  } else if (currentCityVersion === 3) {
    cityImage_d = city_dark_3;
    cityImage_l = city_light_3;
  }

  if (currentBgVersion === 1) {
    bgImage = bg;
  } else if (currentBgVersion === 2) {
    bgImage = bg_2;
  } else if (currentBgVersion === 3) {
    bgImage = bg_3;
  }

  image(bgImage, 0, 0, width, bgHeight);  
  image(star, starX1, 0, width, starHeight);  
  image(star, starX2, 0, width, starHeight);  
  starX1 -= 0.3;
  starX2 -= 0.3;

  if (starX1 <= -width) {  
    starX1 = width;  
  }
  if (starX2 <= -width) {  
    starX2 = width;  
  }

  image(cityImage_d, cityDarkX1, 0, width, cityDarkHeight);  
  image(cityImage_d, cityDarkX2, 0, width, cityDarkHeight);  
  cityDarkX1 -= 2;
  cityDarkX2 -= 2;

  if (cityDarkX1 <= -width) {  
    cityDarkX1 = width;  
  }
  if (cityDarkX2 <= -width) {  
    cityDarkX2 = width;  
  }

  image(cityImage_l, cityLightX1, 0, width, cityLightHeight);  
  image(cityImage_l, cityLightX2, 0, width, cityLightHeight);  
  cityLightX1 -= 4;
  cityLightX2 -= 4;

  if (cityLightX1 <= -width) {  
    cityLightX1 = width;  
  }
  if (cityLightX2 <= -width) {  
    cityLightX2 = width;  
  }

  image(road, roadX1, 0, width, roadHeight);  
  image(road, roadX2, 0, width, roadHeight);  
  roadX1 -= 6;
  roadX2 -= 6;

  if (roadX1 <= -width) {  
    roadX1 = width;  
  }
  if (roadX2 <= -width) {  
    roadX2 = width;  
  }

  image(car, 0, 0, width, carHeight);  

  text(phrases[currentPhraseIndex], width / 2, height - 50);
  image(additive, 0, 0, width, carHeight);  
}

function mousePressed() {
  changeText();
}

function keyPressed() {
  if (key === 'M' || key === 'm') {
    if (music.isPlaying()) {
      music.stop();
    } else {
      music.loop();
    }
  } else if (key === ' ' || key === 'Space') {
    changeText();
  } else if (key === '1') {
   currentCityVersion = 1;
   currentBgVersion = 1;
  } else if (key === '2') {
    currentCityVersion = 2;
    currentBgVersion = 2;
  } else if (key === '3') {
    currentCityVersion = 3;
    currentBgVersion = 3;
  }
}

function changeText() {
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}
