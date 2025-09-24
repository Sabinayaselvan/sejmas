
document.getElementById("servicesForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const serviceType = document.querySelector("input[name='serviceType']:checked");
  const description = document.getElementById("description").value;

  if (!serviceType) {
    alert("Please select a service type.");
    return;
  }

  // Your WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = "91XXXXXXXXXX";  // 👈 replace with your number

  // Format message for WhatsApp
  const message = `🛠 Services Form Submission:%0A
  Name: ${name}%0A
  Phone: ${phone}%0A
  Service Type: ${serviceType.value}%0A
  Description: ${description}`;

  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

  // Reset form after submission
  document.getElementById("servicesForm").reset();
});

