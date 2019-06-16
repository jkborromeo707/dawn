class DateTime {
  setDateTime() {
    var today = new Date();
    $('.date p[date]').innerHTML = (today.getMonth() + 1) + "月" + today.getDate() + "日";
    $('.time p[time]').innerHTML = today.getHours() + "時" + today.getMinutes() + "分";
    setInterval(this.setDateTime, 60000);
  }
}
