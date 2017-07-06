const hourArrow = document.getElementById('hour-arrow'),
      minuteArrow = document.getElementById('minute-arrow'),
      secondArrow = document.getElementById('second-arrow');

updateClock();
setInterval(updateClock, 1000);

function updateClock() {
  const today = new Date();
  const hAngle = 270 + (today.getHours() % 12) * 30;
  const mAngle = 270 + (today.getMinutes() % 60) * 6;
  const sAngle = 270 + (today.getSeconds() % 60) * 6;
  hourArrow.style.transform = 'rotate(' + hAngle + 'deg)';
  minuteArrow.style.transform = 'rotate(' + mAngle + 'deg)';
  secondArrow.style.transform = 'rotate(' + sAngle + 'deg)';
}

