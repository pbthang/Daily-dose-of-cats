const renderCatFact = (fact) => {
  document.querySelector(".cat-fact").innerHTML = fact;
};

const renderCatImg = (link) => {
  document.querySelector(".cat-img").src = link;
};

const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.className = "show";
}

function hideSpinner() {
  spinner.className = spinner.className.replace("show", "");
}

const fetchContent = () => {
  document.querySelector("audio").play();
  renderCatImg("#");
  showSpinner();
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((res) => {
      hideSpinner();
      renderCatImg(res[0].url);
    });
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((res) => renderCatFact(res.fact));
};

document.querySelector(".fetch").addEventListener("click", fetchContent);
