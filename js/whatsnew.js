const val = 0;
var isDataAtLeft = true;
fetch(JOB_OPEN_PATH)
  .then((response) => response.json())
  .then((jsonjob) => {
    joblistings = jsonjob;
    sortArray(joblistings);
    var data = document.getElementById("new-right");
    var loop = joblistings[val];
    var isExpired = checkJobExpired(loop);
    var jobExpiry = isExpired == undefined || !isExpired;
    var desc = !jobExpiry
      ? "<p class='expired'>This job is expired.</p>"
      : loop.description;
    var applyClass = jobExpiry
      ? "class='apply-button'"
      : 'class="apply-button disabled"';
    var applyButtonHtml =
      '<a href="' +
      loop.apply +
      '"' +
      ' target="_blank"' +
      applyClass +
      ">Apply</a>";
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
      applyButtonHtml +
      "<a " +
      "href='jobs.html'class='apply-button right'" +
      ">Explore More</a>";
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
      loop.description +
      "</p>" +
      '<a href="' +
      loop.more +
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
  var d1 = new Date();
  var d2 = new Date(listing.lastdate);
  return d1 > d2;
}
