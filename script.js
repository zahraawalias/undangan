// Ubah tanggal target sesuai event
const targetDate = new Date("Feb 1, 2026 08:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "<p>Sudah Hari H</p>";
        clearInterval(interval);
        return;
    }

    daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursEl.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesEl.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsEl.innerText = Math.floor((distance % (1000 * 60)) / 1000);
}

const interval = setInterval(countdown, 1000);
countdown();