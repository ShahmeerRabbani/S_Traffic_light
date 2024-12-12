let traffic = document.querySelector(".traffic_box");
let light = document.querySelectorAll(".light");
let btn = document.getElementById("btn");

let currentIndex = 0;

btn.addEventListener("click", () => {
    light[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % light.length;
    light[currentIndex].classList.add('active');
})