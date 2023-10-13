function genrateData() {
  var prev = document.referrer;
  var datapage = document.getElementsByClassName("loadAdmin")[0];
  if (prev.endsWith("/login.html") || prev.search("/admin.html") != -1) {
    var selectData =
      "<a class='log-out' onclick='logout();'>logout</a>" +
      "<h1 class='heading'>Welcome Admin!</h1>" +
      "<div class='dataSelect-form'>" +
      "<form>" +
      "<label for='dataSelect' id='label1'>Choose a database</label>" +
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
      datapage.innerHTML = afterHtml + "<p class='heading'>Hi from job</p>";
    } else if (val == "blog") {
      datapage.innerHTML = afterHtml + "<p class='heading'>Hi from blog</p>";
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
