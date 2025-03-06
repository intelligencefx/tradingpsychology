document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".download-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const fileName = this.getAttribute("data-file");
            window.location.href = fileName; 
        });
    });
});