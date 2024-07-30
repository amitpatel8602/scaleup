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
      "<label for='dataSelect' id='label1'>Select for:</label>" +
      "<select name='data' id='data' onchange='this.form.submit()'>" +
      "<option value='blog'>Blog</option>" +
      "<option value='job'>Job</option>" +
      "<option value='quote'>Quote</option>" +
      "<option value='image'>Image</option>" +
      "<option value='postblog'>Post Blog Data</option>" +
      "</select>" +
      "<br><br>" +
      "</form>" +
      "</div>";
    datapage.innerHTML = selectData;
    var afterHtml = datapage.innerHTML;
    var query = new URLSearchParams(location.search);
    var val = query.get("data");
    var viewValue = val[0].toUpperCase() + val.slice(1);
    if (val == "job") {
      var textjob = loadData(JOB_OPEN_PATH, JOB_OPEN_EDIT_PATH, viewValue);
      datapage.innerHTML = afterHtml + textjob;
      document.getElementById("data").value = "job";
    } else if (val == "blog") {
      var textblog = loadData(BLOG_LIST_PATH, BLOG_LIST_EDIT_PATH, viewValue);
      datapage.innerHTML = afterHtml + textblog;
    } else if (val == "quote") {
      var textblog = loadData(DUMMY_QUOTE_API_PATH, null, viewValue);
      datapage.innerHTML = afterHtml + textblog;
      document.getElementById("data").value = "quote";
    } else if (val == "image") {
      var textblog = loadData(RANDOM_IMAGE, null, viewValue);
      datapage.innerHTML = afterHtml + textblog;
      document.getElementById("data").value = "image";
    } else if (val == "postblog") {
      var textblog =
        "<p class='heading'><a target='_blank' href='https://docs.google.com/spreadsheets/d/1zeQcLJYgSTZpJfNymSV4ssm6_ApYkTBRynpJglZWjls/edit?resourcekey#gid=1655722951'>Open Google Form Excel</a></br>Please sign in with amitpatel8602@gmail.com</p>";
      datapage.innerHTML = afterHtml + textblog;
      document.getElementById("data").value = "postblog";
    }
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
  datapage.innerHTML =
    "<h1 class='heading'>Logging Out...</h1>" +
    "<p class='heading'>you are redirecting to Scale up home page. Please wait</p>";
  setTimeout(() => {
    window.location.href = "contact.html";
    window.location.href = "index.html";
  }, 3000);
}

function loadData(path, editPath, vals) {
  var val =
    "<p class='heading'><a target='_blank' href='" +
    path +
    "'>" +
    vals +
    " API Path</a></p>" +
    "</br>" +
    "<p class='heading'>API Status Code and Response Time</p>" +
    "<p class='heading'>Status Code: <span id='statusCode'>None</span></p>" +
    "<p class='heading'>Response Time: <span id='responseTime'>None</span></p>" +
    "<button class='apply-button api-button' onclick=\"makeApiRequest('" +
    path +
    "')\">Make API Request</button>" +
    "</br>";
  if (editPath != null) {
    var editHtml =
      "<p class='heading'>You can navigate to: <a target='_blank' href='" +
      editPath +
      "'>Edit " +
      vals +
      " Database</a></p>";
    return val + editHtml;
  }
  return val;
}

function makeApiRequest(apiUrl) {
  const startTime = new Date().getTime(); // Record the start time

  fetch(apiUrl)
    .then((response) => {
      const endTime = new Date().getTime(); // Record the end time
      const responseTime = endTime - startTime; // Calculate response time

      document.getElementById("statusCode").textContent = response.status;
      document.getElementById("responseTime").textContent = responseTime + "ms";
    })
    .catch((error) => {
      console.error("API request error:", error);
      document.getElementById("statusCode").textContent = "Error";
      document.getElementById("responseTime").textContent = "N/A";
    });
}
