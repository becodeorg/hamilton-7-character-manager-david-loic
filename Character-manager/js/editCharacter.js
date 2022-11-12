const url = "https://character-database.becode.xyz/characters";
let urlPage = window.location.href;
const myUrlArray = urlPage.split('=');
let characterId = myUrlArray[1];

// add the value to the character to be edited
fetch(`https://character-database.becode.xyz/characters/${characterId}`)
    .then(response => response.json())
    .then(data => {
      image = data.image
      document.querySelector('#image').src = `data:image/*;base64,${data.image}`;
      document.querySelector('input#name').value = data.name;
      document.querySelector('input#short').value = data.shortDescription;
      document.querySelector('textarea#description').value = data.description;
    })

// modify the image to match the api
document.querySelector("#image").addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  // The loadend event is fired when a request has completed, whether successfully or not.
  reader.onloadend = () => {
    // Used to change the way the file is loaded
    image = reader.result.replace('data:', '').replace(/^.+,/, '');
  };
  reader.readAsDataURL(file)
});



document.querySelector('#submit').addEventListener("click", async (event) => {
  event.preventDefault();
  let shortDescription = document.querySelector("#short");
  let name = document.querySelector("#name");
  let description = document.querySelector("textarea");
  name = name.value;
  shortDescription = shortDescription.value;
  description = description.value;

  if(name.length == 0 || shortDescription.length == 0 || description.length == 0){
    alert('Something is empty')
  } else {

    const dataToUpdate = fetch(`https://character-database.becode.xyz/characters/${characterId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
        name: name,
        shortDescription: shortDescription,
        description: description,
      }),
    });
    alert('You have edited a character !')
    window.location.href = "index.html"
  }
});