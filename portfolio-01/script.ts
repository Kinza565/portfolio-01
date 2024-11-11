// TypeScript for form submission and simple interactivity
const ContactForm = document.getElementById('contact-form') as HTMLFormElement;

ContactForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    const nameInput = (document.getElementById('name') as HTMLInputElement).value;
    const emailInput = (document.getElementById('email') as HTMLInputElement).value;
    const messageInput = (document.getElementById('message') as HTMLTextAreaElement).value;

    // Basic validation check
    if (nameInput && emailInput && messageInput) {
        alert(`Thank you, ${nameInput}, for reaching out! We will respond to your message shortly.`);
    ContactForm.reset(); // Clear the form after submission
    } else {
        alert('Please fill in all fields before submitting the form.');
    }
});
