$.getJSON(BLOG_LIST_PATH, function (data) {
  var listings = data;
  listings.sort(function (a, b) {
    var c = new Date(a.date).getTime();
    //console.log(c);
    var d = new Date(b.date).getTime();
    return c > d ? 1 : -1;
  });
  //working on fix for late image loading
  var blogListings = $("#blog-listings");
  if (listings.length > 0) {
    for (var i = 0; i < listings.length; i++) {
      var listing = listings[i];
      var blogListing = $(".blog-listing").eq(i);
      blogListing.append('<div class="blog-listing">');
      blogListing.append("<h3>" + listing.title + "</h3>");

      if (listing.tag) {
        blogListing.append(
          '<img src="' +
            "images/" +
            listing.tag +
            ".png" +
            '"' +
            ' class="blog-image" loading="lazy" alt="' +
            listing.tag +
            '"></img>'
        );
      } else {
        blogListing.append(
          '<img src="' +
            "images/white_paper.png" +
            '"' +
            ' class="blog-image" loading="lazy" alt="' +
            "white_paper" +
            '"></img>'
        );
      }

      blogListing.append("<p>Author: " + listing.author + "</p>");
      blogListing.append("<p>Date: " + listing.date + "</p>");
      blogListing.append(
        '<p class="blog-desc">Description: ' + descriptionVal(listing) + "</p>"
      );
      //blogListing.append("<p>Tag: " + listing.tag + "</p>");
      blogListing.append("<p>Source: " + listing.source + "</p>");
      blogListing.append(
        '<a href="' +
          listing.more +
          '"' +
          ' target="_blank" class="apply-button">See More</a>'
      );

      blogListing.append("</div>");
    }
  } else {
    var blogListing = $(".blog-listing").eq(0);
    blogListing.append(
      '<h3 class="no-opening">' +
        "There is no blog published currently..." +
        "</h3>"
    );
  }
});

function descriptionVal(listing) {
  var values = listing.description;
  var arr = values.split(" ");
  var limit = 50;
  if (arr.length > limit) {
    return arr.slice(0, limit).join(" ") + "...";
  } else {
    return values;
  }
}
