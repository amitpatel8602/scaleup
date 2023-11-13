function formSubmit(url, data) {
  $.ajax({
    url: url,
    type: "POST",
    contentType: false,
    processData: false,
    data: data,
    success: function (res) {
      if (res) {
        successMsg();
      }
    },
    error: function (error) {
      successMsg();
      console.log("Success with internal errors");
    },
  });
}
function successMsg() {
  alert(
    "Your response is recorded. We may take 24 hours to validate your blog, and then you can see your blog published at scaleup.org.in"
  );
  clearAllData();
}
function validateEmail(email) {
  var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailPattern.test(email);
}

function clearAllData() {
  $("#email").val("");
  $("#name").val("");
  $("#title").val("");
  $("#blog").val("");
}

$(document).ready(function () {
  $(document).on("submit", "#myform", function (e) {
    e.preventDefault();

    var url =
      "https://docs.google.com/forms/d/e/1FAIpQLSdk2EgylcOEckJ1AmhZ57jLJstdF6sxxJdHoCyzeVjfq8_K6g/formResponse?";

    var form_data = new FormData();
    var email = $("#email").val();
    form_data.append("entry.1065212039", email);
    form_data.append("entry.697137795", $("#name").val());
    form_data.append("entry.1524834504", $("#title").val());
    form_data.append("entry.342439757", $("#blog").val());

    if (validateEmail(email)) {
      formSubmit(url, form_data);
    } else {
      alert("Please Enter valid Email");
    }
  });
});
