// Define your navbar items
const navbarItems = [
  { text: 'Section1', url: '#section1' },
  { text: 'Section2', url: '#section2' },
  { text: 'Section3', url: '#section3' },
  { text: 'Section4', url: '#section4' },
  { text: 'Comment', url: '#comment'}
];

// Function to create navbar and append to existing ul
function createNavbar() {
  const ul = document.querySelector('ul');  // Select the existing ul

  navbarItems.forEach(item => {
      const li = document.createElement('li');  // Create a new <li> element
      const a = document.createElement('a');    // Create a new <a> element

      a.textContent = item.text;  // Set the text content of the link
      a.href = item.url;          // Set the href attribute of the link
      a.classList.add('menu__link'); //set the class name to the link
      li.appendChild(a);  // Append the <a> tag to <li>
      ul.appendChild(li); // Append the <li> to the existing <ul>
  });
}

// Call createNavbar function whenever needed, e.g., on page load
document.addEventListener('DOMContentLoaded', createNavbar);
document.addEventListener('DOMContentLoaded', () => {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Scroll to the  section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function checkVisibility() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Initial check
checkVisibility();

// Listen for scroll events
window.addEventListener('scroll', checkVisibility);

function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const comment = document.getElementById('commentInput').value.trim();
    
    let isValid = true;
    let errorMessage = '';

    // Name validation
    if (name === '') {
      errorMessage += 'Name is required.\n';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage += 'Please enter a valid email address.\n';
      isValid = false;
    }

    // Comment validation
    if (comment === '') {
      errorMessage += 'Comment is required.\n';
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      nameInput.value = '';
      emailInput.value = '';
      commentInput.value = '';
    } else {
      alert(errorMessage);
    }
  }