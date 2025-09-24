// Action on button click
document.querySelector('.apply-btn').addEventListener('click', () => {
  alert("🚀 Application submitted! We’ll contact you shortly.");
});


// Example: Alert when clicking social icons
document.querySelectorAll(".social-icons a").forEach(icon => {
  icon.addEventListener("click", function (e) {
    e.preventDefault();
    alert("This would redirect to: " + this.href);
  });
});
