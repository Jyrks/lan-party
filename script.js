// Set the target date to October 10, 2026 at 12:00 in Europe/Tallinn timezone
// Europe/Tallinn is UTC+2 (EET) in winter, UTC+3 (EEST) in summer
// October 10 is before DST ends (last Sunday of October), so UTC+3
const targetDate = new Date('2026-10-10T12:00:00+03:00');

let countdownEnded = false;

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

        if (!countdownEnded) {
            countdownEnded = true;

            const tagline = document.querySelector('.tagline');
            tagline.textContent = 'LAN PARTY IS LIVE!';
            tagline.style.animation = 'odinCall 0.5s ease-in-out infinite';

            document.querySelectorAll('.countdown-box').forEach(box => {
                box.style.borderColor = '#d4a853';
                box.style.animation = 'runeGlow 0.8s ease-in-out infinite';
            });
        }
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Staggered pulsing effect on countdown boxes
document.querySelectorAll('.countdown-box').forEach((box, index) => {
    box.style.animationDelay = `${index * 0.2}s`;
});
