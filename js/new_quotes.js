fetch("https://api.quotable.io/random")
  .then((response) => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error("API request failed");
    }
  })
  .then((data) => {
    // Process the response data here
    var quote = document.getElementById("main-para");
    quote.innerText = data.content; // Example: Logging the data to the console
  })
  .catch((error) => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
  });
