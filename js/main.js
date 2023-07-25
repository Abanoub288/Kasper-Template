let landingPage = document.querySelector(".Landing");

let imgArray = ["shuffle-05.jpg", "shuffle-03.jpg", "shuffle-04.jpg", "shuffle-06.jpg"];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgArray.length);

  landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNumber] + '")';

}, 5000);

// *************************************************************************************************
let shuffle = document.querySelectorAll(".shuffle li");
let imgs = Array.from(document.querySelectorAll(".imgs-container .box"));

shuffle.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mangeImgs);
});
// Remove And Add Active
function removeActive() {
  shuffle.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function mangeImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.work).forEach((el) => {
    el.style.display = "block";
  });
}

// *********************************************************************

let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");

let numbers = document.querySelectorAll(".box .number");
let statsSection = document.querySelector(".stats");
let start = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach ((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop) {
    if (!start) {
      numbers.forEach((number) => startCount(number));
    }
    start = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


