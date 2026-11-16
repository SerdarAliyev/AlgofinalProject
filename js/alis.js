let saat = JSON.parse(localStorage.getItem("alis_saat"));

if (saat) {
    let kart = document.querySelector(".saat_haqqinda");

    kart.querySelector("img").src = saat.product_img;
    kart.querySelectorAll("h4")[0].textContent = saat.model;
}