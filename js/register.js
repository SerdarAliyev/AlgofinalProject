
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

    if (!emailValue || !parolValue || !email.checkValidity()) {
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let yoxla = users.find(user => user.email === emailValue);

    if (yoxla) {
        return;
    }

    let user = {
        email: emailValue,
        parol: parolValue
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("activeUser", JSON.stringify(user));

    window.location.href = "profil.html";

});
