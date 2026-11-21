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
                    <a href="etrafli.html">
    <button>${ban.button_text}</button>
</a>
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


fetch("../data/saatlar.json")
    .then(response => response.json())
    .then((data) => {
        watclar.innerHTML = data.map((item) => `
    <div class="watch">
      <a href="${item.link}">
        <img 
            src="${item.foto}" 
            style="cursor: pointer;"
        >
        <p>${item.soz}</p>
        </a>
    </div>
`).join("");
    })
    .catch(error => console.log(error));

try {
    fetch("../data/popular.json")
        .then(response => response.json())
        .then((popular) => {
            console.log(popular);

            popular.forEach((saatm) => {
                rolex.innerHTML += `
             <div class="popularcard">
    <a href="${saatm.link}">
        <img src="${saatm.foto}">
        <p>${saatm.soz}</p>
        <h4>${saatm.sozz}</h4>
    </a>
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

                    <div class="hovertext">
                        ${item.ad || ""}
                    </div>
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

const axtaris = document.querySelector(".header_search input");
const netice = document.querySelector(".axtaris_netice");

let markaData = [];

fetch("../data/markalar.json")
    .then(response => response.json())
    .then(data => {
        markaData = data;
    });

axtaris.addEventListener("input", () => {

    let soz = axtaris.value.toLowerCase().trim();

    netice.innerHTML = "";

    if (soz === "") return;

    let tapilan = markaData.filter(marka =>
        marka.name.toLowerCase().includes(soz)
    );

    tapilan.forEach(marka => {

        netice.innerHTML += `
            <div class="axtaris_card">
                ${marka.name}
            </div>
        `;

    });

    document.querySelectorAll(".axtaris_card").forEach((card, index) => {

        card.addEventListener("click", () => {
            window.location.href = tapilan[index].link;
        });

    });

});

// Enter düyməsi ilə axtarış
axtaris.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        let soz = axtaris.value.toLowerCase().trim();

        if (soz === "") return;

        let marka = markaData.find(item =>
            item.name.toLowerCase().includes(soz)
        );

        if (marka) {
            window.location.href = marka.link;
        }

    }

});


const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = Number(counter.dataset.target);
            const duration = 3000;
            let startTime = null;

            function animate(time) {
                if (!startTime) startTime = time;

                let progress = Math.min((time - startTime) / duration, 1);

                counter.textContent = Math.floor(progress * target).toLocaleString("en-US");

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }

            requestAnimationFrame(animate);
            observer.unobserve(counter);
        }
    });
});

counters.forEach(counter => observer.observe(counter));


