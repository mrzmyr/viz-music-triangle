let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function tri(x, y, size = 50) {

  let t = frameCount / 500;

  var vol = mic.getLevel();
  size = 200 + vol * 500;
  
  beginShape();

  let total = ((sin(frameCount/10) + 1) / 2) * 50;

  for (var i = 0; i < total; i++) {
    fill(`hsla(${random([200, 100, 50, 255, 150])}, 100%, 50%, 1)`)
    let x1 = x + sin(i + i * PI + PI * t) * size * i / total;
    let y1 = y + cos(i + i * PI + PI * t) * size * i / total;
    vertex(x1, y1);
  }

  endShape(CLOSE);

  beginShape();

  for (var i = 0; i < 3; i++) {
    let x1 = x + sin(i + i * PI + PI * t + PI * 1/4) * size;
    let y1 = y + cos(i + i * PI + PI * t + PI * 1/4) * size;
    vertex(x1, y1);
  }

  endShape(CLOSE);
}

function draw() {
  background(0);

  var vol = mic.getLevel();
  let size = 500 * tan(vol*10);
  fill('#FFF')
  ellipse(width / 2, height / 2, size, size);
  tri(width / 2, height / 2)

  let a = random([0, 1, 0, 0, 0])
  filter(INVERT);
  // if(a == 1) filter(INVERT);
}

