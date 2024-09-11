const openPopupButton = document.getElementById("openPopupButton");
const popupBox = document.getElementById("popupBox");
const closePopupButton = document.getElementById("closePopupButton");

openPopupButton.addEventListener("click", function() {
    popupBox.style.display = "flex";
});

closePopupButton.addEventListener("click", function() {
    popupBox.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === popupBox) {
        popupBox.style.display = "none";
    }
});

