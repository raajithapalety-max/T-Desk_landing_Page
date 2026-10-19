// Open and close the menu on small screens
        const menuButton = document.getElementById("menuButton");
        const navLinks = document.getElementById("navLinks");

        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("open");

            if (navLinks.classList.contains("open")) {
                menuButton.textContent = "✕";
                menuButton.setAttribute("aria-expanded", "true");
            } else {
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            }
        });

        // Close the menu after clicking a link
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            });
        });

        // Show a message when the demo form is submitted
        const demoForm = document.getElementById("demoForm");
        const formMessage = document.getElementById("formMessage");

        demoForm.addEventListener("submit", function (event) {
            event.preventDefault();

            formMessage.textContent =
                "Thanks! This demo form is only a front-end sample and is not connected to email yet.";

            demoForm.reset();
        });