let sourceImg=null;
let maskImg=null;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_6.png"; // Image and mask data for filter rendering

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 128);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  colorMode(HSB);
}

let X_STOP = 1920;
let Y_STOP = 1080;
let OFFSET = 25; // Wave intensity

let renderCounter=0;
function draw () {
  angleMode(DEGREES);
  let num_lines_to_draw = 40;
  // get one scanline
  for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
    for(let i=0; i<X_STOP; i++) {
      colorMode(RGB);
      let mask = maskImg.get(i, j);
      if (mask[1] < 128) {
        pix = sourceImg.get(i, j);
      }
      else {
        let wave = sin(j*8);
        let slip = map(wave, -1, 1, -OFFSET, OFFSET);
        pix = sourceImg.get(i+slip, j); // Wave filter effect

        // let brt = map(wave, -1, 1, 0, 255);
        // for(let c=0; c<3; c++) {
        //   pix[c] = brt;
        // } // Removes masked section of image

      }

      set(i, j, pix);
    }
  }
  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();

  // print(renderCounter);
  if(renderCounter > Y_STOP) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}