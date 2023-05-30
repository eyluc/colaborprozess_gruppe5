const strokeSlider = document.querySelector("#slider-1");
const generateButton = document.querySelector("#generateButton");
const saveButton = document.querySelector("#saveButton");

let distanceBetweenShapes = 270;
let distanceBetweenRows = 270;
let currentSeed;
let colorPicker;
let colorPickerr;

strokeSlider.addEventListener("change", (event) => {
  loop();
});

generateButton.addEventListener("click", function () {
  currentSeed = Math.floor(random(100000));
  loop();
});

saveButton.addEventListener("click", function () {
  save("mySVG.svg");
});

function setup() {
  createCanvas(windowWidth, windowHeight*3, SVG);
  background("black");
  noFill();
  translate(width / 2, height / 2);

  colorPicker = createColorPicker("black");
  colorPicker.position(20, 20);
  colorPicker.class("color-picker");

  colorPickerr = createColorPicker("white");
  colorPickerr.position(20, 80);
  colorPickerr.class("color-picker");
  
}

function draw() {
  let kontur = strokeSlider.value;
  let useRandomSeed = !currentSeed;

  if (useRandomSeed) {
    currentSeed = Math.floor(random(100000));
  }

  randomSeed(currentSeed);

  colorPicker.input(() => {
    loop();
  });

  colorPickerr.input(() => {
    loop();
  });

  background(colorPicker.color());
  noFill();
  stroke(colorPickerr.color());
  strokeWeight(kontur);

  // 1 ROW
  push();
  translate(200, 150);
  beginShape();

    //A 
      curveVertex(random(0,40), 200);
      curveVertex(random(0,40), random(160,200));
      curveVertex(random(90,120), random(0, 40));
      curveVertex(random(90,120), random(0, 40));
      curveVertex(random(150, 200), random(150, 200));
      curveVertex(random(150, 200), random(150, 200));
      curveVertex(random(140,160), random(80, 120));
      curveVertex(200, random(80, 120));
      curveVertex(0, random(80, 120));
      curveVertex(0, random(80, 120));
      

  endShape();
  pop();

  push();
  translate(600, 150);
  beginShape();

    //B
      curveVertex(random(0,30),random(0,30));
      curveVertex(random(0,0), random(170,200));
      curveVertex(random(170,200), random(130,170));
      curveVertex(random(80,100),random(80,100));
      curveVertex(0,random(20,180));
      curveVertex(random(120,200), 50);
      curveVertex(random(0,20),random(0,30));
      curveVertex(0,200);
      curveVertex(random(0,40), random(160,200));

  endShape();
  pop();

  push();
  translate(950, 150);
  beginShape();

    //C
      curveVertex(random(150,200),random(125,175));
      curveVertex(random(150,200),random(125,175));
      curveVertex(random(75,125), random(150,200));
      curveVertex(random(0,50), random(75,125));
      curveVertex(random(75,125),random(0,50));
      curveVertex(random(150,200), random(0,50));
     

  endShape();
  pop();

  push();
  translate(1300, 150);
  beginShape();

    //D
      curveVertex(random(0,0),random(190,200));
      curveVertex(random(0,20), random(0,10));
      curveVertex(random(100,150), random(30,50));
      curveVertex(random(170,200),random(80,120));
      curveVertex(random(100,150),random(150,190));
      curveVertex(random(0,10), random(180,200));
      curveVertex(random(0,0), random(0,0));
      curveVertex(random(0,0), random(160,200));

  endShape();
  pop();

  // 2 ROW
  push();
  translate(200, 500);
  beginShape();

    //E
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(0,50), random(0,50));
      curveVertex(random(0,50), random(90,120));
      curveVertex(random(50,170),random(80,120));
      curveVertex(random(0,50),random(90,120));
      curveVertex(random(0,50), random(150,200));
      curveVertex(random(150,200), random(150,200));
      curveVertex(random(150,200), random(150,200));

  endShape();
  pop();

  push();
  translate(600, 500);
  beginShape();

    //F
      curveVertex(random(190,200),random(0,50));
      curveVertex(random(190,200),random(0,50));
      curveVertex(random(0,50), random(0,50));
      curveVertex(random(0,50), random(90,120));
      curveVertex(random(50,170),random(80,120));
      curveVertex(random(0,20),random(90,120));
      curveVertex(random(0,50), random(150,200));
      curveVertex(random(180,200), random(150,200));

  endShape();
  pop();

  push();
  translate(950, 500);
  beginShape();

    //G
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(150,200),random(0,40));
      curveVertex(random(90,130),random(0,20)); 
      curveVertex(random(0,20), random(80,120));
      curveVertex(random(90,110), random(150,200));
      curveVertex(random(150,200),random(130,60));
      curveVertex(random(150,200),random(130,60));
      curveVertex(random(100,120),random(130,60));
      curveVertex(random(100,120),random(130,60));

  endShape();
  pop();

  push();
  translate(1300, 500);
  beginShape();

    //H
      curveVertex(random(0,30),random(0,20));
      curveVertex(random(0,30),random(0,20));
      curveVertex(random(0,30),random(190,200));
      curveVertex(random(0,30),random(90,120));
      curveVertex(random(180,200), random(80,120));
      curveVertex(random(180,200), random(190,200));
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(150,200),random(0,50));

  endShape();
  pop();

  // 3 ROW
  push();
  translate(200, 850);
  beginShape();

    //I
      curveVertex(random(70,120),random(180,200));
      curveVertex(random(70,120),random(180,200));
      curveVertex(random(120,140),random(180,200));
      curveVertex(random(120,140),random(180,200));
      curveVertex(random(100,100),random(200,200));
      curveVertex(random(100,100),random(0,20));
      curveVertex(random(100,100),random(0,20));
      curveVertex(random(70,120),random(0,20));
      curveVertex(random(120,140),random(0,20));
      curveVertex(random(120,140),random(0,20));

  endShape();
  pop();

  push();
  translate(600, 850);
  beginShape();

    //J
      curveVertex(random(80,110),random(0,20));    
      curveVertex(random(50,140),random(0,20));
      curveVertex(random(100,100),random(0,20));
      curveVertex(random(100,100),random(0,20));
      curveVertex(random(100,100),random(150,200));
      curveVertex(random(30,70),random(130,150));
      curveVertex(random(0,30),random(130,160));

  endShape();
  pop();

  push();
  translate(950, 850);
  beginShape();

    //K
      curveVertex(random(0,50),random(0,20));
      curveVertex(random(0,50),random(0,20));
      curveVertex(random(0,50),random(190,200));
      curveVertex(random(0,50),random(90,120));
      curveVertex(random(150,200), random(0,50));
      curveVertex(random(0,50), random(90,120));
      curveVertex(random(150,200),random(150,200));
      curveVertex(random(150,200),random(150,200));

  endShape();
  pop();

  push();
  translate(1300, 850);
  beginShape();

    //L
      curveVertex(random(0,50),random(0,20));
      curveVertex(random(0,50),random(0,20));
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(150,200), random(150,200));
      curveVertex(random(0,50), random(90,120));

  endShape();
  pop();

    // 4 ROW
    push();
    translate(200, 1200);
    beginShape();
  
    //M
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(0,20));
      curveVertex(random(0,50),random(0,20));
      curveVertex(random(80,130),random(80,200));
      curveVertex(random(80,130),random(80,200));     
      curveVertex(random(150,200),random(0,20));
      curveVertex(random(150,200),random(0,20));
      curveVertex(random(150,200),random(150,200));
      curveVertex(random(150,200),random(150,200));
  
    endShape();
    pop();
  
    push();
    translate(600, 1200);
    beginShape();
  
    //N
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(0,20));
      curveVertex(random(0,50),random(0,20));
      curveVertex(random(150,200),random(80,200));
      curveVertex(random(150,200),random(80,200));
      curveVertex(random(150,200),random(0,20));
      curveVertex(random(150,200),random(0,20));
  
    endShape();
    pop();
  
    push();
    translate(950, 1200);
    beginShape();
  
    //O
      curveVertex(100,0,);           
      curveVertex(random(75,135),random(0,50));
      curveVertex(random(150,200),random(75,135));
      curveVertex(random(75,135),random(150,200));
      curveVertex(random(0,50),random(75,135));
      curveVertex(random(75,135),random(0,50));
      curveVertex(random(150,200),random(75,135));
      curveVertex(random(75,135),random(150,200));
  
    endShape();
    pop();
  
    push();
    translate(1300, 1200);
    beginShape();
  
    //P
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(75,125),random(0,50));
      curveVertex(random(150,200),random(25,75));
      curveVertex(random(75,125),random(75,125));
      curveVertex(random(0,20),random(100,150));
      curveVertex(random(0,20),random(100,150));
  
    endShape();
    pop();
  
    // 5 ROW
    push();
    translate(200, 1550);
    beginShape();
  
    //Q 
      curveVertex(random(170,200),random(75,135));
      curveVertex(random(75,135),random(150,200));
      curveVertex(random(0,50),random(75,135));
      curveVertex(random(75,135),random(0,50));
      curveVertex(random(150,200),random(75,135));
      curveVertex(random(75,135),random(150,200));
      curveVertex(random(75,135),random(150,200));
      curveVertex(100,150);
      curveVertex(random(150,200),200);
      curveVertex(random(150,200),200);
  
    endShape();
    pop();
  
    push();
    translate(600, 1550);
    beginShape();
  
    //R
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(75,125),random(0,50));
      curveVertex(random(150,200),random(25,75));
      curveVertex(random(75,125),random(75,125));
      curveVertex(random(0,0),random(100,150));
      curveVertex(random(0,0),random(100,150));
      curveVertex(random(150,200),random(150,200));
      curveVertex(random(150,200),random(150,200));
  
    endShape();
    pop();
  
    push();
    translate(950, 1550);
    beginShape();
  
    //S
      curveVertex(random(150,200),random(35,75));
      curveVertex(random(150,200),random(35,75));
      curveVertex(random(75,135),random(0,35));
      curveVertex(random(0,50),random(0,35));
      curveVertex(random(75,125),random(75,125));
      curveVertex(random(150,200),random(125,175));
      curveVertex(random(75,135),random(150,200));
      curveVertex(random(0,35),random(100,150));
      curveVertex(random(0,35),random(100,150));
  
    endShape();
    pop();
  
    push();
    translate(1300, 1550);
    beginShape();
  
    //T
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(150,200),random(0,0));
      curveVertex(random(75,125),random(0,50));
      curveVertex(random(75,125),random(150,200));
      curveVertex(random(75,125),random(150,200));

  
    endShape();
    pop();
  
    // 6 ROW
    push();
    translate(200, 1900);
    beginShape();
  
    //U
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(0,50),random(125,150));
      curveVertex(random(100,125),random(200,200));
      curveVertex(random(150,200),random(125,150));
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(150,200),random(0,50));
  
    endShape();
    pop();
  
    push();
    translate(600, 1900);
    beginShape();
  
    //V
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(100,125),random(200,200));
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(150,200),random(0,50));
  
    endShape();
    pop();
  
    push();
    translate(950, 1900);
    beginShape();
  
    //W
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(50,75),random(150,175));
      curveVertex(random(100,125),random(0,50));
      curveVertex(random(100,125),random(200,200));
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(150,200),random(0,50));
  
    endShape();
    pop();
  
    push();
    translate(1300, 1900);
    beginShape();
  
    //X1
    curveVertex(random(0,50),random(0,50));
    curveVertex(random(0,50),random(0,50));
    curveVertex(random(150,200),random(150,200));
    curveVertex(random(75,125),random(75,125));
    curveVertex(random(0,50),random(150,200));
    curveVertex(random(150,200),random(0,50));
    curveVertex(random(150,200),random(0,50));
  
    endShape();
    pop();

    // 7 ROW
    push();
    translate(200, 2250);
    beginShape();
  
    //Y
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(75,125),random(75,125));
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(75,125),random(75,125));
      curveVertex(random(75,125),random(150,200));
      curveVertex(random(75,125),random(150,200));
  
    endShape();
    pop();
  
    push();
    translate(600, 2250);
    beginShape();
  
    //Z
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(0,50),random(0,50));
      curveVertex(random(150,200),random(0,50));
      curveVertex(random(0,50),random(150,200));
      curveVertex(random(150,200),random(150,200));
      curveVertex(random(150,200),random(150,200));
  
    endShape();
    pop();

  //noLoop();
}
