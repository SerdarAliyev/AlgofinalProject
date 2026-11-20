const saatlar = document.querySelector(".saatlar")
const secimm = document.querySelector(".secimm")
const rolexler = document.querySelector(".rolexler")
const promotedd = document.querySelector(".promotedd")
const ikinci = document.querySelector(".ikinci")
const watchh = document.querySelector(".watchh")
const satm = document.querySelector(".satm")
const deta = document.querySelector(".deta")
const saathlar = document.querySelector(".saathlar")
const data = document.querySelector(".data")
const sozlerrr = document.querySelector(".sozlerrr")
const wotlar = document.querySelector(".wotlar")
const son = document.querySelector(".son")

fetch("../data/fotobret.json")
    .then(res => res.json())
    .then(data => {
        data.forEach((rolex) => {
            saatlar.innerHTML += `
                <div class="watchcard">
                    <img src="${rolex.foto}">
                    <p>${rolex.soz1}</p>
                    <h4>${rolex.soz2}</h4>
                    <p>${rolex.soz3}</p>
                </div>
            `;
        });
    })
    .catch(error => console.log("Saat xətası:", error));


fetch("../data/secim.json")
    .then(res => res.json())
    .then(data => {
        data.forEach((item) => {
            secimm.innerHTML += `
                <div class="secimlerr">
                <option>${item.soz}</option>
                </div>
            `;
        });
    })
    .catch(error => console.log("Seçim xətası:", error));

secimm.innerHTML = `
    <div class="filter">
        <p>Filter(1)</p>
    </div>
`;



fetch("../data/bret.json")
    .then(res => res.json())
    .then(data => {
        send_Data(data, rolexler);
    })
    .catch(error => console.log("Rolex xətası:", error));


fetch("../data/prombret.json")
    .then(res => res.json())
    .then(data => {
        send_Data(data, promotedd);
    })
    .catch(error => console.log("Prom xətası:", error));



fetch("../data/ikibret.json")
    .then(res => res.json())
    .then(data => {
        send_Data(data, ikinci);
    })
    .catch(error => console.log("İki xətası:", error));

fetch("../data/watchbret.json")
    .then(res => res.json())
    .then(data => {
        send_Data(data, watchh);
    })
    .catch(error => console.log("Watchd xətası:", error));

fetch("../data/satbret.json")
    .then(res => res.json())
    .then(data => {
        send_Data(data, satm);
    })
    .catch(error => console.log("Sat xətası:", error));

fetch("../data/sattbret.json")
    .then(res => res.json())
    .then(data => {
        send_Data(data, deta);
    })
    .catch(error => console.log("Satt xətası:", error));

fetch("../data/saattbret.json")
    .then(res => res.json())
    .then(data => {
        send_Data(data, saathlar);
    })
    .catch(error => console.log("Saatt xətası:", error));


fetch("../data/saatttbret.json")
    .then(res => res.json())
    .then(jsonData => {
        send_Data(jsonData, data);
    })
    .catch(error => console.log("Saattt xətası:", error));

fetch("../data/sozlerbret.json")
    .then(res => res.json())
    .then(jsonData => {
        send_Data(jsonData, sozlerrr);
    })
    .catch(error => console.log("Sozler xətası:", error));

fetch("../data/wotclarbret.json")
    .then(res => res.json())
    .then(jsonData => {
        send_Data(jsonData, wotlar);
    })
    .catch(error => console.log("Wotclar xətası:", error));

fetch("../data/sonsastbret.json")
    .then(res => res.json())
    .then(jsonData => {
        send_Data(jsonData, son, "sonuncu");
    })
    .catch(error => console.log("Sonsat xətası:", error));

fetch("../data/sonsast.json")
    .then(res => res.json())
    .then(jsonData => {
        send_Data(jsonData, sonsast, "sonuncu");
    })
    .catch(error => console.log("Sonsast xətası:", error));



function send_Data(data, send_div, klass = "") {
    data.forEach((card) => {

        let rolex = document.createElement("div");

        rolex.className = `rolexdi ${klass || ""} ${

            card.product_key === "Next" ? "nextcard" : ""
        } ${
            card.model === "Worry-Free Watch Purchases" ? "buyer-card" : ""
        } ${card.sozd ? "news-card" : ""}`;

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
            ${card.product_img ? `
                <img class="saatsekli" src="${card.product_img}">
            ` : ""}

            ${card.sozd ? `
                <h4>${card.sozd}</h4>
                <p>${card.sozd2 || ""}</p>
                <button>${card.btn || ""}</button>
            ` : card.product_key === "Next" ? `
                <h4>${card.product_key}</h4>
                <p>${card.product_key_2 || ""}</p>
            ` : `
                <h4>${card.model || ""}</h4>
                <p>${card.seria || ""}</p>
                <h4>${card.product_key || ""}</h4>
                <p>${card.product_key_2 || ""}</p>

                ${card.model !== "Worry-Free Watch Purchases" ? `
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
                ` : ""}
            `}
        `;

        let sekil = rolex.querySelector(".saatsekli");
        let sag = rolex.querySelector(".sag");
        let sol = rolex.querySelector(".sol");

        let index = 0;

        if (sag && sol && sekil) {

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
        }

        rolex.addEventListener("click", () => {

            if (card.product_key === "Next") return;
            if (card.model === "Worry-Free Watch Purchases") return;
            if (card.sozd === "Always informed.") return;

            localStorage.setItem("card", JSON.stringify(card));
            window.location.href = "detal.html";
        });

        send_div.appendChild(rolex);
    });
}

const params = new URLSearchParams(window.location.search);
const soz = params.get("search"); 