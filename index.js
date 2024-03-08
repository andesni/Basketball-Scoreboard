let homePointEl = document.getElementById("homeScore");
let guestPointEl = document.getElementById("guestScore");

let homeAdd1Btn = document.getElementById("home-btn-add1");
let homeAdd2Btn = document.getElementById("home-btn-add2");
let homeAdd3Btn = document.getElementById("home-btn-add3");
let homeClearBtn = document.getElementById("home-btn-Clear");

let guestAdd1Btn = document.getElementById("guest-btn-add1");
let guestAdd2Btn = document.getElementById("guest-btn-add2");
let guestAdd3Btn = document.getElementById("guest-btn-add3");
let guestClearBtn = document.getElementById("guest-btn-Clear");

homeAdd1Btn.addEventListener("click", function () {
    homePointEl.textContent = Number(homePointEl.textContent) + 1;
})

homeAdd2Btn.addEventListener("click", function () {
    homePointEl.textContent = Number(homePointEl.textContent) + 2;
})

homeAdd3Btn.addEventListener("click", function () {
    homePointEl.textContent = Number(homePointEl.textContent) + 3;
})

homeClearBtn.addEventListener("click", function () {
    homePointEl.textContent = 0;
})

guestAdd1Btn.addEventListener("click", function () {
    guestPointEl.textContent = Number(guestPointEl.textContent) + 1;
})

guestAdd2Btn.addEventListener("click", function () {
    guestPointEl.textContent = Number(guestPointEl.textContent) + 2;
})

guestAdd3Btn.addEventListener("click", function () {
    guestPointEl.textContent = Number(guestPointEl.textContent) + 3;
})

guestClearBtn.addEventListener("click", function () {
    guestPointEl.textContent = 0;
})

