let size = 20;
let drawing;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  drawing = await loadImage("desenhoinovacao.png");
  background(71, 89, 209);
  frameRate(10);
}

function draw() {
  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      let c = random(0, 4);
      if (c < 1) {
        line(x, y, x + size, y + size);
      } else if (c < 2) {
        line(x, y + size, x + size, y);
      } else if (c < 3) {
        line(x, y, x, y + size);
      } else {
        line(x, y, x + size, y);
      }
    }
  }

  if (drawing) {
    image(drawing, 0, 0, width, height);
  }
}

function mousePressed() {
  background(209, 71, 71);
}

function mouseReleased() {
  background(71, 89, 209);
}


function mouseReleased() {
  background(71, 89, 209);
}