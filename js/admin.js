function genrateData() {
  var prev = document.referrer;
  var datapage = document.getElementsByClassName("loadAdmin")[0];
  console.log(datapage);
  if (prev.endsWith("/login.html")) {
    datapage.innerHTML = "<h1 class='heading'>Welcome Admin!</h1>";
  } else {
    datapage.innerHTML =
      "<h1 class='heading'>You are not allowed to see this page content...Error 404</h1>";
  }
}
