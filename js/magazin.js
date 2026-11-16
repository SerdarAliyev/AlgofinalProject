const sekiller = document.querySelector(".sekiller")
fetch("../data/sekiller.json")
    .then(res => res.json())
    .then(data => {
        data.forEach((sekill) => {
            sekiller.innerHTML += `
                <div class="secimlerr">
                    <img src="${sekill.img}">
                    <p>${sekill.soz}</p>
                </div>
            `;
        });
    });