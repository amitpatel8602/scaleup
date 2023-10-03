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
    var putData = data.content + "    \n-" + data.author;
    quote.innerText = putData; // Example: Logging the data to the console
    //console.log(data);
  })
  .catch((error) => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
  });
