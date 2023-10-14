const val = 0;
fetch("https://api.npoint.io/fd0b712706a4831d4be4")
  .then((response) => response.json())
  .then((jsonblog) => {
    bloglistings = jsonblog;
    sortArray(bloglistings);
    var data = document.getElementById("new-left");
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
      loop.date +
      "</p>" +
      "<p>" +
      loop.description +
      "</p>" +
      "<a " +
      "href='blogs.html' class='apply-button'" +
      ">Explore More</a>" +
      '<a href="' +
      loop.more +
      '"' +
      ' target="_blank" class="apply-button right">See Blog</a>';
  });

fetch("https://api.npoint.io/b55981b46615da93bb57")
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
      ? "class='apply-button right'"
      : 'class="apply-button  right disabled"';
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
      loop.date +
      " - " +
      loop.lastdate +
      "</p>" +
      "<p>" +
      desc +
      "</p>" +
      "<a " +
      "href='job_list.html'class='apply-button'" +
      ">Explore More</a>" +
      applyButtonHtml;
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
