// Define your navbar items
const navbarItems = [
  { text: 'Section 1', url: '#section1' },
  { text: 'Section 2', url: '#section2' },
  { text: 'Section 3', url: '#section3' },
  { text: 'Section 4', url: '#section4' },
  { text: 'Comment Section', url: '#commentSection'}
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

            // Scroll to the section with an offset
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = 100; // Adjust this value as needed

            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});

function checkVisibility() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isVisible = (
          rect.top < window.innerHeight && rect.bottom > 0
      );
      
      if (isVisible) {
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

// Listen for resize events to handle viewport changes
window.addEventListener('resize', checkVisibility);

function validateForm(event) {
  event.preventDefault(); // Prevent form submission
  
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const commentInput = document.getElementById('commentInput');
  const commentSection = document.getElementById('commentSection');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();
  
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
    
    // Create a new div for the comment
    const commentBox = document.createElement('div');
    commentBox.style.border = '1px solid #ccc';
    commentBox.style.padding = '10px';
    commentBox.style.margin = '10px 0';
    commentBox.style.borderRadius = '5px';
    commentBox.style.backgroundColor = '#f9f9f9';

    // Add content to the comment box
    commentBox.innerHTML = `<strong>Name:</strong> ${name}<br>  
                            <strong>Email:</strong> ${email}<br>
                            <strong>Comment:</strong> ${comment}`;

    // Append the comment box to the comment section
    commentSection.appendChild(commentBox);

    // Clear form fields
    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';
  } else {
    alert(errorMessage);
  }
}
