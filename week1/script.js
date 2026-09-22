const cat = document.querySelector("#cat");

const snack = document.querySelector("#snack");
const pet = document.querySelector("#pet");
const annoy = document.querySelector("#annoy");

snack.addEventListener("click", function() {
    cat.textContent = "😻";
});

pet.addEventListener("click", function() {
    cat.textContent = "😸";
});

annoy.addEventListener("click", function() {
    cat.textContent = "😾";
});