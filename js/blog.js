$.getJSON("json/listblogs.json", function (data) {
  var listings = data;
  var randomImagePath = "https://source.unsplash.com/random/?computer"; //working on fix for late image loading
  var jobListings = $("#blog-listings");
  if (listings.length > 0) {
    for (var i = 0; i < listings.length; i++) {
      var listing = listings[i];
      var jobListing = $(".blog-listing").eq(i);
      jobListing.append('<div class="blog-listing">');
      jobListing.append("<h3>" + listing.title + "</h3>");

      jobListing.append(
        '<img src="' +
          randomImagePath +
          '"' +
          ' class="blog-image" alt="' +
          listing.alt +
          '"></img>'
      );

      jobListing.append("<p>Author: " + listing.author + "</p>");
      jobListing.append("<p>Date: " + listing.date + "</p>");
      jobListing.append(
        '<p class="blog-desc">Description: ' + listing.description + "</p>"
      );

      jobListing.append("<p>Source: " + listing.source + "</p>");
      jobListing.append(
        '<a href="' +
          listing.more +
          '"' +
          ' target="_blank" class="apply-button">See More</a>'
      );

      jobListing.append("</div>");
    }
  } else {
    var jobListing = $(".blog-listing").eq(0);
    jobListing.append(
      '<h3 class="no-opening">' +
        "There is no blog published currently..." +
        "</h3>"
    );
  }
});
