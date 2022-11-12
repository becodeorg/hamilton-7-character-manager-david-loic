const search = document.querySelector("#search");
const cards = document.querySelectorAll(".card");

search.addEventListener('keypress', async(e) => {

  if (e.key === "Enter") {

  for (let i = 0; i < 100; i++) {
    const cards = await document.querySelectorAll('.card');
    //Hide the list of characters
    cards[i].style.display = "none";

       if (cards[i].innerHTML.includes(search.value)) {
          cards[i].style.display = "flex";
          }
        }
      }
})