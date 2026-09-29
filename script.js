/* =========================
   PASSWORD
========================= */

const passwordScreen = document.getElementById("passwordScreen");
const website = document.getElementById("website");

const passwordInput = document.getElementById("passwordInput");
const enterButton = document.getElementById("enterButton");
const passwordError = document.getElementById("passwordError");

const correctPassword = "111111";


function checkPassword() {

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {

        passwordScreen.classList.add("hide");

        setTimeout(() => {

            website.classList.add("show");

        }, 400);

    } else {

        passwordError.style.display = "block";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


enterButton.addEventListener("click", checkPassword);


passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        checkPassword();

    }

});


/* =========================
   NAVIGATION
========================= */

function goToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   MUSIC
========================= */

const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");

const backgroundMusic =
    document.getElementById("backgroundMusic");

let musicPlaying = false;


musicButton.addEventListener("click", function() {

    if (!musicPlaying) {

        backgroundMusic.play()
            .then(() => {

                musicPlaying = true;

                musicButton.classList.add("playing");

                musicIcon.textContent = "♫";
                musicText.textContent = "Playing";

            })
            .catch(() => {

                alert("Music tidak dapat diputar. Pastikan file music.mp3 ada di folder music.");

            });

    } else {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.classList.remove("playing");

        musicIcon.textContent = "♪";
        musicText.textContent = "Music";

    }

});


/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");


galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightboxImage.src = image.src;

        lightbox.classList.add("show");

    });

});


closeLightbox.addEventListener("click", function() {

    lightbox.classList.remove("show");

});


lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("show");

    }

});


/* =========================
   BIRTHDAY CLOCK
========================= */

function updateBirthdayClock() {

    const birthdayDate =
        new Date("2026-10-03T00:00:00");

    const now =
        new Date();

    let difference =
        birthdayDate - now;


    if (difference < 0) {

        difference = 0;

    }


    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateBirthdayClock();

setInterval(updateBirthdayClock, 1000);


/* =========================
   SURPRISE
========================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const surpriseMessage =
    document.getElementById("surpriseMessage");


surpriseButton.addEventListener("click", function() {

    surpriseMessage.classList.toggle("show");


    if (surpriseMessage.classList.contains("show")) {

        surpriseButton.innerHTML =
            'Close Surprise <span>↑</span>';

    } else {

        surpriseButton.innerHTML =
            'Open Surprise <span>→</span>';

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".moment-card, .letter-content, .gallery-item, .birthday-content, .final-content"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});


/* =========================
   IMAGE LOAD CHECK
========================= */

const allImages =
    document.querySelectorAll("img");


allImages.forEach(function(image) {

    image.addEventListener("error", function() {

        console.warn(
            "Gambar tidak ditemukan:",
            image.src
        );

    });

});