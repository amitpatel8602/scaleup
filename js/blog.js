$(document).ready(function () {
  const ITEMS_PER_LOAD = 5; // Number of items to load per batch
  let currentIndex = 0; // Track the current index of loaded items
  let listings = []; // Array to store blog data

  // Fetch blog data
  $.getJSON(BLOG_LIST_PATH, function (data) {
    listings = data;
    listings.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending
    loadMoreItems(); // Load initial set of items
  });

  // Function to load more items
  function loadMoreItems() {
    const blogListings = $("#blog-listings");
    const endIndex = Math.min(currentIndex + ITEMS_PER_LOAD, listings.length);

    for (let i = currentIndex; i < endIndex; i++) {
      const listing = listings[i];
      const seeMore = listing.id === "blog" ? listing.more : `/post.html?POST=${listing.id}`;
      const source = listing.id === "blog" ? listing.source : "scaleup.org.in";

      const blogListing = $('<div class="blog-listing"></div>');
      blogListing.append(`<h3>${listing.title}</h3>`);

      const imageTag = listing.tag ? listing.tag : "white_paper";
      blogListing.append(
        `<img src="images/${imageTag}.png" class="blog-image" loading="lazy" title="${imageTag}"/>`
      );

      blogListing.append(`<p>Author: ${listing.author}</p>`);
      blogListing.append(`<p>Date: ${globalDate(listing.date)}</p>`);
      blogListing.append(
        `<p class="blog-desc">Description: ${descriptionVal(listing.description, 50)}</p>`
      );
      blogListing.append(`<p>Source: ${source}</p>`);
      blogListing.append(
        `<a href="${seeMore}" target="_blank" class="apply-button">See More</a>`
      );

      blogListings.append(blogListing);
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

// Example utility functions (implement these as needed)
function globalDate(dateObj) {
  var [month, day, year] = dateObj.split("/");
  var monthName = months[parseInt(month) - 1];
  var formattedDate = `${monthName} ${day}, ${year}`;
  return formattedDate;
}

function descriptionVal(description, maxLength) {
  console.log(description);
  return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
}
