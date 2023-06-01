let image_array = document.getElementsByClassName('my_img');
console.log(
  'in script, have image ',
  image_array,
  ' first image is ',
  image_array[0]
);

function resize(image_num, percent) {
  console.log(
    'resizing image number ',
    image_num,
    ' for image: ',
    image_array[image_num]
  );
  //resizing image[image_num]
  //first get current image size
  image_array[image_num].style.width *= percent;
}
