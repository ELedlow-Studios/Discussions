document.addEventListener('DOMContentLoaded', function() {
    // Vanilla JS because no.
    const elements = document.querySelectorAll('nav ul li a');

    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transition = 'color 0.3s';
            element.style.color = '#4CAF50';
        });

        element.addEventListener('mouseout', () => {
            element.style.transition = 'color 0.3s';
            element.style.color = '#fff';
        });
    });
});
