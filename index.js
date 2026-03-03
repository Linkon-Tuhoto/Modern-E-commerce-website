 const navLinks = document.querySelectorAll(".nav a");
    const menuToggle = document.getElementById("menu-toggle");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.checked = false;
        });
    });