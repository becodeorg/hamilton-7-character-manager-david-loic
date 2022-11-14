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

image.onchange = () => {
  const [file] = image.files
  if (file) {
   imageNew.src = URL.createObjectURL(file)
  }
}
document.querySelector('#submit').addEventListener("click", (event) => {
  event.preventDefault();
  let shortDescription = document.querySelector("#short");
  let name = document.querySelector("#name");
  let description = document.querySelector("textarea");
  name = name.value;
  shortDescription = shortDescription.value;
  description = description.value;

  if(name.length == 0 || shortDescription.length == 0 || description.length == 0 || image.length == 0) {
    alert('Please fill everything')
  } else {
    const dataToAdd = fetch('https://character-database.becode.xyz/characters/', {
      method: "POST",
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
    alert('Character added !')
    window.location.href = "index.html"
  }
});