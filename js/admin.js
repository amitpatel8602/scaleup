function genrateData() {
  var prev = document.referrer;
  var datapage = document.getElementsByClassName("loadAdmin")[0];
  console.log(datapage);
  if (prev.endsWith("/login.html") || prev.search("/admin.html") != -1) {
    var selectData =
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
    }
    //console.log();
  } else {
    document.title = "404";
    datapage.innerHTML =
      "<h1 class='heading'>You are not allowed to see this page content...Error 404</h1>";
  }
}
