// Custom Cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Scroll Progress
window.addEventListener('scroll', () => {
    const progress = document.querySelector('.scroll-progress');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressWidth = (window.pageYOffset / totalHeight) * 100;
    progress.style.width = progressWidth + '%';
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.cert-card, .skill-card').forEach((el) => {
    observer.observe(el);
});
