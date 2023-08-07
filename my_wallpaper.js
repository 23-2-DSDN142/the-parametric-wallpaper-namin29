let cellheight = 300; // 300
let cellwidth = 300; // 300
let eyesize = 50; // 30
let nosesize = 18; // 20
let bonecolor = [247, 155, 211]; // [255, 255, 255]
let backgroundcolor = [26, 40, 154]; // [0, 0, 0,]
let accentcolor = [255, 0, 0]; // [150, 50, 50]
let eyeandnosecolor = [36, 20, 104]; // [0, 0, 0,]
let bonetipsize = 18; // 12
let eyeHeight = 115; // 115
let noseHeight = 140; // 135
let boneHeight = 130; // 120
let rowoffset = 90; // 0

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = cellwidth;
  pWallpaper.grid_settings.cell_height = cellheight;
  pWallpaper.grid_settings.row_offset = rowoffset;
}


function wallpaper_background() {
  clear();
  background(backgroundcolor);
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  noStroke();
  fill(accentcolor)
  circle(cellwidth / 2, boneHeight / 0.7, 120, 120) // background circle
  
  if(rowoffset == 0) {
  beginShape();
  vertex(250, 0);
  vertex(300, 50);
  vertex(350, 0);
  vertex(300, -50);
  endShape();         // if statement for diamond shape
  }

  fill(bonecolor);
  circle(cellwidth / 2, 100, 120);
  rect(cellwidth / 2 - 35, cellheight / 2 - 50, 70, 75);
  triangle(cellwidth / 2 - 35, cellheight / 2 + 25, cellwidth / 2 + 35, cellheight / 2 + 25, cellwidth / 2, cellheight / 2 + 35);

  fill(backgroundcolor);
  rect(cellwidth / 2 + 50, 40, 10, 100);
  rect(cellwidth / 2 - 50, 40, -10, 100); // black out the sides

  drawEyes(150, eyeHeight);
  drawNose(150, noseHeight);
  drawbones(150, boneHeight);
}

function drawEyes(x, y) {

  fill(eyeandnosecolor);
  circle(x - 28, y, eyesize);
  circle(x + 28, y, eyesize); // larger circles

  circle(x - 18, y - 8, eyesize - 15); // smaller circles
  circle(x + 18, y - 8, eyesize - 15);

  fill(bonecolor);
  circle(x - 27, y, eyesize - 10); // eyeball whites
  circle(x + 27, y, eyesize - 10);

  fill(eyeandnosecolor)
  circle(x - 29, y - 1, eyesize - 18); // pupil
  circle(x + 28, y + 1, eyesize - 18);

  if(accentcolor[0] === 255 && accentcolor[1] === 0 && accentcolor[2] === 0) {
    fill(accentcolor);
    circle(x - 27, y, eyesize - 10); // scary eyes
    circle(x + 27, y, eyesize - 10);
  }
}

function drawNose(x, y) {

  fill(eyeandnosecolor);
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