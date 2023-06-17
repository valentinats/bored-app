const btnRandom = document.querySelector(".side__button");
const message = document.querySelector(".random__idea");

btnRandom.addEventListener("click", getRandom);

function getRandom() {
  fetch("https://www.boredapi.com/api/activity/")
    .then((data) => data.json())
    .then((response) => {
      message.innerText = response.activity;
    });
}