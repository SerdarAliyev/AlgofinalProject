const sekiller = document.querySelector(".sekiller")
let sekil = [
    {
        img: "https://s.c24.media/images/default/illustrations/dream-watch.svg",
        soz: "Top 10 Watches"
    },
    {
        img: "https://s.c24.media/images/default/illustrations/trend.svg",
        soz: "Watch Market"
    },
    {
        img: "https://s.c24.media/images/default/illustrations/publish-listing.svg",
        soz: "Watch Guides"
    },
    {
        img: "https://s.c24.media/images/default/illustrations/watch-check.svg",
        soz: "Watch Technology"
    },
    {
        img: "https://s.c24.media/images/default/illustrations/watch.svg",
        soz: "Rolex"
    },
]
sekil.forEach((sekill) => {
    sekiller.innerHTML+=`
    <div class="secimlerr">
    <img class="" src="${sekill.img}">
         <p>${sekill.soz}</p>
        </div>
    `
})