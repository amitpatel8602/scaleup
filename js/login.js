function formSubmit() {
  var username = document.getElementById("userId").value;
  var password = document.getElementById("pass").value;
  if (username == "admin@scaleup.com" && password == getPassword()) {
    window.location = "admin.html?data=blog";
  } else {
    if (username && password) {
      document.getElementById("wrong-pass").innerHTML =
        "<p class='wrong-user'>Wrong username or password, Please enter again<p>";
      setTimeout(clear, 2000);
    } else {
      if (!username && !password) {
        document.getElementById("wrong-pass").innerHTML =
          "<p class='wrong-user'>Please fill username and password<p>";
        setTimeout(clear, 2000);
      } else if (!password) {
        document.getElementById("wrong-pass").innerHTML =
          "<p class='wrong-user'>Please fill password<p>";
        setTimeout(clear, 2000);
      } else if (!usernamed) {
        document.getElementById("wrong-pass").innerHTML =
          "<p class='wrong-user'>Please fill username<p>";
        setTimeout(clear, 2000);
      }
    }
  }
}
function clear() {
  document.getElementById("wrong-pass").innerText = "";
}

function changeImage() {
  console.log("print");
  var image = document.getElementsByClassName("img-fluid");
  if (
    image[0].src ==
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
  ) {
    image[0].src = "images/AdobeStock.png";
  } else {
    image[0].src =
      "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg";
  }
}

function getPassword() {
  var text = "Welcome";
  var more = checkTime(new Date().getMinutes());
  return text + more;
}
