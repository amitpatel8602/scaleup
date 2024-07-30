setTimeout(() => {
  var dPast = EXPERIENCE_START_DATE;
  var d1 = new Date(); // "now"
  var d2 = new Date(dPast);
  var years = d1.getFullYear() - d2.getFullYear();
  var months = d1.getMonth() - d2.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  if (months == 0) {
    document.getElementById("exp").innerText =
      "Total Experience - " + years + " years ";
  } else {
    document.getElementById("exp").innerText =
      "Total Experience - " + years + " years " + months + " months";
  }
}, 1000);
document.getElementById("exp").innerText = "Total Experience - Calculating...";
