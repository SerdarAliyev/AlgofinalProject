const email = document.querySelector(".input input");
const parol = document.querySelector(".parol");
const btn = document.querySelector(".btnn button");
const xeta = document.querySelector(".parol-xeta");

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

    xeta.textContent = "";

    if (!emailValue || !parolValue) {
        return;
    }

    if (parolValue.length < 7) {
        xeta.textContent = "Parolunuz düzgün deyil!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let yoxla = users.find(user =>
        user.email === emailValue &&
        user.parol === parolValue
    );

    if (!yoxla) {
        xeta.textContent = "Email və ya parolunuz düzgün deyil!";
        return;
    }

    localStorage.setItem("activeUser", JSON.stringify(yoxla));

    window.location.href = "index.html";

});