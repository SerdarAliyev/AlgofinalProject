
function profilYoxla() {
    const activeUser = localStorage.getItem("activeUser");

    const qeydiyyat = document.querySelector("#qeydiyyat");
    const profilHisse = document.querySelector("#profilHisse");

    if (qeydiyyat) {
        qeydiyyat.style.display = activeUser ? "none" : "flex";
    }

    if (profilHisse) {
        profilHisse.style.display = activeUser ? "flex" : "none";
    }
}

profilYoxla();

document.addEventListener("click", (e) => {
    const profil = e.target.closest(".profil_icon");
    const user = document.querySelector("#profilHisse .user");

    if (profil && user) {
        user.classList.toggle("active");
        return;
    }

    if (e.target.closest("#logout")) {
        localStorage.removeItem("activeUser");
        window.location.reload();
        return;
    }

    if (user && !e.target.closest(".user")) {
        user.classList.remove("active");
    }
});
profilYoxla();

window.addEventListener("pageshow", function () {
    profilYoxla();
});