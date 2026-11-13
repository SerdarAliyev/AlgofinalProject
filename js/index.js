const banner = document.querySelector(".banner")
const markalar = document.querySelector(".markalar")
const satis = document.querySelector(".satis")
const watclar = document.querySelector(".watclar")
const rolex = document.querySelector(".rolex")
const adamlarr = document.querySelector(".adamlarr")

try {
    fetch("../data/banner.json")
        .then(response => response.json())
        .then((ban) => {
            banner.innerHTML = `
                <img src="${ban.foto}" alt="Saat">
                <div class="banner_info">
                    <h4>${ban.badge}</h4>
                    <h1>${ban.title}</h1>
                    <button>${ban.button_text}</button>
                </div>
            `;
        });
} catch (error) {
    console.error("Banner xətası:", error);
}


try {
    fetch("../data/markalar.json")
        .then(response => response.json())
        .then((mark) => {
            markalar.innerHTML = `
                <div class="marka">
                    ${mark.map((item) => `
                        <a href="${item.link}">${item.name}</a>
                    `).join("")}
                    <button>Display all</button>
                </div>
            `;
        });
} catch (error) {
    console.error("Markalar xətası:", error);
}


try {
    fetch("../data/satislar.json")
        .then(response => response.json())
        .then((data) => {
            satis.innerHTML = data.map((item) => `
                <div class="${item.class}">
                    <img src="${item.img}" alt="Saat">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
            `).join("");
        });
} catch (error) {
    console.error("Satışlar xətası:", error);
}


try {
    fetch("../data/saatlar.json")
        .then(response => response.json())
        .then((data) => {
            watclar.innerHTML = data.map((item) => `
                <div class="watch">
                    <img src="${item.foto}">
                    <p>${item.soz}</p>
                </div>
            `).join("");
        });
} catch (error) {
    console.error("Saatlar xətası:", error);
}


try {
    fetch("../data/popular.json")
        .then(response => response.json())
        .then((popular) => {
            console.log(popular);

            popular.forEach((saatm) => {
                rolex.innerHTML += `
                    <div class="popularcard">
                        <img src="${saatm.foto}">
                        <p>${saatm.soz}</p>
                        <h4>${saatm.sozz}</h4>
                    </div>
                `;
            });
        });
} catch (error) {
    console.error("Popular xətası:", error);
}


try {
    fetch("../data/watclar.json")
        .then(response => response.json())
        .then((data) => {
            adamlarr.innerHTML = data.map((item) => `
                <div class="adamcard">
                    <img src="${item.foto}">
                </div>
            `).join("");
        });
} catch (error) {
    console.error("Watclar xətası:", error);
}



let buy = document.querySelector(".buy");
let bolmee = document.querySelector(".bolmee");
let navbar = document.querySelector(".navbar");

let watch = document.querySelector(".watch");
let metnler = document.querySelector(".metnler");

buy.addEventListener("click", function (e) {
    e.stopPropagation();

    metnler.classList.remove("active");

    bolmee.style.top = navbar.getBoundingClientRect().bottom + "px";
    bolmee.classList.toggle("active");
});

watch.addEventListener("click", function (e) {
    e.stopPropagation();

    bolmee.classList.remove("active");

    metnler.style.top = navbar.getBoundingClientRect().bottom + "px";
    metnler.classList.toggle("active");
});

bolmee.addEventListener("click", function (e) {
    e.stopPropagation();
});

metnler.addEventListener("click", function (e) {
    e.stopPropagation();
});

document.addEventListener("click", function () {
    bolmee.classList.remove("active");
    metnler.classList.remove("active");
});

window.addEventListener("resize", function () {
    let top = navbar.getBoundingClientRect().bottom + "px";

    bolmee.style.top = top;
    metnler.style.top = top;
});
