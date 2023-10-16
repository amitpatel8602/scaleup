var val;
function genrateData() {
  var prev = document.referrer;
  var datapage = document.getElementsByClassName("loadAdmin")[0];
  if (prev.endsWith("/login.html") || prev.search("/admin.html") != -1) {
    var selectData =
      "<a class='log-out' onclick='logout();'>logout</a>" +
      "<h1 class='heading welcome'>Welcome Admin!</h1>" +
      "<div class='dataSelect-form'>" +
      "<form>" +
      "<label for='dataSelect' id='label1'>Select a database for:</label>" +
      "<select name='data' id='data'>" +
      "<option value='job'>Job</option>" +
      "<option value='blog'>Blog</option>" +
      "</select>" +
      "<br><br>" +
      "<input type='submit' value='Submit' class='apply-button right'>" +
      "</form>" +
      "</div>";
    datapage.innerHTML = selectData;
    var afterHtml = datapage.innerHTML;
    var query = new URLSearchParams(location.search);
    var val = query.get("data");
    if (val == "job") {
      var textjob = loadJobData();
      datapage.innerHTML = afterHtml + textjob;
    } else if (val == "blog") {
      var textblog = loadBlogData();
      datapage.innerHTML = afterHtml + textblog;
      document.getElementById("data").value = "blog";
    }
    //console.log();
  } else {
    document.title = "Not found";
    datapage.innerHTML =
      "<h1 class='heading'>You are not allowed to see this page content...</h1>" +
      "<p class='heading'>PLEASE LOGIN FIRST</p>";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 3000);
  }
}

function logout() {
  var datapage = document.getElementsByClassName("loadAdmin")[0];
  console.log(datapage);
  datapage.innerHTML =
    "<h1 class='heading'>Logging Out...</h1>" +
    "<p class='heading'>you are redirecting to Scale up home page. Please wait</p>";
  setTimeout(() => {
    window.location.href = "contact.html";
    window.location.href = "index.html";
  }, 3000);
}

function loadJobData() {
  return (
    "<p class='heading'><a target='_blank' href='" +
    JOB_OPEN_PATH +
    "'>API Path</a></p>" +
    "</br>" +
    "<p class='heading'>API Status Code and Response Time</p>" +
    "<p class='heading'>Status Code: <span id='statusCode'>None</span></p>" +
    "<p class='heading'>Response Time: <span id='responseTime'></span>0 ms</p>" +
    "<button class='apply-button api-button' onclick=\"makeApiRequest('" +
    JOB_OPEN_PATH +
    "')\">Make API Request</button>" +
    "</br>" +
    "<p class='heading'>You can navigate to: <a target='_blank' href='" +
    JOB_OPEN_EDIT_PATH +
    "'>Edit Job Database</a></p>"
  );
}
function loadBlogData() {
  return (
    "<p class='heading'><a target='_blank' href='" +
    BLOG_LIST_PATH +
    "'>API Path</a></p>" +
    "</br>" +
    "<p class='heading'>API Status Code and Response Time</p>" +
    "<p class='heading'>Status Code: <span id='statusCode'>None</span></p>" +
    "<p class='heading'>Response Time: <span id='responseTime'></span>0 ms</p>" +
    "<button class='apply-button api-button' onclick=\"makeApiRequest('" +
    BLOG_LIST_PATH +
    "')\">Make API Request</button>" +
    "</br>" +
    "<p class='heading'>You can navigate to: <a target='_blank' href='" +
    BLOG_LIST_EDIT_PATH +
    "'>Edit Blog Database</a></p>"
  );
}

function makeApiRequest(apiUrl) {
  const startTime = new Date().getTime(); // Record the start time

  fetch(apiUrl)
    .then((response) => {
      const endTime = new Date().getTime(); // Record the end time
      const responseTime = endTime - startTime; // Calculate response time

      document.getElementById("statusCode").textContent = response.status;
      document.getElementById("responseTime").textContent = responseTime;
    })
    .catch((error) => {
      console.error("API request error:", error);
      document.getElementById("statusCode").textContent = "Error";
      document.getElementById("responseTime").textContent = "N/A";
    });
}
