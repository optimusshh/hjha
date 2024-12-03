// Update the year in the footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add fade-in effect on page load
window.addEventListener('load', () => {
    document.body.style.opacity = 0;
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
        opacity += 0.02;
        document.body.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        }
    }, 30);

    // Trigger animation for the name "Himanshu Jha"
    const nameElement = document.getElementById('animated-name');
    nameElement.style.animation = "glow 1.5s infinite alternate ease-in-out, slide-in 2s ease-in-out";
});

// Add smooth slide-in animation for sections when they are in view
const slideInSections = document.querySelectorAll('section');

const slideInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

slideInSections.forEach(section => {
    slideInObserver.observe(section);
});
