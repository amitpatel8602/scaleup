$.getJSON("json/listblogs.json", function (data) {
  var listings = data;
  var randomImagePath = "https://source.unsplash.com/random/?computer"; //working on fix for late image loading
  var imageAlt = "random image";
  var blogListings = $("#blog-listings");
  if (listings.length > 0) {
    for (var i = 0; i < listings.length; i++) {
      var listing = listings[i];
      var blogListing = $(".blog-listing").eq(i);
      blogListing.append('<div class="blog-listing">');
      blogListing.append("<h3>" + listing.title + "</h3>");

      blogListing.append(
        '<img src="' +
          randomImagePath +
          '"' +
          ' class="blog-image" alt="' +
          imageAlt +
          '"></img>'
      );

      blogListing.append("<p>Author: " + listing.author + "</p>");
      blogListing.append("<p>Date: " + listing.date + "</p>");
      blogListing.append(
        '<p class="blog-desc">Description: ' + listing.description + "</p>"
      );

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
