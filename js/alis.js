function girisiYoxla() {
    const aktivUser = localStorage.getItem("activeUser");

    if (!aktivUser) {
        window.location.replace("index.html");
        return false;
    }

    return true;
}

if (girisiYoxla()) {
    let saat = JSON.parse(localStorage.getItem("alis_saat"));

    if (saat) {
        let kart = document.querySelector(".saat_haqqinda");

        kart.querySelector("img").src = saat.product_img;
        kart.querySelectorAll("h4")[0].textContent = saat.model;
    }
}

window.addEventListener("pageshow", function () {
    girisiYoxla();
});
