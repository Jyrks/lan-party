// Set the target date to December 13, 2025 at 12:00 in Europe/Tallinn timezone
// Europe/Tallinn is UTC+2 (EET) in winter, UTC+3 (EEST) in summer
// December is in winter time, so UTC+2
const targetDate = new Date('2025-12-13T12:00:00+02:00');

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        // Countdown has ended
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

        // Change the tagline
        const tagline = document.querySelector('.tagline');
        tagline.textContent = 'LAN PARTY IS LIVE!';
        tagline.style.animation = 'glow 0.5s ease-in-out infinite alternate';

        return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format with leading zeros
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown immediately
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Add some interactive effects
document.querySelectorAll('.countdown-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        this.style.borderColor = '#00f0ff';
        this.querySelector('.time-value').style.color = '#00f0ff';
        this.querySelector('.time-label').style.color = '#00f0ff';
    });

    box.addEventListener('mouseleave', function() {
        this.style.borderColor = '#00ff41';
        this.querySelector('.time-value').style.color = '#00ff41';
        this.querySelector('.time-label').style.color = '#00ff41';
    });
});
