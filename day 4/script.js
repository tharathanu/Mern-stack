// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message in console
    console.log("Welcome to Sivabarathi's Bootstrap Portfolio 🚀");


    // ===============================
    // 1. Smooth Scroll for Navbar
    // ===============================
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });


    // ===============================
    // 2. Contact Form Validation
    // ===============================
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;

        if (name === "" || email === "") {
            alert("Please fill all fields!");
        } else {
            alert("Thank you " + name + "! Your form has been submitted successfully 🎉");
            form.reset();
        }
    });


    // ===============================
    // 3. Dark Mode Toggle Button
    // ===============================
    const darkBtn = document.createElement("button");
    darkBtn.innerText = "Toggle Dark Mode";
    darkBtn.className = "btn btn-secondary position-fixed bottom-0 end-0 m-4";

    document.body.appendChild(darkBtn);

    darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
    });


    // ===============================
    // 4. Scroll Animation Effect
    // ===============================
    window.addEventListener("scroll", function () {
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                card.classList.add("shadow-lg");
            }
        });
    });

});
