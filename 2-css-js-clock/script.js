const hourArrow = document.getElementById('hour-arrow'),
      minuteArrow = document.getElementById('minute-arrow'),
      secondArrow = document.getElementById('second-arrow');

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
  const today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds();

  const hAngle = 270 + (h % 12) * 30 + (m % 60 / 60) * 30;
        mAngle = 270 + (m % 60) * 6 + (s % 60 / 60) * 6;
        sAngle = 270 + (s % 60) * 6;

  hourArrow.style.transform = 'rotate(' + hAngle + 'deg)';
  minuteArrow.style.transform = 'rotate(' + mAngle + 'deg)';
  secondArrow.style.transform = 'rotate(' + sAngle + 'deg)';
}

