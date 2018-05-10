console.log('filter init');

// make canvas obj
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

// add input button
$('#loadButton').on('change', function (e) {
  var file = e.target.files[0];
  var fileReader = new FileReader();

  fileReader.onload = function(e) {
    var image = new Image();
    image.src = e.target.result;
    image.onload = function() {
      drawImageData(image);
    }
  };

  fileReader.readAsDataURL(file);
});
