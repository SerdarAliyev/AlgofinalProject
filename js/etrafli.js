const watclar = document.querySelector(".watclar")
let saatlar = [
    {
        "product_img": "https://img.chrono24.com/images/uhren/49679686-o4g9npmpg3mv2baarz7ytvgl-Square360.jpg",
        "product_img2": "https://img.chrono24.com/images/uhren/49679686-2uda31aocuwlbsjdsew804iv-Square420.jpg",
        "product_img3": "https://img.chrono24.com/images/uhren/49679686-fvbkvz2brbtoucnpo3jhryjf-Square420.jpg",
        "product_img4": "https://img.chrono24.com/images/uhren/49679686-qvolni253v9gsnv3kzmjj5k9-Square420.jpg",
        "model": "Maen Manhattan",
        "seria": "37 ULTRA-THIN - MBE.001 Boutique Exclu",
        "melumat": "Used (Good) | Year of production 1975 | No original box | No original papers",
        "product_key": "RM7,377",
        "product_key_2": "+ RM410 for shipping"
    },
    {
        "product_img": "https://img.chrono24.com/images/uhren/49049704-aw6qrt268c7tz9gv4yrz0r4g-Square360.jpg",
        "product_img2": "https://img.chrono24.com/images/uhren/49049704-irwgu4f2jahivzwyer5s07ac-Square420.jpg",
        "product_img3": "https://img.chrono24.com/images/uhren/49049704-f05lojtskbl1myf3qwdleqcb-Square420.jpg",
        "model": "Maen Manhattan",
        "seria": "37 ULTRA THIN - GOLDEN SWAN",
        "melumat": "Used (Good) | Year of production 1975 | No original box | No original papers",
        "product_key": "RM7,834",
        "product_key_2": "+ RM410 for shipping"
    },
    {
        "product_img": "https://img.chrono24.com/images/uhren/49819714-r5xbzs29rkj2jfn00f8wok6y-Square360.jpg",
        "product_img2": "https://img.chrono24.com/images/uhren/49819714-zlwo0uatxfvwt14hzd6xl2iy-Square420.jpg",
        "product_img3": "https://img.chrono24.com/images/uhren/49819714-u9km23x5oosibks19zf2wvo7-Square420.jpg",
        "model": "Maen Manhattan",
        "seria": "40 - M3.1.2 - La Joux-Perret G100",
        "melumat": "Used (Good) | Year of production 1975 | No original box | No original papers",
        "product_key": "RM4,606",
        "product_key_2": "+ RM410 for shipping"
    },
    {
        "product_img": "https://img.chrono24.com/images/uhren/48251311-iorg4e4ybikf7w4mx3h4m1ef-Square360.jpg",
        "model": "Maen Hudson",
        "seria": "38 MK5 - M1.1.8",
        "melumat": "Used (Good) | Year of production 1975 | No original box | No original papers",
        "product_key": "RM4,145",
        "product_key_2": "+ RM410 for shipping"
    }
]


function send_Data(data, send_div, klass = "") {
    data.forEach((card) => {

        let rolex = document.createElement("div");

        rolex.className = `rolexdi ${klass || ""}`;

        let sekiller = [
            card.product_img,
            card.product_img1,
            card.product_img2,
            card.product_img3,
            card.product_img4,
            card.product_img5,
            card.product_img6
        ].filter(Boolean);

        rolex.innerHTML = `
            <img class="saatsekli" src="${card.product_img}">

            <h4 class="model">${card.model || ""}</h4>
            <p>${card.seria || ""}</p>
            <h4>${card.product_key || ""}</h4>
            <p>${card.product_key_2 || ""}</p>

            <div class="sozler">
                <h4>Popular</h4>
                <i class="far fa-heart"></i>
            </div>

            <div class="sag_sol">
                <div class="sag">
                    <i class="fas fa-chevron-left"></i>
                </div>

                <div class="sol">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        `;

        let sekil = rolex.querySelector(".saatsekli");
        let sag = rolex.querySelector(".sag");
        let sol = rolex.querySelector(".sol");

        let index = 0;

        sag.addEventListener("click", (e) => {
            e.stopPropagation();

            index--;

            if (index < 0) {
                index = sekiller.length - 1;
            }

            sekil.src = sekiller[index];
        });

        sol.addEventListener("click", (e) => {
            e.stopPropagation();

            index++;

            if (index >= sekiller.length) {
                index = 0;
            }

            sekil.src = sekiller[index];
        });

        rolex.addEventListener("click", () => {
            localStorage.setItem("card", JSON.stringify(card));
            window.location.href = "detal.html";
        });

        send_div.appendChild(rolex);
    });
}

send_Data(saatlar, watclar);
