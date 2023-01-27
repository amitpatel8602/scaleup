window.onload = function () {
  // List of image URLs
  var images = [
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpg",
    "images/19.jpg",
    "images/20.jpg",
  ];

  // Get a random image URL
  var randomImage = images[Math.floor(Math.random() * images.length)];

  // Update the src attribute of the image element
  document.getElementById("main-img").src = randomImage;
};
