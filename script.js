// FAANG++ FILTER SYSTEM

const buttons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // active state
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projects.forEach(project => {
      const categories = project.getAttribute("data-category");

      if (filter === "all" || categories.includes(filter)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });

  });
});

// Animación scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("opacity-0", "translate-y-10", "transition", "duration-700");
  observer.observe(sec);
});

// Validación simple formulario
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensaje enviado correctamente 🚀");
});

