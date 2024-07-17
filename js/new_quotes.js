fetch(ZEN_QUOTE_API_PATH)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("API request failed");
    }
  })
  .then((data) => {
    console.log(data);
    var quote = document.getElementById("main-para");
    var putData = data.q + "    \n-" + data.a;
    quote.innerText = putData;
  })
  .catch((error) => {
    console.error(error);
    document.getElementById("quote-section").style.visibility = "hidden";
  });
