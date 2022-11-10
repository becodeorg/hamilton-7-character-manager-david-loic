const url = "https://character-database.becode.xyz/characters";

let urlPage = window.location.href;
const myUrlArray = urlPage.split('=');
let characterId = myUrlArray[1];

fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        if (characterId === element.id) {
          document.getElementById("edit").addEventListener('click', async () => {
            window.location.href = `editCharacter.html?${characterId}`
          });
          document.querySelector(".solo__img").src = `data:image/png;base64, ${element.image}`;
          document.querySelector('.solo__h2').innerText = element.name;
          document.querySelector('.solo__span').innerText = element.shortDescription;
          document.querySelector('.solo__p').innerHTML = element.description;
        }
      });
      document.getElementById("delete").addEventListener("click", () => {
        if (confirm('Are you sure ?')) {
          fetch(`https://character-database.becode.xyz/characters/${characterId}`, {
            method: 'DELETE',
          });
          alert("Delete")
          window.location.href = "index.html"
        }
      });
    })
