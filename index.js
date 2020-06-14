window.addEventListener("DOMContentLoaded", function () {
  //mina globala variabler
  const wrapper = document.getElementById("game-wrapper");
  let counter = 0;
  let score = 0;
  let createdNum = null;
  let chest = false;
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
      name: "first",
      value: 1,
      diamond: false,
      image: "images/chest-closed.png",
    },
    {
      name: "second",
      value: 1,
      diamond: false,
      image: "images/chest-jewel.png",
    },
    { name: "third", value: 1,
     diamond: false,
     image: "images/chest-open.png" },
  ];
  console.log(images);
  console.log(chestArrayObject);

  /*
   * Function that initiates the whole Game application.
   */
  function init() {
    randomFunction();
    initGameUI();
  }

  function initGameUI() {
    // Call functions that creates the Game UI

    initChests();
    initScoreBoard();
    initRefreshButton();
  }

  function randomFunction() {
    createdNum = Math.floor(Math.random() * 3 + 1);
  }

  function initChests() {
    chest = false;
    chestArrayObject.forEach(function (chest) {
      const chestImage = document.createElement("img");
      chestImage.src = chest.image;
      chestImage.style.width = "200px";
      chestImage.style.height = "150px";
      chestImage.style.margin = "20px";
      chestImage.setAttribute("id", chest.value);
      chestContainer.appendChild(chestImage);
      chestImage.addEventListener("click", chestClicked);
    });
  }

  function initScoreBoard() {
    var scoreBoard = document.createElement("section");
    scoreBoard.id = "scoreId";
    wrapper.appendChild(scoreBoard);
    let scoreText = document.createElement("p");
    scoreText.id = "result";
    scoreText.style.color = "#fff";
    scoreText.style.textAlign = "center";
    scoreBoard.appendChild(scoreText);
    scoreText.innerText = `Score: ${score}`;
  }

  function changeScore(newS) {
    score += newS;
    document.getElementById("result").innerText = `Score: ${score}`;
  }

  function initRefreshButton() {
    const refreshBtn = document.getElementById("refresh-button");
    refreshBtn.addEventListener("click", refresh);
  }

  function chestClicked(e) {
    if (chest === false) {
      chest = true;
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
    chestArrayObject.forEach((removeChest) => {
      chestContainer.removeChild(document.getElementById(removeChest.value));
    });
  }
  window.onload = init;
});
