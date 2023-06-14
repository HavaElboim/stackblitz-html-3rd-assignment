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

class ImageAndButtons {
  constructor(image_url) {
    this.image_url = image_url;

    // Create the main div for the image and buttons
    this.container = document.createElement('div');
    this.container.className = 'img-flexbox';

    // Create the image element
    this.image = document.createElement('img');
    this.image.src = this.image_url;
    this.container.appendChild(this.image);

    // Create the buttons div
    this.buttons_div = document.createElement('div');
    this.buttons_div.className = 'btn-flexbox';

    // Create the enlarge button
    this.enlargeButton = document.createElement('button');
    this.enlargeButton.className = 'increase resize-btn';
    this.enlargeButton.onclick = this.resize.bind(this, 'increase');
    this.buttons_div.appendChild(this.enlargeButton);

    // Create the decrease button
    this.decrease_button = document.createElement('button');
    this.decrease_button.className = 'decrease resize-btn';
    this.decrease_button.onclick = this.resize.bind(this, 'decrease');
    this.buttons_div.appendChild(this.decrease_button);

    // Create the magnification input box
    this.magnification_input = document.createElement('input');
    this.magnification_input.type = 'text';
    this.magnification_input.className = 'input_magnification';
    this.buttons_div.appendChild(this.magnification_input);

    // Append the buttons div to the main container
    this.container.appendChild(this.buttons_div);
  }

  resize(direction) {
    // Get the magnification value from the input box
    const magnification_value =
      parseFloat(this.magnification_input.value) || 1.2;

    let width = parseFloat(this.image.style.width);
    let height = parseFloat(this.image.style.height);

    if (isNaN(width) || isNaN(height)) {
      const computedStyle = window.getComputedStyle(this.image);
      width = parseFloat(computedStyle.getPropertyValue('width'));
      height = parseFloat(computedStyle.getPropertyValue('height'));
    }

    // Perform the resize action based on the direction parameter
    if (direction === 'increase') {
      console.log('increasing');
      width *= magnification_value;
      height *= magnification_value;
    } else if (direction === 'decrease') {
      console.log('decreasing');
      width /= magnification_value;
      height /= magnification_value;
    }

    this.image.style.width = width + 'px';
    this.image.style.height = height + 'px';
  }
}

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
  if (direction == 'increase') {
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

// Function to add image to the container and update the page
function add_image() {
  // Get the input value
  const new_img = document.getElementsByClassName('input_url')[0];
  const new_url = new_img.value;

  // Create a new instance of ImageAndButtons
  const image_and_buttons = new ImageAndButtons(new_url);

  // Append the container to the image container
  image_container.appendChild(image_and_buttons.container);

  // Clear the input field
  new_url.value = '';
}
