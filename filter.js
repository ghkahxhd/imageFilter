console.log('filter init');

// make canvas
var canvas = $('#canvas')[0];
var ctx = canvas.getContext('2d');

function drawImageData(image) {
  image.height *= canvas.offsetWidth / image.width;
  image.width = canvas.offsetWidth;

  if (image.height > canvas.offsetHeight) {
    image.width *= canvas.offsetHeight / image.height;
    image.height = canvas.offsetHeight;
  }

  ctx.drawImage(image, 0, 0, image.width, image.height);
}
