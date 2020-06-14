window.addEventListener("DOMContentLoaded", function () {
  //mina globala variabler
  const wrapper = document.getElementById("game-wrapper");
  let counter = 0;
  let score = 0;
  let createdNum = null;
  let chestOpen = false;
  const chestContainer = document.getElementById("chests");

  // image array med 3 bilder
  const images = [
    "images/chest-closed.png",
    "images/chest-jewel.png",
    "images/chest-open.png",
  ];

  // chests array

  const chestArrayObject = [
    {
      id: 0,
      name: "first",
      value: 1,
      diamond: false,
      image: images[0],
    },
    {
      id: 1,
      name: "second",
      value: 2,
      diamond: false,
      image: images[1],
    },
    {
      id: 2,
      name: "third",
      value: 3,
      diamond: false,
      image: images[2],
    },
  ];
  //console.log(images);
  console.log(chestArrayObject);

  /*
   * Function that initiates the whole Game application.
   */
  function init() {
    randomFunction();
    initGameUI();
  }

  function randomFunction() {
    createdNum = Math.floor(Math.random() * 3 + 1);
  }

  function initGameUI() {
    initChests();
    initScoreBoard();
    initRefreshButton();
  }

  function initChests() {
    chestOpen = false;
    chestArrayObject.forEach((chest) => {
      const chestImage = document.createElement("img");
      chestImage.src = images[0]
      chestImage.style.width = "200px";
      chestImage.style.height = "150px";
      chestImage.style.margin = "20px";
      chestImage.setAttribute("id", chest.value);
      chestContainer.appendChild(chestImage);
      chestImage.addEventListener("click", chestClicked);
    });
  }

  function initScoreBoard() {
    let scoreBoard = document.createElement("section");
    scoreBoard.id = "scoreId";
    wrapper.appendChild(scoreBoard);
    let scoreText = document.createElement("p");
    scoreText.id = "result";
    scoreText.style.color = "#fff";
    scoreText.style.textAlign = "center";
    scoreBoard.appendChild(scoreText);
    scoreText.innerText = score;
  }

  function changeScore(newS) {
    score += newS;
    document.getElementById("result").innerText = score;
  }

  function initRefreshButton() {
    const refreshBtn = document.getElementById("refresh-button");
    refreshBtn.addEventListener("click", refresh);
  }

  function chestClicked(e) {
    if (chestOpen === false) {
      chestOpen = true;
      if (e.target.id === createdNum) {
        e.target.diamond = true;
        e.target.src = "images/chest-jewel.png";
        changeScore(5);
      } else {
        e.target.src = "images/chest-open.png";
      }
    }
  }

  function refresh() {
    cleanChests();
    initChests();
    randomFunction();
    counter++;
    console.log(counter);
  }

  function getImageFromPexels() {
    // make a request towards pexels API and get 1 Diamond image
  }

  function cleanChests() {
    chestArrayObject.forEach((chest) => {
      chestContainer.removeChild(document.getElementById(chest.value));
    });
  }
  window.onload = init;
});
