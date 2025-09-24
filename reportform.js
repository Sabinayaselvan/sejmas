
document.getElementById("reportForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const reportType = document.querySelector("input[name='reportType']:checked");
  const description = document.getElementById("description").value;

  if (!reportType) {
    alert("Please select a report type.");
    return;
  }

  // Your WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = "91XXXXXXXXXX";  // 👈 replace with your number

  // Format message for WhatsApp
  const message = `📑 Report Form Submission:%0A
  Name: ${name}%0A
  Phone: ${phone}%0A
  Report Type: ${reportType.value}%0A
  Description: ${description}`;

  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

  // Reset form after submission
  document.getElementById("reportForm").reset();
});

