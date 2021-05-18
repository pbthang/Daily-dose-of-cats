const renderCatFact = (fact) => {
  document.querySelector(".cat-fact").innerHTML = fact;
};

const renderCatImg = (link) => {
  document.querySelector(".cat-img").src = link;
};

const fetchContent = () => {
  fetch("https://thatcopy.pw/catapi/rest/")
    .then((res) => res.json())
    .then((res) => {
      renderCatImg(res.url);
    })
    .then((res) =>
      fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((res) => renderCatFact(res.fact))
    );
};

document.querySelector(".fetch").addEventListener("click", fetchContent);
