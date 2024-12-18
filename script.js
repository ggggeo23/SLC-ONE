// Toggle the navigation menu visibility
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Add or remove 'active' class on navbar and menu toggle when clicked
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Toggle the appearance of the menu icon
});

// Close the menu if clicked outside the navbar or menu toggle
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        navbar.classList.remove('active');
        menuToggle.classList.remove('active'); // Reset the menu icon
    }
});

// Smooth scroll for anchor links in the navbar
const anchorLinks = navbar.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight, // Account for the navbar height during scroll
            behavior: 'smooth', // Smooth scroll effect
        });

        // Close the navbar menu after clicking a link (for mobile)
        navbar.classList.remove('active');
        menuToggle.classList.remove('active'); // Reset menu toggle icon
    });
});

// Highlight the active link based on the scroll position
const sections = document.querySelectorAll('section');
const links = navbar.querySelectorAll('a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id'); // Find the currently active section
        }
    });

    links.forEach((link) => {
        link.classList.remove('active'); // Remove 'active' class from all links
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active'); // Add 'active' class to the current section's link
        }
    });
});

// Close the navbar if it's open when the window is resized (useful for mobile)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // Only close the navbar on screens larger than 768px
        navbar.classList.remove('active');
        menuToggle.classList.remove('active'); // Reset menu toggle icon
    }
});

// Hover effect for the menu toggle icon (feedback when hovering)
menuToggle.addEventListener('mouseenter', () => {
    menuToggle.style.opacity = 0.7; // Slightly fade the icon in on hover
});
menuToggle.addEventListener('mouseleave', () => {
    menuToggle.style.opacity = 1; // Reset the opacity after hover
});