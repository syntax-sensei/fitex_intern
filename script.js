// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector('textarea').value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission (you can replace this with an actual request if needed)
        alert('Message sent successfully!');
        form.reset(); // Reset the form fields
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const projectDetailsOverlay = document.getElementById('projectDetails');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsContent = document.getElementById('detailsContent');
    const closeBtn = document.getElementById('closeBtn');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const details = card.getAttribute('data-details');
            const title = card.querySelector('h3').innerText;

            detailsTitle.innerText = title;
            detailsContent.innerText = details;

            projectDetailsOverlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        projectDetailsOverlay.style.display = 'none';
    });
});

