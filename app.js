function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';

  const digitalTime = document.querySelector('.digital-time');
  digitalTime.innerHTML = `<p>${hours % 12 || 12} : ${minutes.toString().padStart(2, '0')} <span>${amPm}</span></p>`;

  const hourHand = document.querySelector('.clock-hand');
  const degree = -90 + seconds * 6;

  hourHand.style.transform = `translate(0, -50%) rotate(${degree}deg)`;

  const date = document.querySelector('.date');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][now.getMonth()];
  const days = now.getDate();
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][now.getDay()];
  date.innerHTML = `<p>${day} ${days} <span>${months}</span></p>`;
}

setInterval(updateTime, 1000);
updateTime();