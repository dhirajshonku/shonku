// Your custom JavaScript code here

// Example: Add a click event listener to the "Learn More" button
document.getElementById("learn-more-btn").addEventListener("click", function() {
    alert("Learn more about SHONKU!");
});

// Your custom JavaScript code here

// Example: Add a click event listener to the "Learn More" button
document.getElementById("learn-more-btn").addEventListener("click", function() {
    alert("Small and solopreneur businesses often lack the resources to customer services, lead generation, customer insights, order tracking, booking reservation, student update, student communication. Due to not being able to online 24X7 or technical expertise to build and manage their own chatbots. Our service provides a user-friendly, cost-effective way for them to add the benefits of conversational AI to their operations.");
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Retrieve form data
      const formData = new FormData(this);
      const email = formData.get('email');
      const name = formData.get('name');
      const message = formData.get('message');

      // Send email
      Email.send({
        SecureToken: "YOUR_SECURE_TOKEN", // Replace with your SMTPJS Secure Token
        To: 'dhirajftcsolar@gmail.com',
        From: email,
        Subject: 'Contact Form Submission',
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
      }).then(response => {
        if (response === 'OK') {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message. Please try again.');
        }
      }).catch(error => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
      });
    });
