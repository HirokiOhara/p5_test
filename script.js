const R = 20; //しずくの大きさ調整用
const A = 3; //しずくの丸み調整用
let lineWeight = 0.6;
let i;
let count = 1;


function setup() {
  smooth();
  frameRate(60);
  createCanvas(750, 1057);
  background(200);
  stroke(54, 54, 54);
  fill(54, 54, 54);
}

function draw() {
  if (mouseIsPressed) {
    strokeWeight(lineWeight);
    mouseDragged();
  }
}

//=====「始筆」=====
function mousePressed() {
  strokeWeight(2);
  push();
  translate(mouseX, mouseY + 3);
  rotate(radians(-150));
  beginShape();
  for (let theta = 10; theta < 361; theta++) {
    let r = 1 / (A * sin(radians(theta) / 2) + 1);
    vertex(R * r * cos(radians(theta)), R * r * sin(radians(theta)));
  }
  endShape(CLOSE);
  pop();
  redraw();
  // for (let i = 0; i < 100; i++) {
  //   let x = random(i);
  //   let y = sqrt(sq(i) - sq(x));
  //   ppointsX[i] = x;
  //   ppointsY[i] = y;
  // }
}

//=====「運筆」=====
function mouseDragged() {
  for (let i = 0; i < 10; i++) {
    let x = random(i);
    let y = sqrt(sq(i) - sq(x));
    for (let i = 0; i < 10; i++) {
      line(pmouseX, pmouseY, mouseX, mouseY);
      line(pmouseX + x, pmouseY - y, mouseX + x, mouseY - y); //右上
      line(
        pmouseX + x * 0.8,
        pmouseY + y * 0.8,
        mouseX + x * 0.8,
        mouseY + y * 0.8
      ); //右下
      line(
        pmouseX - x * 0.5,
        pmouseY - y * 0.5,
        mouseX - x * 0.5,
        mouseY - y * 0.5
      ); //左上
      line(
        pmouseX - x * 0.9,
        pmouseY + y * 0.9,
        mouseX - x * 0.9,
        mouseY + y * 0.9
      ); //左下
    }
    line(pmouseX - x, pmouseY + y, mouseX, mouseY); //右下&左上
    line(pmouseX - x, pmouseY - y, mouseX, mouseY); //右上&左下
  }
  // ppointsX[i] = x;
  // ppointsY[i] = y;
}

//=====「筆先を整える」=====
function mouseReleased() {
  lineWeight = 0.6;
}

//=====「キー操作」=====
function keyPressed() {
  //"スペース"を押したら「リセット」
  if (key === " ") {
    background(200);
  }
}

function keyTyped() {
  if (key ==="r") {
    //"r"を押したら墨が「朱色」になる
    stroke(235, 97, 1);
    fill(235, 97, 1);
  } else if (key === "b") {
    //"b"を押したら「墨色」になる
    stroke(54, 54, 54);
    fill(54, 54, 54);
  }
}