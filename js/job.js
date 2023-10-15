$.getJSON(JOB_OPEN_PATH, function (data) {
  var listings = data;
  listings.sort(function (a, b) {
    var c = new Date(a.date).getTime();
    //console.log(c);
    var d = new Date(b.date).getTime();
    return c > d ? 1 : -1;
  });
  var jobListings = $("#job-listings");
  if (listings.length > 0) {
    for (var i = 0; i < listings.length; i++) {
      var listing = listings[i];
      var jobListing = $(".job-listing").eq(i);
      var isExpired = checkJobExpired(listing);
      jobListing.append('<div class="job-listing">');
      jobListing.append("<h3>" + listing.title + "</h3>");
      jobListing.append("<p>Company: " + listing.companyname + "</p>");
      jobListing.append("<p>Category: " + listing.category + "</p>");
      jobListing.append("<p>Date: " + listing.date + "</p>");
      jobListing.append("<p>Last Date: " + listing.lastdate + "</p>");
      jobListing.append("<p>Description: " + listing.description + "</p>");
      jobListing.append("<p>Location: " + listing.location + "</p>");
      if (isExpired) {
        jobListing.append('<p class="expired">Expired</p>');
      }
      jobListing.append(
        !isExpired
          ? '<a href="' +
              listing.apply +
              '"' +
              ' target="_blank" class="apply-button">Apply</a>'
          : ""
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

function checkJobExpired(listing) {
  var d1 = new Date();
  var d2 = new Date(listing.lastdate);
  return d1 > d2;
}
