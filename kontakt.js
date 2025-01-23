// Venter til DOM er fullstendig lastet
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    // Legger til en event listener for skjemaet
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Hindrer standard form-oppførsel

        // Henter verdiene fra inputfeltene
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validerer at feltene er fylt ut
        if (name === "" || email === "" || message === "") {
            alert("Vennligst fyll ut alle feltene.");
            return;
        }

        // Viser en suksessmelding
        successMessage.style.display = "block";

        // Tømmer skjemaet
        contactForm.reset();

        // Skjuler suksessmelding etter 5 sekunder
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 5000);
    });
});












