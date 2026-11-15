
let local_date = localStorage.getItem("card");
let data = JSON.parse(local_date);

let sekiller = [
    data.product_img,
    data.product_img2,
    data.product_img3,
    data.product_img4,
    data.product_img5,
    data.product_img6
].filter(Boolean);

let index = 0;

let esasSekil = document.querySelector(".sekil > img");
let kicikSekilDiv = document.querySelector(".sekill");

// Köhnə şəkilləri sil
kicikSekilDiv.innerHTML = "";

// Yeni saatın şəkillərini əlavə et
sekiller.forEach((src, i) => {
    let img = document.createElement("img");

    img.src = src;
    img.alt = data.model || "Saat şəkli";

    img.addEventListener("click", () => {
        index = i;
        sekilDeyis();
    });

    kicikSekilDiv.appendChild(img);
});

function sekilDeyis() {
    esasSekil.src = sekiller[index];

    document.querySelectorAll(".sekill img").forEach((sekil, i) => {
        sekil.style.border = i === index ? "2px solid #29ACFF" : "none";
    });
}

// İlk şəkil
if (sekiller.length > 0) {
    sekilDeyis();
}

// Sol ox
document.querySelector(".icon2 .fa-chevron-left").addEventListener("click", () => {
    if (sekiller.length === 0) return;

    index--;

    if (index < 0) {
        index = sekiller.length - 1;
    }

    sekilDeyis();
});

// Sağ ox
document.querySelector(".icon2 .fa-chevron-right").addEventListener("click", () => {
    if (sekiller.length === 0) return;

    index++;

    if (index >= sekiller.length) {
        index = 0;
    }

    sekilDeyis();
});

// Məhsul məlumatları
document.querySelector(".model").textContent = data.model || "";
document.querySelector(".seria").textContent = data.seria || "";
document.querySelector(".product-key").textContent = data.product_key || "";
document.querySelector(".product-key2").textContent = data.product_key_2 || "";
document.querySelector(".melumat").textContent = data.melumat || "";
