const strokeSlider = document.querySelector("#slider-1");
const generateButton = document.querySelector("#generateButton");
const saveButton = document.querySelector("#saveButton");


let distanceBetweenShapes = 270;
let distanceBetweenRows = 270;
let currentSeed;

// let randomCoor = []

// coor[0] = curveVertex(random(0, 100), 0);
// coor[1] = curveVertex(0, random(100, 200));
// coor[2] = curveVertex(200, random(0, 200));
// coor[3] = curveVertex(random(1, 100), random(1, 100));
// coor[4] = curveVertex(0, random(0, 100));
// coor[5] = curveVertex(random(100, 200), 200);
// coor[6] = curveVertex(random(0, 200), 0);
// coor[7] = curveVertex(random(100, 200), random(1, 100));
// coor[8] = curveVertex(random(0, 100), 200);
// coor[9] = curveVertex(200, random(100, 200));
// coor[10] = curveVertex(0, random(0, 200));
// coor[11] = curveVertex(random(1, 100), random(100, 200));
// coor[12] = curveVertex(200, random(0, 100));
// coor[13] = curveVertex(random(100, 200), 0);
// coor[14] = curveVertex(random(0, 200), 200);
// coor[15] = curveVertex(random(100, 200), random(100, 200));


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
}

function draw() {
  translate(225, 150);

  let kontur = strokeSlider.value;
  let useRandomSeed = !currentSeed;

  if (useRandomSeed) {
    currentSeed = Math.floor(random(100000));
  }

  randomSeed(currentSeed);

  background("black");
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