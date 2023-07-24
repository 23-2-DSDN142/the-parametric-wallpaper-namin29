//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let center = 150;
let rectTL = center-50


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(0, 0, 0); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //rect(40 ,40, rect_width, rect_height);


  
  circle(center, 100, 150)
  rect(center-50, center-50, 100, 100)
  triangle(center-50, 200, center+50, 200, center, 220)


}
