$.getJSON(EXPERIENCE_BIN, function (data) {
  var yearwisedata = data;
  var timeline = $(".timeline").eq(0);
  for (let index = 0; index < yearwisedata.length; index++) {
    var year = yearwisedata[index].year;
    var yearData = yearwisedata[index].yearData;
    timeline.append(
      `<button class="year" onclick="showDetails(this, '${year}', '${yearData}')">${year}</button>`
    );
  }
});

function showDetails(button, year, yearData) {
  // Remove 'active' class from any previously active button
  const activeButton = document.querySelector(".year.active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }

  // Add 'active' class to the clicked button
  button.classList.add("active");

  // Update details
  const detailsDiv = document.getElementById("details");
  detailsDiv.innerHTML = `<h2>${year}</h2><p>${yearData}</p>`;
}
