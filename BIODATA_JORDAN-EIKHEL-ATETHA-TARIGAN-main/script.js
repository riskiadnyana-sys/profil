const translations = {
    id: {
        "header-subtitle": "Mahasiswa Ilmu Komputer",
        "about-title": "Tentang Saya",
        "lang-text": "English",
        "footer-text": "Tugas Teknologi Web",
        "greeting": "Halo, saya Riski"
    },
    en: {
        "header-subtitle": "Computer Science Student",
        "about-title": "About Me",
        "lang-text": "Indonesia",
        "footer-text": "Web Technology Assignment",
        "greeting": "Hello, I'm Riski"
    }
};

let currentLang = "id";

document.getElementById("tombol-terjemahan").onclick = () => {
    currentLang = currentLang === "id" ? "en" : "id";
    document.querySelectorAll("[data-key]").forEach(el => {
        el.innerText = translations[currentLang][el.dataset.key];
    });
};

document.getElementById("tombol-salam").onclick = () => {
    alert(translations[currentLang].greeting);
};

document.getElementById("tombol-tema").onclick = () => {
    document.body.classList.toggle("dark-theme");
};
