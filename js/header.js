let activeUser = JSON.parse(localStorage.getItem("activeUser"));

const profilIcon = document.querySelector(".profil_icon");

if (profilIcon) {

    profilIcon.style.cursor = "pointer";

    profilIcon.addEventListener("click", () => {

        if (activeUser) {
            window.location.href = "profil.html";
        } else {
            window.location.href = "giris.html";
        }

    });

}