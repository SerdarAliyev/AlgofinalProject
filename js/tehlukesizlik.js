function videoAc() {
    document.querySelector(".video").classList.add("playing");

    document.querySelector("#youtubeVideo").src =
        "https://www.youtube.com/embed/pTpfZxo0XU4?autoplay=1&controls=0&rel=0";
}

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

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const click = item.querySelector(".click");
    const content = item.querySelector(".click-content");

    click.addEventListener("click", () => {
        click.classList.toggle("active");
        content.classList.toggle("active");
    });
});

