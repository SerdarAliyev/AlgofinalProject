let local_date = localStorage.getItem("card")
let data = JSON.parse(local_date)
let sekiller = document.querySelectorAll(".sekill img")

sekiller.forEach((sekil, index) => {
    sekil.src = data[`product_img${index + 1}`];
});

document.querySelector(".sekil > img").src = data.product_img
document.querySelector(".model").textContent = data.model || ""
document.querySelector(".seria").textContent = data.seria || ""
document.querySelector(".product-key").textContent = data.product_key || ""
document.querySelector(".product-key2").textContent = data.product_key_2 || ""
document.querySelector(".melumat").textContent = data.melumat || ""
