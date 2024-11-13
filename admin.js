document.querySelectorAll(".item-card .close-button").forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".item-card").style.display = "none";
    }); 
});

