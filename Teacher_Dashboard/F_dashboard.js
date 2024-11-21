// F_dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    // Show the Home section by default
    document.querySelector("#home-section").classList.add("active");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from all sections
            sections.forEach(section => section.classList.remove("active"));

            // Get the target section from the data attribute
            const targetSection = document.querySelector(`#${link.dataset.section}`);

            // Add active class to the target section
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});
