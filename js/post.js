$.getJSON(BLOG_LIST_PATH, function (data) {
  var postData = data;
  var query = new URLSearchParams(location.search);
  var val = query.get("POST");
  var valid = false;
  if (postData.length > 0) {
    for (var i = 0; i < postData.length; i++) {
      var data = postData[i];
      if (data.id == val) {
        valid = true;
        document.title = data.title;
        var title = document.getElementById("post-title");
        title.innerText = data.title;
        var desc = document.getElementById("post-desc");
        desc.innerHTML = "<p>" + data.description + "</p>";
        var author = document.getElementById("author-data");
        author.innerHTML = "<p>" + data.author + "</p>";
        var date = document.getElementById("post-date");
        date.innerHTML = "<p>" + globalDate(data.date) + "</p>";
      }
    }
  }
  if (!valid) {
    window.location.href = "error.html";
  }
});
