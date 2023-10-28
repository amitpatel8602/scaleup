window.onscroll = function () {
  console.log(document.body.scroll);
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};

document
  .getElementById("scroll-to-top-button")
  .addEventListener("click", function () {
    scrollToTop(1000); // You can adjust the duration of the scroll here (in milliseconds)
  });

function scrollToTop(duration) {
  const scrollStep = -window.scrollY / (duration / 15);
  const scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
