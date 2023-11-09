const val = 0;
var isDataAtLeft = true;
fetch(JOB_OPEN_PATH)
  .then((response) => response.json())
  .then((jsonjob) => {
    joblistings = jsonjob;
    sortArray(joblistings);
    var data = document.getElementById("new-right");
    var loop = joblistings[val];
    var jobExpiry = checkJobExpired(loop);
    var desc = !jobExpiry
      ? descriptionVal(loop.description, 15) +
        "</br><p class='expired'>This job is expired.</p>"
      : descriptionVal(loop.description, 15);
    data.innerHTML =
      "<h3>Job</h3>" +
      "<p>" +
      loop.title +
      " for " +
      "<strong>" +
      loop.companyname +
      "</strong>" +
      "</p>" +
      "<p>" +
      globalDate(loop.date) +
      " - " +
      globalDate(loop.lastdate) +
      "</p>" +
      "<p>" +
      desc +
      "</p>" +
      returnApplyExplore(jobExpiry, loop);
  })
  .catch((error) => {
    isDataAtLeft = false;
    console.error("An error occurred:", error);
  });

fetch(BLOG_LIST_PATH)
  .then((response) => response.json())
  .catch(Error)
  .then((jsonblog) => {
    bloglistings = jsonblog;
    sortArray(bloglistings);
    var data;
    if (isDataAtLeft) {
      data = document.getElementById("new-left");
    } else {
      data = document.getElementById("new-right");
    }
    var loop = bloglistings[val];
    var seeMore;
    if (loop.id == "blog") {
      seeMore = loop.more;
    } else {
      seeMore = "/post.html?POST=" + loop.id;
    }
    data.innerHTML =
      "<h3>Blog</h3>" +
      "<p>" +
      loop.title +
      " by " +
      "<strong>" +
      loop.author +
      "</strong>" +
      "</p>" +
      "<p>" +
      globalDate(loop.date) +
      "</p>" +
      "<p>" +
      descriptionVal(loop.description, 15) +
      "</p>" +
      '<a href="' +
      seeMore +
      '"' +
      ' target="_blank" class="apply-button">See Blog</a>' +
      "<a " +
      "href='blogs.html' class='apply-button right'" +
      ">Explore More</a>";
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

function sortArray(arr) {
  arr.sort(function (a, b) {
    var c = new Date(a.date).getTime();
    var d = new Date(b.date).getTime();
    return c < d ? 1 : -1;
  });
}

function checkJobExpired(listing) {
  var d1 = new Date().getTime();
  var d2 = new Date(listing.lastdate).getTime();
  return d1 <= d2;
}

function returnApplyExplore(jobExpiry, loop) {
  if (jobExpiry) {
    return (
      '<a href="' +
      loop.apply +
      '"' +
      ' target="_blank" class="apply-button"' +
      ">Apply</a>" +
      "<a href='jobs.html' class='apply-button right'" +
      ">Explore More</a>"
    );
  } else {
    return (
      "<a href='jobs.html' class='apply-button left'" + ">Explore More</a>"
    );
  }
}
