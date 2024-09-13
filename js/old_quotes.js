fetch(QUOTE_API_PATH)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("API request failed");
    }
  })
  .then((data) => {
    var quote = document.getElementById("main-para");
    var putData = data.content + "    \n-" + data.author;
    quote.innerText = putData;
  })
  .catch((error) => {
    console.error(error);
    document.getElementById("quote-section").style.visibility = "hidden";
  });
