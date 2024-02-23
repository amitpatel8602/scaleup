const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
  hr = hr == 0 ? 12 : hr;
  hr = hr > 12 ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML =
    hr + ":" + min + ":" + sec + " " + ap + " IST";
  var curWeekDay = today.getDay();
  var curDay = today.getDate();
  var curMonth = today.getMonth();
  var curYear = today.getFullYear();
  var date =
    days[curWeekDay] +
    ", " +
    months[curMonth] +
    " " +
    checkTime(curDay) +
    ", " +
    curYear;
  document.getElementById("date").innerHTML = date;

  var time = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function globalDate(dateObj) {
  var [month, day, year] = dateObj.split("/");
  var monthName = months[parseInt(month) - 1];
  var formattedDate = `${monthName} ${day}, ${year}`;
  return formattedDate;
}
