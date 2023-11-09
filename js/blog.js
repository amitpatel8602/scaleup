$.getJSON(BLOG_LIST_PATH, function (data) {
  var listings = data;
  listings.sort(function (a, b) {
    var c = new Date(a.date).getTime();
    var d = new Date(b.date).getTime();
    return c > d ? 1 : -1;
  });
  //working on fix for late image loading
  var blogListings = $("#blog-listings");
  if (listings.length > 0) {
    for (var i = 0; i < listings.length; i++) {
      var listing = listings[i];
      var seeMore, source;
      if (listing.id == "blog") {
        seeMore = listing.more;
        source = listing.source;
      } else {
        seeMore = "/post.html?POST=" + listing.id;
        source = "scaleup.org.in";
      }
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
      blogListing.append("<p>Date: " + globalDate(listing.date) + "</p>");
      blogListing.append(
        '<p class="blog-desc">Description: ' +
          descriptionVal(listing.description, 50) +
          "</p>"
      );
      //blogListing.append("<p>Tag: " + listing.tag + "</p>");
      blogListing.append("<p>Source: " + source + "</p>");
      blogListing.append(
        '<a href="' +
          seeMore +
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
