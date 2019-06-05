function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let dayOfWeek = date.getDay();
  let dayy = date.getDate();
  let monn = date.getMonth();
  let yearr = date.getFullYear();

  let allWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuersday",
    "Friday",
    "Saturday"
  ];
  let allYear = [
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
    "December"
  ];
  let time = h + ":" + m + ":" + s + " ";

  let time2 =
    allWeek[dayOfWeek] + ", " + dayy + "  " + allYear[monn] + " , " + yearr;
  document.getElementById("clock-hours").innerText = time;
  document.getElementById("clock-days").innerText = time2;
}

setInterval(() => {
  showTime();
}, 1000);
