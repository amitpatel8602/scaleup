setTimeout(() => {
  var dPast = EXPERIENCE_START_DATE;
  var d1 = new Date(); // "now"
  var d2 = new Date(dPast);
  var years = d1.getFullYear() - d2.getFullYear();
  var months = d1.getMonth() - d2.getMonth();
  var dayDifference = d1.getDate() - d2.getDate();
  if (dayDifference < 0) {
    months--;
    // Get the previous month
    let lastMonth = new Date(d1.getFullYear(), d1.getMonth() - 1, d2.getDate());
    dayDifference += new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0).getDate();
}
  if (months < 0) {
    years--;
    months += 12;
  }
  if (months == 0) {
    document.getElementById("exp").innerText =
      "Total Experience - " + years + " years ";
  } else if(dayDifference == 0){
    document.getElementById("exp").innerText =
    "Total Experience - " + years + " years " + months + " months";
  }
  else {
    document.getElementById("exp").innerText =
      "Total Experience - " + years + " years " + months + " months "+ dayDifference + " days";
  }
}, 1000);
document.getElementById("exp").innerText = "Total Experience - Calculating...";
