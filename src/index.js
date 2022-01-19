let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyUrl = 'http://localhost:3000/toys'

function fetchToy() {
  fetch(toyUrl)
  .then(resp => resp.json())
  .then( data => data.forEach(renderToy))
}
fetchToy()

function renderToy(someObj) {
  const toyCard = document.createElement('div')
  toyCard.className = "card"
  const toyHeader = document.createElement('h2')
  toyHeader.innerText = someObj.name
  const toyImg = document.createElement('img')
  toyImg.src = `${someObj.image}`
  toyImg.className = "toy-avatar"
  const toyLikes = document.createElement('p')
  toyLikes.innerText = `${someObj.likes} likes`
  const toyButton = document.createElement('button')
  toyButton.className = "like-btn"
  toyButton.id = someObj.id
  toyButton.innerText = "Like <3"
  toyButton.addEventListener('click', () => {
    someObj.likes++
    toyLikes.innerText = `${someObj.likes} likes` })
  toyCard.append(toyHeader, toyImg, toyLikes, toyButton)
  document.getElementById("toy-collection").append(toyCard)
}