//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let cellheight = 300;
let cellwidth = 300;
let eyesize = 30; // 30
let nosesize = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = cellwidth;
  pWallpaper.grid_settings.cell_height = cellheight;
  pWallpaper.grid_settings.row_offset  = 50;
}


function wallpaper_background() {
  clear();
  background(0, 0, 0); //light honeydew green colour
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);

  
  noStroke();
  fill(255,255,255);
  circle(cellwidth / 2, 100, 120);
  rect(cellwidth / 2 -35, cellheight / 2 -50, 70, 75);
  triangle(cellwidth / 2 -35, cellheight / 2 +25, cellwidth / 2 +35, cellheight / 2 +25, cellwidth / 2,cellheight / 2 +35);

  fill(0,0,0);
  rect(cellwidth / 2 +50, 0, 20, 150);
  rect(cellwidth / 2 -50, 0, -20, 150); // black out the sides


 // if () {
 //   rect(cellwidth / 2 - 50, cellheight / 2 + 10, 100, 50);
 // } else {
 //   rect(cellwidth / 2 - 50, cellheight / 2 + 10, 100, 5);
 // }

  drawEyes(150, 110);
  drawNose(150, 130);
  drawbones(150, 150);
}

function drawEyes (x, y) {

  fill(0,0,0);
  circle(x -28, y, eyesize);
  circle(x +28, y, eyesize); // larger circles

  circle(x -18, y -8, eyesize -15); // smaller circles
  circle(x +18, y -8, eyesize -15);

  fill(200, 0, 0);
  circle(x -25, y -2, eyesize -20); // red dots
  circle(x +25, y -2, eyesize -20);
  
}

function drawNose (x, y) {

  fill(0,0,0);
  circle(x, y, nosesize);
  circle(x, y -10, nosesize -10);
}

function drawbones (x, y) {

  stroke(255,255,255);
  strokeWeight(10);
  line(cellwidth / 2 - 80, cellheight / 2 + 40, cellwidth / 2 + 80, cellheight / 2 + 120); // horizontal bone
  line(cellwidth / 2 - 10, cellheight / 2 - 60, 20, 120); // vertical bone
}