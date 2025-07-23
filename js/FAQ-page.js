const acc = document.querySelectorAll(".accordion");
acc.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        item.parentElement.classList.toggle("active")

        pannel = item.nextElementSibling;

        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        } else {
            pannel.style.display = "block";
        }
    })
})