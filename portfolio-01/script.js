// TypeScript for form submission and simple interactivity
var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.getElementById('name').value;
    var emailInput = document.getElementById('email').value;
    var messageInput = document.getElementById('message').value;
    // Basic validation check
    if (nameInput && emailInput && messageInput) {
        alert("Thank you, ".concat(nameInput, ", for reaching out! We will respond to your message shortly."));
        contactForm.reset(); // Clear the form after submission
    }
    else {
        alert('Please fill in all fields before submitting the form.');
    }
});
