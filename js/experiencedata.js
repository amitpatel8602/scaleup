$.getJSON(EXPERIENCE_BIN, function (data) {
  var yearwisedata = data;
  var timeline = $(".timeline").eq(0);
  var skillset = $(".skillset").eq(0);
  var education = $(".education").eq(0);
  for (let index = 0; index < yearwisedata.length; index++) {
    var year = yearwisedata[index].year;
    var yearData = yearwisedata[index].yearData;
    console.log(year,yearData,typeof(year));
    if(year.toString().includes('edu-')){
      var year = year.split("-")[1];
      education.append(
        `<button class="year" onclick="showDetails(this, 'details-edu', '${year}', '${yearData}')">${year}</button>`
      );
    }else if (year !== "skill-data") {
      timeline.append(
        `<button class="year" onclick="showDetails(this, 'details-time', '${year}', '${yearData}')">${year}</button>`
      );
    }else {
      var arrayset = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "dark",
      ];
      var skills = yearData.split(",");
      skillset.append("<p>");
      for (let index = 0; index < skills.length; index++) {
        skillset.append(
          '<button type="button" class="btn btn-outline-' +
            arrayset[index % 7] +
            '">' +
            skills[index] +
            "</button>"
        );
      }
      skillset.append("</p>");
    }
  }
});

function showDetails(button, id, year, yearData) {
  // Remove 'active' class from any previously active button
  const activeButton = document.querySelector(".year.active");
  if (activeButton) {
    activeButton.classList.remove("active");
  }

  // Add 'active' class to the clicked button
  button.classList.add("active");

  // Update details
  const detailsDiv = document.getElementById(id);
  detailsDiv.innerHTML = `<h4>${year}</h4><p>${yearData}</p>`;
}
