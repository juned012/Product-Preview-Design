const mainImage = document.getElementById("mainImage");

function changeImage(imageIndex) {
  mainImage.src = imageIndex;
}

const imgArray = [
  "/image/img1.webp",
  "/image/img2.jpeg",
  "/image/img3.webp",
  "/image/img4.webp",
];
let index = 0;

function nextPre() {
  if (index < imgArray.length - 1) {
    index++;
  } else {
    index = 0;
  }
  mainImage.src = imgArray[index];
}

function previousPre() {
  if (index > 0) {
    index--;
  } else {
    index = imgArray.length - 1;
  }
  mainImage.src = imgArray[index];
}

setInterval(nextPre, 4000);
