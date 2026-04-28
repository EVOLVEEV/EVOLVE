document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Simple Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal, .card, .stat-item');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if(elTop < triggerBottom) {
                el.classList.add('active');
                // For cards we use a staggered fade in effect
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Initial check and scroll listener
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 3. Form Handling
    const form = document.getElementById('fitness-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.innerText = "Sent Successfully!";
        btn.style.background = "#28a745";
        form.reset();
    });
});