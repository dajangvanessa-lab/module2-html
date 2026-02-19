console.log("js/script.js");

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});


const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

toggleSkills.addEventListener("click", function() {
    skillsSection.classList.toggle("hidden");
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
    // Prevent the form from actually submitting/reloading the page
    event.preventDefault();

    // Get the values from the input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Basic Form Validation
    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
    }
});