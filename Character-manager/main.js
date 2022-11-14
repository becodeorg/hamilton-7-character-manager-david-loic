import axios from "axios";
const url = "https://character-database.becode.xyz/characters";
const body = document.querySelector("body");
const search = document.querySelector("#search");
function displayListCharacter() {
  axios
      .get(url)
      .then( function (response) {
        for (let i = 0; i < response.data.length; i++) {
          api_details(response);
          function api_details(value) {
            const container = document.querySelector(".container");
            // create new card
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            newCard.classList.add("swiper-slide");
            container.appendChild(newCard);

            // Create new div to the content
            const cardDivContainer = document.createElement("div");
            cardDivContainer.classList.add("content");
            newCard.appendChild(cardDivContainer);

            // Create h2 to display the name of the character
            const characterName = document.createElement("h2");
            characterName.classList.add("title");
            cardDivContainer.appendChild(characterName);

            // Create new div to contain the display more information about the character
            const cardContent = document.createElement("div");
            cardContent.classList.add("sinopse");
            newCard.appendChild(cardContent);

            // Create new div to display more information about the character
            const cardContentDiv = document.createElement("div");
            cardContentDiv.classList.add("content-sinopse");
            cardContent.appendChild(cardContentDiv);

            // Create h2 to display the name of the character on the backside of the card
            const characterNameBack = document.createElement("h2");
            characterNameBack.classList.add("title");
            cardContentDiv.appendChild(characterNameBack);

            // Create a p to display the description of the character
            const characterDescription = document.createElement("p");
            characterDescription.classList.add("text");
            cardContentDiv.appendChild(characterDescription);

            // Create a link to the description of the card
            const cardLink = document.createElement("a");
            cardLink.innerHTML = `<a class="view" href="./viewCharacter.html?id=${value.data[i].id}">More infos</a>`
            cardContent.appendChild(cardLink);

            // Adding value to the cards
            characterName.innerHTML = value.data[i].name;
            characterNameBack.innerHTML = value.data[i].name;
            characterDescription.innerHTML = value.data[i].description;
            newCard.style.background= `url(${"data:image/*;base64," + value.data[i].image})no-repeat 50%/cover`;
            cardLink.dataset.id = value.data[i].id;
          }
        }
    })
}
displayListCharacter();

const cards = document.querySelectorAll('.card')
const cardLinks = document.querySelectorAll('a');

function getId() {
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('view')) {
      console.log("id:", e.target.parentElement.dataset.id);
      return e.target.parentElement.dataset.id
    }
  });
}

search.addEventListener('click', (e) => {
//Masquer la liste des characters
  for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
  }

  //Récupérer la valeur de l'input
  //const search = document.querySelector("#input").value;
})
