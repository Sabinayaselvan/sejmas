
document.getElementById("cardForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent refresh

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const cardType = document.querySelector("input[name='cardType']:checked");
  const description = document.getElementById("description").value;

  if (!cardType) {
    alert("Please select a card type.");
    return;
  }

  // WhatsApp Number (with country code, no +, no spaces)
  const whatsappNumber = "916382536495";  // 👈 Replace with your number

  // Message formatting
  const message = `💳 New Card Form Submission:%0A
  Name: ${name}%0A
  Phone: ${phone}%0A
  Card Type: ${cardType.value}%0A
  Description: ${description}`;

  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

  // Optional: Reset the form
  document.getElementById("cardForm").reset();
});

