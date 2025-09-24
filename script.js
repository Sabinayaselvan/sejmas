// Tab switching logic
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active state
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Activate clicked tab
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// project tab
// Filter projects by domain
document.getElementById("domainFilter").addEventListener("change", function() {
  const selected = this.value;
  const projects = document.querySelectorAll(".project-card");

  projects.forEach(card => {
    if (selected === "all" || card.dataset.domain === selected) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Floating Button Action
document.querySelector(".order-btn").addEventListener("click", function() {
  // Redirect to projectform.html
  window.location.href = "projectform.html";
});



// Handle Journal Tab Buttons
document.querySelectorAll("#journal .btn-sample").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Sample work preview coming soon!");
  });
});

document.querySelectorAll("#journal .btn-plag").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Plag report will be shared on request.");
  });
});

// Floating button action
document.querySelector(".journal-order-btn").addEventListener("click", () => {
   window.location.href = "journalform.html";
});

//report tab
// "Make it Happen" button functionality
document.querySelector('.report-order-btn').addEventListener('click', () => {
  window.location.href = "reportform.html";
});


//card tab 
// "Make it Happen" button functionality
document.querySelector('.card-order-btn').addEventListener('click', () => {
  window.location.href = "cardform.html";
});

// "Make it Happen" button functionality
document.querySelector('.service-order-btn').addEventListener('click', () => {
   window.location.href = "serviceform.html";
});

// Example: Alert when clicking social icons
document.querySelectorAll(".social-icons a").forEach(icon => {
  icon.addEventListener("click", function (e) {
    e.preventDefault();
    alert("This would redirect to: " + this.href);
  });
});
