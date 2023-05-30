const strokeSlider = document.querySelector("#slider-1");
const generateButton = document.querySelector("#generateButton");
const saveButton = document.querySelector("#saveButton");

let distanceBetweenShapes = 270;
let distanceBetweenRows = 270;
let currentSeed;
let colorPicker;

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
  createCanvas(windowWidth, windowHeight, SVG);
  background("black");
  noFill();
  translate(width / 2, height / 2);

  colorPicker = createColorPicker("black");
  colorPicker.position(20, 20);
  colorPicker.class("color-picker");
  
}

function draw() {
  translate(225, 150);

  let kontur = strokeSlider.value;
  let useRandomSeed = !currentSeed;

  if (useRandomSeed) {
    currentSeed = Math.floor(random(100000));
  }

  randomSeed(currentSeed);

  colorPicker.input(() => {
    loop();
  });

  background(colorPicker.color());
  noFill();
  stroke(255);
  strokeWeight(kontur);

  for (let j = 0; j < 2; j++) {
    let yTranslate = j * distanceBetweenRows;
    for (let i = 0; i < 5; i++) {
      let xTranslate = i * distanceBetweenShapes;
      push();
      translate(xTranslate, yTranslate);

      beginShape();

      curveVertex(random(0, 100), 0);
      curveVertex(0, random(100, 200));
      curveVertex(200, random(0, 200));
      curveVertex(random(1, 100), random(1, 100));
      curveVertex(0, random(0, 100));
      curveVertex(random(100, 200), 200);
      curveVertex(random(0, 200), 0);
      curveVertex(random(100, 200), random(1, 100));
      curveVertex(random(0, 100), 200);
      curveVertex(200, random(100, 200));
      curveVertex(0, random(0, 200));
      curveVertex(random(1, 100), random(100, 200));
      curveVertex(200, random(0, 100));
      curveVertex(random(100, 200), 0);
      curveVertex(random(0, 200), 200);
      curveVertex(random(100, 200), random(100, 200));

      endShape();
      pop();
    }
  }
  //save("mySVG.svg"); 

  noLoop();
}


// curveVertex(random(0, 100), 0);
// curveVertex(0, random(100, 200));
// curveVertex(200, random(0, 200));
// curveVertex(random(1, 100), random(1, 100));
// curveVertex(0, random(0, 100));
// curveVertex(random(100, 200), 200);
// curveVertex(random(0, 200), 0);
// curveVertex(random(100, 200), random(1, 100));
// curveVertex(random(0, 100), 200);
// curveVertex(200, random(100, 200));
// curveVertex(0, random(0, 200));
// curveVertex(random(1, 100), random(100, 200));
// curveVertex(200, random(0, 100));
// curveVertex(random(100, 200), 0);
// curveVertex(random(0, 200), 200);
// curveVertex(random(100, 200), random(100, 200));



// beginShape();

// curveVertex(random(0, 100), 0);
// curveVertex(random(100, 200), 0);
// curveVertex(random(0, 200), 0);

// curveVertex(random(1, 100), random(1, 100));

// curveVertex(0, random(0, 100));
// curveVertex(0, random(100, 200));
// curveVertex(0, random(0, 200));

// curveVertex(random(100, 200), random(1, 100));

// curveVertex(random(0, 100), 200);
// curveVertex(random(100, 200), 200);
// curveVertex(random(0, 200), 200);

// curveVertex(random(1, 100), random(100, 200));

// curveVertex(200, random(0, 100));
// curveVertex(200, random(100, 200));
// curveVertex(200, random(0, 200));

// curveVertex(random(100, 200), random(100, 200));

// endShape();

// push();
// translate(xTranslate, yTranslate);

// beginShape();

// curveVertex(random(0, 100), 0);
// curveVertex(0, random(100, 200));
// curveVertex(200, random(0, 200));
// curveVertex(random(1, 100), random(1, 100));
// curveVertex(0, random(0, 100));
// curveVertex(random(100, 200), 200);
// curveVertex(random(0, 200), 0);
// curveVertex(random(100, 200), random(1, 100));
// curveVertex(random(0, 100), 200);
// curveVertex(200, random(100, 200));
// curveVertex(0, random(0, 200));
// curveVertex(random(1, 100), random(100, 200));
// curveVertex(200, random(0, 100));
// curveVertex(random(100, 200), 0);
// curveVertex(random(0, 200), 200);
// curveVertex(random(100, 200), random(100, 200));

// endShape();
// pop();


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}


function generatePoints(){
  coor[0] = { x: random(0, 100), y: 0 };
  coor[1] = { x: 0, y: random(100, 200) };
  coor[2] = { x: 200, y: random(0, 200) };
  coor[3] = { x: random(1, 100), y: random(1, 100) };
  coor[4] = { x: 0, y: random(0, 100) };
  coor[5] = { x: random(100, 200), y: 200 };
  coor[6] = { x: random(0, 200), y: 0 };
  coor[7] = { x: random(100, 200), y: random(1, 100) };
  coor[8] = { x: random(0, 100), y: 200 };
  coor[9] = { x: 200, y: random(100, 200) };
  coor[10] = { x: 0, y: random(0, 200) };
  coor[11] = { x: random(1, 100), y: random(100, 200) };
  coor[12] = { x: 200, y: random(0, 100) };
  coor[13] = { x: random(100, 200), y: 0 };
  coor[14] = { x: random(0, 200), y: 200 };
  coor[15] = { x: random(100, 200), y: random(100, 200) };
}