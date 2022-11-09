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
            cardLink.classList.add("view");
            cardContent.appendChild(cardLink);

            // Create button edit card
            const buttonEdit = document.createElement("button");
            const textButtonEdit = document.createTextNode("Edit the card");
            buttonEdit.classList.add("btn-edit", `data-modal-toggle=`); /////// TODO change the toggle
            buttonEdit.appendChild(textButtonEdit);
            cardContent.appendChild(buttonEdit);

            // Create button delete card
            const buttonDelete = document.createElement("button");
            const textButtonDelete = document.createTextNode("Delete the card");
            buttonEdit.classList.add("btn-delete"); /////// TODO change the toggle
            buttonEdit.appendChild(textButtonDelete);
            cardContent.appendChild(buttonDelete);

            // Adding value to the cards
            characterName.innerHTML = value.data[i].name;
            characterNameBack.innerHTML = value.data[i].name;
            characterDescription.innerHTML = value.data[i].description;
            cardDivContainer.src = "data:image/*;base64," + value.data[i].image;
            newCard.dataset.id = value.data[i].id;
          }
        }
    })
}

getCharacter();