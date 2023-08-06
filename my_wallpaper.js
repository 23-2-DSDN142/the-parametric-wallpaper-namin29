let cellheight = 300; // 300
let cellwidth = 300; // 300
let eyesize = 28; // 30
let nosesize = 18; // 20
let bonecolor = [255, 255, 255]; // [255, 255, 255]
let backgroundcolor = [220, 214, 247]; // [0, 0, 0,]
let accentcolor = [166, 177, 225]; // [150, 50, 50]
let bonetipsize = 10; // 12
let eyeHeight = 115
let noseHeight = 135
let boneHeight = 120

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = cellwidth;
  pWallpaper.grid_settings.cell_height = cellheight;
  pWallpaper.grid_settings.row_offset = 80;
}


function wallpaper_background() {
  clear();
  background(backgroundcolor);
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  noStroke();
  fill(accentcolor)
  circle(cellwidth / 2, boneHeight / 0.7, 120, 120)
  rect

  fill(bonecolor);
  circle(cellwidth / 2, 100, 120);
  rect(cellwidth / 2 - 35, cellheight / 2 - 50, 70, 75);
  triangle(cellwidth / 2 - 35, cellheight / 2 + 25, cellwidth / 2 + 35, cellheight / 2 + 25, cellwidth / 2, cellheight / 2 + 35);

  fill(backgroundcolor);
  rect(cellwidth / 2 + 50, 40, 10, 100);
  rect(cellwidth / 2 - 50, 40, -10, 100); // black out the sides


  // if () {
  //   rect(cellwidth / 2 - 50, cellheight / 2 + 10, 100, 50);
  // } else {
  //   rect(cellwidth / 2 - 50, cellheight / 2 + 10, 100, 5);
  // }

  drawEyes(150, eyeHeight);
  drawNose(150, noseHeight);
  drawbones(150, boneHeight);
}

function drawEyes(x, y) {

  fill(0, 0, 0);
  circle(x - 28, y, eyesize);
  circle(x + 28, y, eyesize); // larger circles

  circle(x - 18, y - 8, eyesize - 15); // smaller circles
  circle(x + 18, y - 8, eyesize - 15);

  fill(accentcolor);
  circle(x - 27, y, eyesize - 10); // eyeball whites
  circle(x + 27, y, eyesize - 10);

  fill(0, 0, 0)
  circle(x - 29, y - 1, eyesize - 18); // pupil
  circle(x + 28, y + 1, eyesize - 18);
}

function drawNose(x, y) {

  fill(0, 0, 0);
  circle(x, y, nosesize);
  circle(x, y - 10, nosesize - 10);
}

function drawbones(x, y) {

  stroke(bonecolor);
  strokeWeight(bonetipsize / 1.5);
  line(x - 80, y + 40, x + 80, y + 120);
  line(x - 80, y + 120, x + 80, y + 40);

  noStroke()
  fill(bonecolor)
  circle(x - 82, y + 44, bonetipsize, bonetipsize);
  circle(x - 78, y + 36, bonetipsize * 0.9, bonetipsize * 0.9);

  circle(x - 82, y + 116, bonetipsize, bonetipsize);
  circle(x - 78, y + 124, bonetipsize * 0.9, bonetipsize * 0.9);

  circle(x + 82, y + 116, bonetipsize, bonetipsize);
  circle(x + 78, y + 124, bonetipsize * 0.9, bonetipsize * 0.9);

  circle(x + 82, y + 44, bonetipsize, bonetipsize);
  circle(x + 78, y + 36, bonetipsize * 0.9, bonetipsize * 0.9);
}