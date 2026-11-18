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

    if (!emailValue || !parolValue || !email.checkValidity()) {
        return;
    }

    if (parolValue.length < 7) {
        xeta.textContent = "Parol minimum 7 simvol olmalıdır!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let yoxla = users.find(user => user.email === emailValue);

    if (yoxla) {
        xeta.textContent = "Bu email artıq qeydiyyatdan keçib!";
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