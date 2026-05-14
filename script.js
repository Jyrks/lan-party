// Event date — October 10, 2026 at 12:00 in Europe/Tallinn.
// Tallinn is UTC+3 (EEST) on Oct 10, before DST ends (last Sunday of October).
const TARGET = new Date('2026-10-10T12:00:00+03:00');

function pad(n) {
    return String(n).padStart(2, '0');
}

function getRemaining() {
    const diff = TARGET - Date.now();
    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
    }
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor(diff / 3600000) % 24,
        minutes: Math.floor(diff / 60000) % 60,
        seconds: Math.floor(diff / 1000) % 60,
        ended: false
    };
}

function render() {
    const t = getRemaining();
    document.querySelector('.t8-root').classList.toggle('is-ended', t.ended);
    ['days', 'hours', 'minutes', 'seconds'].forEach(function (key) {
        document.querySelectorAll('[data-field="' + key + '"]').forEach(function (el) {
            el.textContent = pad(t[key]);
        });
    });
}

render();
setInterval(render, 1000);
