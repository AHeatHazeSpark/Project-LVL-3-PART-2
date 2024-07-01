document.addEventListener('DOMContentLoaded', () => {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Scroll to the corresponding section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
/** TODO: Add an active state **/

/** TODO: Add a comment form **/
