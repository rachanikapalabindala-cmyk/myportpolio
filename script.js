const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {


// Add or remove dark-mode class
document.body.classList.toggle("dark-mode");

// Change button text
if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️ Light Mode";
} else {
    darkModeBtn.textContent = "🌙 Dark Mode";
}


});