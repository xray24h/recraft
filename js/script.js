// ReCraft - script.js

// discount popup (only on the home page)
var popup = document.getElementById("popup");

if (popup) {
    popup.classList.add("show");

    document.getElementById("close-popup").addEventListener("click", function () {
        popup.classList.remove("show");
    });

    var discounts = [5, 10, 15];
    var gifts = document.querySelectorAll(".gift");
    var picked = false;

    for (var i = 0; i < gifts.length; i++) {
        gifts[i].addEventListener("click", function () {
            if (picked == true) {
                return;
            }
            var number = Math.floor(Math.random() * discounts.length);
            this.textContent = discounts[number] + "% OFF";
            picked = true;
        });
    }
}

// on phones the products menu opens on click
var productsLink = document.getElementById("products-link");

productsLink.addEventListener("click", function (event) {
    if (window.innerWidth <= 700) {
        event.preventDefault();
        productsLink.parentElement.classList.toggle("open");
    }
});
