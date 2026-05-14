// Set the target date to October 10, 2026 at 12:00 in Europe/Tallinn timezone
// Europe/Tallinn is UTC+2 (EET) in winter, UTC+3 (EEST) in summer
// October 10 is before DST ends (last Sunday of October), so UTC+3
const targetDate = new Date('2026-10-10T12:00:00+03:00');

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

// Add Valheim-themed interactive effects
document.querySelectorAll('.countdown-box').forEach((box, index) => {
    // Staggered pulsing effect
    box.style.animationDelay = `${index * 0.2}s`;

    box.addEventListener('mouseenter', function() {
        this.style.borderColor = '#d4a853';
        this.style.transform = 'translateY(-10px) scale(1.05)';

        // Add fire glow effect (Valheim campfire style)
        this.style.boxShadow = `
            0 12px 35px rgba(0, 0, 0, 0.9),
            inset 0 0 40px rgba(212, 168, 83, 0.2),
            0 0 60px rgba(212, 168, 83, 0.4),
            0 0 80px rgba(255, 157, 58, 0.3)
        `;
    });

    box.addEventListener('mouseleave', function() {
        this.style.borderColor = '#6b4d3a';
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});

// Viking horn effect when countdown ends
let vikingHornShown = false;

// Enhanced countdown end behavior
const originalUpdate = updateCountdown;
updateCountdown = function() {
    originalUpdate();

    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0 && !vikingHornShown) {
        vikingHornShown = true;

        // Enhanced "Viking awakened" state
        const tagline = document.querySelector('.tagline');
        tagline.textContent = 'VIIKING ON ÄRGANUD!';
        tagline.style.animation = 'odinCall 0.5s ease-in-out infinite';
        tagline.style.borderColor = '#d4a853';
        tagline.style.color = '#ff9d3a';
        tagline.style.fontSize = '1.5rem';

        // Add dramatic Norse effect to all countdown boxes
        document.querySelectorAll('.countdown-box').forEach(box => {
            box.style.borderColor = '#d4a853';
            box.style.animation = 'runeGlow 0.8s ease-in-out infinite';
        });
    }
};
