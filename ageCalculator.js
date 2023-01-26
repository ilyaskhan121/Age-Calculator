let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calculator() {
  let PastYear = parseInt(document.getElementById("year").value);
  let PastMonth = parseInt(document.getElementById("month").value);
  let PastDay = parseInt(document.getElementById("day").value);
  let today = new Date();
  let Current_year = today.getFullYear();
  let Current_month = today.getMonth() + 1;
  let Current_day = today.getDate();
  
  leapCheck(Current_year);
  if (
    PastYear > Current_year ||
    (PastMonth > Current_month && PastYear == Current_year) ||
    (PastDay > Current_day &&
      PastMonth == Current_month &&
      PastYear == Current_year)
  ) {
    alert("Not yet born");
    return;
  }
  let Years, Months, Days;
  Years = Current_year - PastYear;
  if (Current_month >= PastMonth) {
    Months = Current_month - PastMonth;
  } else {
    Years--;
    Months = 12 + Current_month - PastMonth;
  }
  if (Current_day >= PastDay) {
    Days = Current_day - PastDay;
  } else {
    Months--;
    let d = month[Current_month - 1];
    Days = d + Current_day - PastDay;
    if (Months < 0) {
      Months = 11;
      Years--;
    }
  }
  let ans =
    Years + " Years ," + Months + " Months ," + Days + " Days " + "🥰" + "😍";
  document.getElementById("result").innerHTML = ans;
}
function leapCheck(PastYear) {
  if (PastYear % 4 == 0 || (PastYear % 100 == 0 && PastYear % 400 == 0)) {
    month[1] = 29;
  } else {
    month[1] = 28;
  }
}
