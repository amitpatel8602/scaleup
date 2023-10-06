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
      loop.author +
      "</p>" +
      "<p>" +
      loop.date +
      "</p>" +
      "<p>" +
      loop.description +
      "</p>" +
      '<a href="' +
      loop.more +
      '"' +
      ' target="_blank" class="apply-button">See More</a>' +
      "<a " +
      "href='blogs.html' class='apply-button right'" +
      ">More Blogs</a>";
  });

fetch("json/jobopen.json")
  .then((response) => response.json())
  .then((jsonjob) => {
    joblistings = jsonjob;
    sortArray(joblistings);
    var data = document.getElementById("new-right");
    var loop = joblistings[val];
    data.innerHTML =
      "<h3>Job</h3>" +
      "<p>" +
      loop.title +
      " in " +
      loop.companyname +
      "</p>" +
      "<p>" +
      loop.date +
      "</p>" +
      "<p>" +
      loop.description +
      "</p>" +
      '<a href="' +
      loop.apply +
      '"' +
      ' target="_blank" class="apply-button">Apply</a>' +
      "<a " +
      "href='job_list.html'class='apply-button right'" +
      ">More Jobs</a>";
  });

function sortArray(arr) {
  arr.sort(function (a, b) {
    var c = new Date(a.date).getTime();
    var d = new Date(b.date).getTime();
    return c < d ? 1 : -1;
  });
}
