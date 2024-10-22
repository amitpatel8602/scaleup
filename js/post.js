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
        var copyEle = document.getElementById('code-block');
        var actual = copyEle.innerHTML;
        var val = actual.replaceAll('<nl>',"\n").replaceAll("</nl>",'');
        copyEle.innerHTML = "";
        
        if (data.description) {
          var meta = document.createElement("meta");
          meta.name = "description";
          meta.content = data.description;
          document.head.appendChild(meta);
        }
        var author = document.getElementById("author-data");
        author.innerHTML = "<p>" + data.author + "</p>";
        var date = document.getElementById("post-date");
        date.innerHTML = "<p>" + globalDate(data.date) + "</p>";
        copyEle.innerText = val;
      }
    }
  }
  if (!valid) {
    window.location.href = "error.html";
  }
});
