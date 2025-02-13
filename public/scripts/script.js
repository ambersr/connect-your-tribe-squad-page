// Knoppen worden wit zodra er op de knop geklikt wordt
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".filter-link");
    const activeGenre = localStorage.getItem("activeGenre");

    links.forEach(link => {
        const genre = link.getAttribute("href").split("/genre/")[1];

        // Markeer de actieve link bij het laden
        if (genre === activeGenre) link.classList.add("active");

        // Voeg click-event toe
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Update actieve class
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Opslaan en navigeren
            localStorage.setItem("activeGenre", genre);
            window.location.href = `/genre/${genre}`;
        });
    });
});
