// Button alert
document.querySelector('.order-btn').addEventListener('click', () => {
  alert("🚀 Thanks for choosing Sejmas Innovations! We'll get in touch soon.");
});
// Example: Alert when clicking social icons
document.querySelectorAll(".social-icons a").forEach(icon => {
  icon.addEventListener("click", function (e) {
    e.preventDefault();
    alert("This would redirect to: " + this.href);
  });
});
