// for red, green, and blue color values
var r, g, b, midWidth, midHeight;

var baseWidths = [66, 73, 78, 64, 69];
var guidoWidth = 350;
var widths = baseWidths.map(function(width) {
  return width / guidoWidth;
})

var baseHeight6 = 175;
var baseHeight7 = 72;
var baseHeight8 = 69;
var baseHeight9 = 98;

var baseHeights = [
  [{colour: 'black', height: 135}, {colour: 'white', height: 146}, {colour: 'yellow', height: 133}],
  [{colour: 'orange', height: 210}, {colour: 'black', height: 204}],
  [{colour: 'yellow', height: baseHeight6}, {colour: 'white', height: baseHeight7}, {colour: 'orange', height: 167}],
  [{colour: 'yellow', height: baseHeight6}, {colour: 'white', height: baseHeight7}, {colour: 'black', height: baseHeight8}, {colour: 'white', height: baseHeight9}],
  [{colour: 'yellow', height: 247}, {colour: 'black', height: baseHeight8}, {colour: 'yellow', height: baseHeight9}]];
var guidoHeight = 414;
var heights = baseHeights.map(function(arr) {
  return arr.map(function(shape) {
    return {colour: shape.colour, height: shape.height / guidoHeight};
  });
});

var colours = {};

function createShape(left, top, width, height, colour) {
  noStroke();
  fill(colour);
  console.log('left', left);
  console.log('top', top);
  console.log('width', width);
  console.log('height', height);
  console.log('colour', colour);
  rect(left, top, width, height);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colours.orange = color(156, 33, 26);
  colours.white = color(218, 212, 207);
  colours.black = color(24, 24, 23);
  colours.yellow = color(215, 183, 36);
  guido(windowWidth, windowHeight);
}

function guido(windowWidth, windowHeight){
  var left = 0;
  heights.forEach(function(column, index){
    var top = 0;
    var width = Math.round(widths[index] * windowWidth);

    column.forEach(function(shape){
      var height = Math.round(shape.height * windowHeight);
      createShape(left, top, width, height, colours[shape.colour]);

      top += height;
    });
    left += width;
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  guido(windowWidth, windowHeight);
}
