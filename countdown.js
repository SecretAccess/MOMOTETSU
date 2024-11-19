document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
    };

    const targetDate = new Date('2024-12-31T13:00:00+09:00'); // 日本時間で設定

    const updateCountdown = () => {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            document.getElementById('countdown').innerText = '開催中！';
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.days.textContent = days;
        countdownElement.hours.textContent = hours;
        countdownElement.minutes.textContent = minutes;
        countdownElement.seconds.textContent = seconds;
    };

    // カウントダウンの更新を毎秒実行
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
