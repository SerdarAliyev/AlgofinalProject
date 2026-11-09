const parol_ = document.querySelector(".parol")
const goz = document.querySelector(".goz")

goz.addEventListener("click", () => {
    if (parol_.type === "password") {
        parol_.type = "text"
        goz.innerHTML = '<i class="fas fa-eye-slash"></i>'
    } else {
        parol_.type = "password"
        goz.innerHTML = '<i class="fas fa-eye"></i>'
    }
})