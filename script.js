// Get elements
const aboutTab = document.getElementById("about-tab");
const projectsTab = document.getElementById("projects-tab");
const aboutContent = document.getElementById("about");
const projectsContent = document.getElementById("projects");

// Add event listeners for tab switching
aboutTab.addEventListener("click", function () {
    aboutContent.classList.add("active");
    projectsContent.classList.remove("active");
});

projectsTab.addEventListener("click", function () {
    projectsContent.classList.add("active");
    aboutContent.classList.remove("active");
});
