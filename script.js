// The images are inside a container element:
var image_container = document.getElementById('image_container');

let image_array = document.getElementsByClassName('my_img');
console.log(
  'in script, have image ',
  image_array,
  ' first image is ',
  image_array[0]
);
console.log('humber of images: ', image_array.length);
let width_array = [];
let height_array = [];
for (i = 0; i < image_array.length; i++) {
  image_array[i].style.width = '100px';
  image_array[i].style.height = '100px';
  width_array[i] = 100;
  height_array[i] = 100;
}

let screen_width = window.screen.width;
let screen_height = window.screen.height;

function resize(image_num, direction) {
  console.log(
    direction,
    ' image number ',
    image_num,
    ' for image: ',
    image_array[image_num]
  );
  magnification =
    document.getElementsByClassName('input_magnification')[image_num].value ||
    1.2;
  console.log('original image size is ', image_array[image_num].style.width);
  console.log('original image attributes are ', image_array[image_num].style);
  console.log('magnification is ', magnification);
  //resizing image[image_num]
  //first get current image size
  if (direction == 'grow') {
    width_array[image_num] *= magnification;
    height_array[image_num] *= magnification;
  } else {
    width_array[image_num] /= magnification;
    height_array[image_num] /= magnification;
  }
  image_array[image_num].style.width = width_array[image_num] + 'px';
  image_array[image_num].style.height = height_array[image_num] + 'px';
  console.log(
    'new image size is ',
    image_array[image_num].style.width,
    ', ',
    image_array[image_num].style.height
  );
}

function add_image() {
  // Get the input value
  var new_url = document.getElementsByClassName('input_url')[0];
  var image_url = new_url.value;

  // Create a new image element
  var new_img = document.createElement('img');
  new_img.src = image_url;
  new_img.style.width = '200px';
  new_img.style.height = '200px';

  // Add the image URL to the image container
  image_container.appendChild(new_img);

  // Clear the input field
  new_url.value = '';
}
