
document.getElementById("journalForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  // Collect form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const template = document.querySelector("input[name='template']:checked");
  const description = document.getElementById("description").value;

  if (!template) {
    alert("Please select a template option.");
    return;
  }

  // Your WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = "916382536495";  // 👈 replace with your number

  // Format message for WhatsApp
  const message = `📔 Journal Form Submission:%0A
  Name: ${name}%0A
  Phone: ${phone}%0A
  Template: ${template.value}%0A
  Description: ${description}`;

  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

  // Reset form after submission
  document.getElementById("journalForm").reset();
});

