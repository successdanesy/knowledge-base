document.addEventListener("DOMContentLoaded", function () {
    // Toggle Sidebar
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".close-btn");

    function toggleSidebar() {
        sidebar.classList.toggle("open");

        // Hide menu button when sidebar is open
        if (sidebar.classList.contains("open")) {
            menuBtn.style.display = "none"; // Hide menu button
        } else {
            menuBtn.style.display = "block"; // Show menu button
        }
    }

    menuBtn.addEventListener("click", toggleSidebar);
    closeBtn.addEventListener("click", toggleSidebar);

    // Collapsible Sections
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
