let image_array = document.getElementsByClassName('my_img');
console.log(
  'in script, have image ',
  image_array,
  ' first image is ',
  image_array[0]
);
console.log('humber of images: ', image_array.length);
let width_array = [];

for (i = 0; i < image_array.length; i++) {
  image_array[i].style.width = '100px';
  width_array[i] = 100;
}

function resize(image_num, direction) {
  console.log(
    'resizing image number ',
    image_num,
    ' for image: ',
    image_array[image_num]
  );
  magnification =
    document.getElementsByClassName('my_input')[image_num].value || 1.2;
  console.log('original image size is ', image_array[image_num].style.width);
  console.log('original image attributes are ', image_array[image_num].style);
  console.log('magnification is ', magnification);
  //resizing image[image_num]
  //first get current image size
  if (direction == 'grow') width_array[image_num] *= magnification;
  else width_array[image_num] /= magnification;
  image_array[image_num].style.width = width_array[image_num] + 'px';
  console.log('new image size is ', image_array[image_num].style.width);
}
