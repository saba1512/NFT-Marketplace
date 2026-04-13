let totalSecond = 24 * 60 * 60; // 24 საათი წამებში
const timer = document.getElementById("timer");

const interval = setInterval(() => {
    // დროის გამოთვლა
    const hours = String(Math.floor((totalSecond % (24 * 60 * 60)) / (60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((totalSecond % (60 * 60)) / 60)).padStart(2, "0");
    const seconds = String(totalSecond % 60).padStart(2, "0");

    // HTML-ის განახლება
    timer.innerHTML = `
        <div>
            <h4>${hours}</h4>
            <p>hours</p>
        </div>
        <span>:</span>
        <div class="margin-left">
            <h4>${minutes}</h4>
            <p>minutes</p>
        </div>
        <span>:</span>
        <div class="margin-left">
            <h4>${seconds}</h4>
            <p>seconds</p>
        </div>
    `;

    totalSecond--;

    if (totalSecond < 0) {
        clearInterval(interval);
        timer.textContent = "Finish!";
    }
}, 1000);

console.log(totalSecond);