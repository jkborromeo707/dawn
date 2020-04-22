class DateTime {
  setDateTime() {
    var today = new Date();
    var month = String(today.getMonth() + 1).padStart(2, "0")
    var day = String(today.getDate()).padStart(2, "0")
    var hour = String(today.getHours()).padStart(2, "0")
    var minute = String(today.getMinutes()).padStart(2, "0")

    $('.date p[date]').innerHTML = month + "/" + day;
    $('.time p[time]').innerHTML = hour + ":" + minute;
    
    setInterval(this.setDateTime, 60000);
  }
}
