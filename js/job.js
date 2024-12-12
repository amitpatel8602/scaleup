$(document).ready(function () {
  const ITEMS_PER_LOAD = 5; // Number of items to load per batch
  let currentIndex = 0; // Track the current index of loaded items
  let listings = []; // Array to store job data

  // Fetch job data
  $.getJSON(JOB_OPEN_PATH, function (data) {
    listings = data;
    listings.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending
    loadMoreItems(); // Load initial set of items
  });

  // Function to load more items
  function loadMoreItems() {
    const jobListings = $("#job-listings");
    const endIndex = Math.min(currentIndex + ITEMS_PER_LOAD, listings.length);

    for (let i = currentIndex; i < endIndex; i++) {
      const listing = listings[i];
      const isExpired = checkJobExpired(listing);

      const jobListing = $('<div class="job-listing"></div>');
      jobListing.append(`<h3>${listing.title}</h3>`);
      jobListing.append(`<p>Company: ${listing.companyname}</p>`);
      jobListing.append(`<p>Category: ${listing.category}</p>`);
      jobListing.append(`<p>Date: ${globalDate(listing.date)}</p>`);
      jobListing.append(`<p>Last Date: ${globalDate(listing.lastdate)}</p>`);
      jobListing.append(
        `<p>Description: ${descriptionVal(listing.description, 50)}</p>`
      );
      jobListing.append(`<p>Location: ${listing.location}</p>`);

      if (!isExpired) {
        jobListing.append('<p class="expired">Expired</p>');
      }

      if (isExpired) {
        jobListing.append(
          `<a href="${listing.apply}" target="_blank" class="apply-button">Apply</a>`
        );
      }

      jobListings.append(jobListing);
    }

    currentIndex = endIndex; // Update current index
  }

  // Detect scroll to load more items
  $(window).on('scroll', function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
      if (currentIndex < listings.length) {
        loadMoreItems();
      }
    }
  });
});

function globalDate(dateObj) {
  var [month, day, year] = dateObj.split("/");
  var monthName = months[parseInt(month) - 1];
  var formattedDate = `${monthName} ${day}, ${year}`;
  return formattedDate;
}

// Check if the job is expired
function checkJobExpired(listing) {
  const currentDate = new Date().getTime();
  const lastDate = new Date(listing.lastdate).getTime();
  return currentDate <= lastDate;
}

function descriptionVal(description, maxLength) {
  return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
}
