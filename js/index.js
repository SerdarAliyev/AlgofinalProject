const sekil = document.querySelector(".sekil")
const markalar = document.querySelector(".markalar")
const satis = document.querySelector(".satis")
const watclar = document.querySelector(".watclar")
const rolex = document.querySelector(".rolex")
const adamlarr = document.querySelector(".adamlarr")
sekil.innerHTML = `
<img src="https://images.openai.com/static-rsc-4/rwjQH60RWZwy8jOIHk5iIpJ1jLKirZAFAxQzS5W-yQCMsN4gFqDx5o_puRL0xQszs_-oBUqenwUX_TB4QqZsKNyZpVahmVrk3nG1Vped67kj2gfDLX2uOlKE3lKXXXRVv6DSYSylGCbPTDZNTHvWA_Uz5QaNQa6Uof1N1i9p3cH3iO01mJ7kLlmd0v5lmOvn?purpose=fullsize" alt="Saat">
<div class="melumat">
<h4>Soon Available Exclusively on Chrono24</h4>
<h1>Hanhart 417 ES x 0260 & BAIT – inspired by Harvey Mushman</h1>
<button>Learn more</button>
</div>
`

markalar.innerHTML = `
<div class ="marka">
<a href="saat2.html">Rolex</a>
<p>Patek Philippe</p>
<p>Breitling</p>
<p>Cartier</p>
<p>IWC</p>
<p>Omega</p>
<p>Audemars Piguet</p>
<p>Tudor</p>
<p>Panerai</p>
<p>Seiko</p>
<button>Display all</button>
</div>
`

satis.innerHTML = `
<div class = "satis1">
<img src="https://s.c24.media/images/default/illustrations/buyer-rating.svg" alt="Saat">
<h3>4.7 out of 5 stars</h3>
<p>from 206,000 reviews worldwide</p>
</div>
<div class = "satis2">
<img src="https://s.c24.media/images/default/illustrations/love-my-watch.svg" alt="Saat">
<h3>9 Million</h3>
<p>watch enthusiasts use Chrono24 each month</p>
</div>
<div class = "satis3">
<img src="https://s.c24.media/images/default/illustrations/handshake.svg" alt="Saat">
<h3>Over 340,000</h3>
<p>customers choose Buyer Protection annually</p>
</div>
<div class = "satis4">
<img src="https://s.c24.media/images/default/illustrations/dealer.svg" alt="Saat">
<h3>More Than 25,000</h3>
<p>trustworthy sellers</p>
</div>
`

let watchh = [
    {
        foto:"https://cdn4.chrono24.com/images/heroes/62-op9uc8z9zh50cc303zlhyl5l-Original.jpg?auto=compress&fit=crop&q=90&w=339&h=210&crop=focalpoint&fp-x=0.0&fp-y=0.0&fp-z=2.5&dpr=1.5",
        soz:"Men's Watches"
    },
    {
        foto:"https://cdn4.chrono24.com/images/heroes/64-z7214pak12tsq53r021wcgq3-Original.jpg?auto=compress&fit=crop&q=90&w=339&h=210&crop=focalpoint&fp-x=0.0&fp-y=0.0&fp-z=2.5&dpr=1.5",
        soz:"Pre-Owned Watches"
    },
    {
        foto:"https://cdn4.chrono24.com/images/heroes/44-cx58ijnzqnx6bmoutxvgzpvc-Original.jpg?auto=compress&fit=crop&q=90&w=339&h=210&crop=focalpoint&fp-x=0.0&fp-y=0.0&fp-z=2.5&dpr=1.5",
        soz:"Pocket Watches"
    },
    {
        foto:"https://cdn4.chrono24.com/images/heroes/46-79m0ep1ayts8l0ny9oyis94w-Original.jpg?auto=compress&fit=crop&q=90&w=339&h=210&crop=focalpoint&fp-x=0.0&fp-y=0.0&fp-z=2.5&dpr=1.5",
        soz:"Women's Watches"
    },
      {
        foto:"https://cdn4.chrono24.com/images/heroes/38-c67mnrnbyxjzw8ctbeg3zyey-Original.jpg?auto=compress&fit=crop&q=90&w=339&h=210&crop=focalpoint&fp-x=0.0&fp-y=0.0&fp-z=2.5&dpr=1.5",
        soz:"Automatic Watches"
    },
      {
        foto:"https://cdn4.chrono24.com/images/heroes/83-qp2w1tge5tfyrj143840xkdo-Original.jpg?auto=compress&fit=crop&q=90&w=339&h=210&crop=focalpoint&fp-x=0.0&fp-y=0.0&fp-z=2.5&dpr=1.5",
        soz:"Skeleton Watches"
    },
      {
        foto:"https://cdn4.chrono24.com/images/heroes/16-cthhlttt0m2wm1wwapd6xuc4-Original.jpg?auto=compress&fit=crop&q=90&w=339&h=210&crop=focalpoint&fp-x=0.0&fp-y=0.0&fp-z=2.5&dpr=1.5",
        soz:"Gold Watches"
    },
      {
        foto:"https://cdn4.chrono24.com/images/heroes/96-ixtrt9mxdqpvd2rt1t0m1hyc-Original.jpg?auto=compress&fit=crop&q=90&w=339&h=210&crop=focalpoint&fp-x=0.0&fp-y=0.0&fp-z=2.5&dpr=1.5",
        soz:"Moon Phase Watches"
    },
]
watchh.forEach((item)=>{
    watclar.innerHTML +=`
    <div class="watchcard">
          <img src="${item.foto}">
            <h3>${item.soz}</h3>
        </div>
        
    `
})


let popular = [
    {
        foto:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/45-w36w6el32cnbsnxr0smetc2y-Main_2x.png",
        soz:"Rolex",
        sozz:"Datejust"
    },
    {
        foto:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/1-w70x429knb132x17edf24c63-Main_2x.png",
        soz:"Rolex",
        sozz:"Submariner"
    },
    {
        foto:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/2-y181jdh67kx2lripaucfting-Main_2x.png",
        soz:"Rolex",
        sozz:"Daytona"
    },
    {
        foto:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/74-984eorvfjxmx240c0i4zlfhx-Main_2x.png",
        soz:"Omega",
        sozz:"Speedmaster"
    },
      {
        foto:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/116-ie7ukr10yfqk1jhqf18dl7ky-Main_2x.png",
        soz:"Audemars Piguet",
        sozz:"Royal Oak"
    },
      {
        foto:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/47-v5b06z1h6pcvqe8xu0e9h2pg-Main_2x.png",
        soz:"Rolex",
        sozz:"Day-Date"
    },
      {
        foto:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/4-s3n4vjwfzcimyvyeizqpl6cv-Main_2x.png",
        soz:"Rolex",
        sozz:"GMT-Master II"
    },
      {
        foto:"https://cdn2.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65/images/topmodels/106-8soyprb5zryt8moy5l06rmpu-Main_2x.png",
        soz:"Patek Philippe",
        sozz:"Nautilus"
    },
]
popular.forEach((saatm)=>{
    rolex.innerHTML+=`
      <div class="popularcard">
          <img src="${saatm.foto}">
            <p>${saatm.soz}</p>
            <h4>${saatm.sozz}</h4>
        </div>
    `
})

let adam = [
    {
        foto:"https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
        foto:"https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
        foto:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
    {
        foto:"https://plus.unsplash.com/premium_photo-1728759435328-9a5a417edef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
      {
        foto:"https://images.unsplash.com/photo-1772638904164-eed7c6b1e57e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
      {
        foto:"https://images.unsplash.com/photo-1774744287122-4a0c96786dbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
      {
        foto:"https://images.unsplash.com/photo-1766595898967-22c61e0be796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
      {
        foto:"https://images.unsplash.com/photo-1703505841379-2f863b201212?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    },
]
adam.forEach((adamm)=>{
    adamlarr.innerHTML+=`
         <div class="adamcard">
          <img src="${adamm.foto}">
        </div>
    `
})