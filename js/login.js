function formSubmit() {
  var username = document.getElementById("form1Example13").value;
  var password = document.getElementById("form1Example23").value;
  if (username == "amit@gmail.com" && password == "12345") {
    window.location = "admin.html";
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
