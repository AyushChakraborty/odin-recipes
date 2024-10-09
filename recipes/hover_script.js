var nordic = document.querySelector("#nordic");
var div = document.querySelector("#id6");

div.addEventListener("mouseenter", (event) => {
        nordic.style.opacity = 1;
})

div.addEventListener("mouseleave", (event) => {
    nordic.style.opacity = 0;
})