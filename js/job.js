$.getJSON("json/jobopen.json", function (data) {
  var listings = data;
  var jobListings = $("#job-listings");
  if (listings.length > 0) {
    for (var i = 0; i < listings.length; i++) {
      var listing = listings[i];
      var jobListing = $(".job-listing").eq(i);
      jobListing.append('<div class="job-listing">');
      jobListing.append("<h3>" + listing.title + "</h3>");
      jobListing.append("<p>Company: " + listing.companyname + "</p>");
      jobListing.append("<p>Category: " + listing.category + "</p>");
      jobListing.append("<p>Date: " + listing.date + "</p>");
      jobListing.append("<p>Description: " + listing.description + "</p>");
      jobListing.append("<p>Location: " + listing.location + "</p>");
      if (listing.isExpired) {
        jobListing.append('<p class="expired">Expired</p>');
      }

      jobListing.append(
        '<a href="' +
          listing.apply +
          '"' +
          ' target="_blank" class="apply-button">Apply</a>'
      );
      jobListing.append("</div>");
    }
  } else {
    var jobListing = $(".job-listing").eq(0);
    jobListing.append(
      '<h3 class="no-opening">' + "There is no openings currently..." + "</h3>"
    );
  }
});
