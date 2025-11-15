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

// Add battle-themed interactive effects
document.querySelectorAll('.countdown-box').forEach((box, index) => {
    // Staggered pulsing effect
    box.style.animationDelay = `${index * 0.2}s`;

    box.addEventListener('mouseenter', function() {
        this.style.borderColor = '#d4af37';
        this.style.transform = 'translateY(-8px) scale(1.05)';

        // Add a subtle battle sound effect simulation via visual feedback
        this.style.boxShadow = `
            0 12px 35px rgba(0, 0, 0, 0.9),
            inset 0 0 40px rgba(212, 175, 55, 0.3),
            0 0 60px rgba(212, 175, 55, 0.6)
        `;
    });

    box.addEventListener('mouseleave', function() {
        this.style.borderColor = '#8b7355';
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});

// Add dynamic atmosphere to game tags
document.querySelectorAll('.game-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
    });
});

// Battle cry effect when countdown ends
let battleCryShown = false;

// Enhanced countdown end behavior
const originalUpdate = updateCountdown;
updateCountdown = function() {
    originalUpdate();

    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0 && !battleCryShown) {
        battleCryShown = true;

        // Enhanced "battle ready" state
        const tagline = document.querySelector('.tagline');
        tagline.textContent = 'THE BATTLE BEGINS!';
        tagline.style.animation = 'battlePulse 0.5s ease-in-out infinite';
        tagline.style.borderColor = '#d4af37';
        tagline.style.color = '#f4e4c1';
        tagline.style.fontSize = '1.6rem';

        // Add dramatic effect to all countdown boxes
        document.querySelectorAll('.countdown-box').forEach(box => {
            box.style.borderColor = '#d4af37';
            box.style.animation = 'battlePulse 0.8s ease-in-out infinite';
        });
    }
};
