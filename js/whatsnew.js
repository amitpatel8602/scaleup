const val = 0;
fetch("json/listblogs.json")
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

fetch("json/jobopen.json")
  .then((response) => response.json())
  .then((jsonjob) => {
    joblistings = jsonjob;
    sortArray(joblistings);
    var data = document.getElementById("new-right");
    var loop = joblistings[val];
    console.log(loop.isExpired);
    var jobExpiry = loop.isExpired == undefined || !loop.isExpired;
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
      " in " +
      "<strong>" +
      loop.companyname +
      "</strong>" +
      "</p>" +
      "<p>" +
      loop.date +
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
