function getCharacter() {
  axios
      .get("https://character-database.becode.xyz/characters")
      .then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
          api_details(response);
          function api_details(value) {
            const container = document.querySelector(".container");
            // create new card
            const newCard = document.createElement("div");
            newCard.classList.add("card");
            container.appendChild(newCard);

            // Create new div to the content
            const cardDivContainer = document.createElement("div");
            cardDivContainer.classList.add("content");
            newCard.appendChild(cardDivContainer);

            //Create an image to display the character
            //const image = document.createElement("img");
            //image.classList.add("img");
            //newCard.appendChild(image);

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
            cardLink.innerHTML = `<a class="view" href="#">More infos</a>`
            //cardLink.innerHTML = `<a class="view" href="editCharacter=${id}.html">More informations</a>` // TODO GET ID
            cardContent.appendChild(cardLink);

            // Create button edit card
            const buttonEdit = document.createElement("button");
            const textButtonEdit = document.createTextNode("Edit the card");
            buttonEdit.classList.add("btn-edit")
            buttonEdit.appendChild(textButtonEdit);
            cardContent.appendChild(buttonEdit);

            // Create button delete card
            const buttonDelete = document.createElement("button");
            const textButtonDelete = document.createTextNode("Delete the card");
            buttonEdit.classList.add("btn-delete");
            buttonEdit.appendChild(textButtonDelete);
            cardContent.appendChild(buttonDelete);

            // Adding value to the cards
            characterName.innerHTML = value.data[i].name;
            characterNameBack.innerHTML = value.data[i].name;
            characterDescription.innerHTML = value.data[i].description;
            //image.src = "data:image/*;base64," + value.data[i].image;
            newCard.style.background= `url(${"data:image/*;base64," + value.data[i].image})no-repeat 50%/cover`;
            cardLink.dataset.id = value.data[i].id;
          }
        }
    })
}
getCharacter();


// Add the id of the selected card to the url
function idUrl(){
  let x = document.activeElement.id;
  console.log(x);
  //location.href = "editCharacter.html?page=" + x; // TODO: change this
}
const cards = document.querySelectorAll('.card')
const cardLinks = document.querySelectorAll('a');

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('view')) {
    console.log("id:", e.target.parentElement.dataset.id);
  }
});

