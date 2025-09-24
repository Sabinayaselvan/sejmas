// Handle form submit
document.getElementById("projectForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  // Collect values
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const domain = document.getElementById("domain").value;
  const reason = document.getElementById("reason").value;
  const description = document.getElementById("description").value;

  // WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = "91XXXXXXXXXX"; // 👈 replace with your number

  // Format message
  const message = `🚀 New Project Submission:%0A
  👤 Name: ${name}%0A
  📞 Contact: ${contact}%0A
  🌐 Domain: ${domain}%0A
  📝 Reason: ${reason}%0A
  📄 Description: ${description}`;

  // Open WhatsApp with pre-filled message (user presses Send manually)
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

  // Reset form after submission
  document.getElementById("projectForm").reset();
});

// Clear form manually
function clearForm() {
  document.getElementById("projectForm").reset();
}



// Clear form function
function clearForm() {
  document.getElementById("projectForm").reset();
  alert("Form cleared!");
}
