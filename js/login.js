
const email = document.querySelector(".input input");
const parol = document.querySelector(".parol");
const btn = document.querySelector(".btnn button");

email.value = "";
parol.value = "";

window.addEventListener("pageshow", () => {
    email.value = "";
    parol.value = "";
});

btn.addEventListener("click", (e) => {

    e.preventDefault();

    let emailValue = email.value.trim();
    let parolValue = parol.value;

    if (!emailValue || !parolValue) {
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let yoxla = users.find(user =>
        user.email === emailValue &&
        user.parol === parolValue
    );

    if (!yoxla) {
        return;
    }

    localStorage.setItem("activeUser", JSON.stringify(yoxla));

    window.location.href = "profil.html";

});
