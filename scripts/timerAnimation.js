function timerAnimation() {
  const daysNode = document.querySelector(".js-timer-days");
  const hoursNode = document.querySelector(".js-timer-hours");
  const minutesNode = document.querySelector(".js-timer-minutes");
  const secondsNode = document.querySelector(".js-timer-seconds");

  const weddingDate = new Date("August 1, 2025, 16:00");
  let currentTime = new Date();

  let dif = weddingDate - currentTime;
  let days = Math.floor(dif / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dif % (1000 * 60)) / 1000);

  daysNode.textContent = days > 9 ? days : "0" + days;
  hoursNode.textContent = hours > 9 ? hours : "0" + hours;
  minutesNode.textContent = minutes > 9 ? minutes : "0" + minutes;
  secondsNode.textContent = seconds > 9 ? seconds : "0" + seconds;

  setInterval(() => {
    currentTime = new Date();
    dif = weddingDate - currentTime;
    days = Math.floor(dif / (1000 * 60 * 60 * 24));
    hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((dif % (1000 * 60)) / 1000);
    daysNode.textContent = days > 9 ? days : "0" + days;
    hoursNode.textContent = hours > 9 ? hours : "0" + hours;
    minutesNode.textContent = minutes > 9 ? minutes : "0" + minutes;
    secondsNode.textContent = seconds > 9 ? seconds : "0" + seconds;
  }, 1000);
}

export default timerAnimation;
