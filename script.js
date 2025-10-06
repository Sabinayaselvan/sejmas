document.addEventListener("DOMContentLoaded", () => {
  // ================= PIE CHART =================
  const ctx = document.getElementById("pieChart").getContext("2d");
  const tabLabels = ["Projects", "Reports", "Journal", "Cards", "Services", ];

  const pieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: tabLabels,
      datasets: [{
        data: [20, 20, 20, 20, 20],
        backgroundColor: ["#F7D3C1", "#DFAFC1", "#C58DBF", "#9F7EBE", "#7568A6"],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;
          const selectedLabel = pieChart.data.labels[index];
          const sectionId = selectedLabel.toLowerCase().replace(/\s+/g, "-");

          // Hide all tab contents
          document.querySelectorAll(".tab-content").forEach(div => div.classList.remove("active"));

          // Show the clicked section
          const section = document.getElementById(sectionId);
          if (section) section.classList.add("active");

          // Update info text
          document.getElementById("tab-content").innerHTML = `📂 Welcome to the <b>${selectedLabel}</b> Page!`;
        }
      }
    }
  });

  // ================= TAB BUTTONS =================
  const buttonMapping = {
    projects: "projectform.html",
    journal: "journalform.html",
    reports: "reportform.html",
    cards: "cardform.html",
    services: "serviceform.html",
    business: "businessform.html"
  };

  for (const sectionId in buttonMapping) {
    const btn = document.querySelector(`#${sectionId} .make-btn`);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = buttonMapping[sectionId];
      });
    }
  }

  // ================= PROJECT FILTER =================
  const domainFilter = document.getElementById("domainFilter");
  if (domainFilter) {
    domainFilter.addEventListener("change", function() {
      const selected = this.value;
      document.querySelectorAll(".project-card").forEach(card => {
        card.style.display = (selected === "all" || card.dataset.domain === selected) ? "block" : "none";
      });
    });
  }

  // ================= JOURNAL EXTRA BUTTONS =================
  document.querySelectorAll("#journal .btn-sample").forEach(btn => {
    btn.addEventListener("click", () => alert("Sample work preview coming soon!"));
  });
  document.querySelectorAll("#journal .btn-plag").forEach(btn => {
    btn.addEventListener("click", () => alert("Plag report will be shared on request."));
  });

  // ================= SOCIAL ICONS =================
  document.querySelectorAll(".social-icons a").forEach(icon => {
    icon.addEventListener("click", e => {
      e.preventDefault();
      alert("This would redirect to: " + icon.href);
    });
  });
});
