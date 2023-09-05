document.querySelector(".ham-menu").addEventListener("click", function () {
    this.classList.toggle("open");
    document.querySelector(".toggle-text").classList.toggle("hidden");
});