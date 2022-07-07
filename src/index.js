const baseURL = 'http://localhost:3000/toys';
const toyCollection = document.querySelector('#toy-collection')
let addToy = false;
const addBtn = document.querySelector("#new-toy-btn");
const toyForm = document.querySelector(".container");

fetch(baseURL)
  .then(res => res.json())
  .then(toys => {
    const toysHTML = toys.map(function(toy) {
      return `<div class="card">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p>${toy.likes} Likes</p>
      <button class="like-btn" id="[toy_id]">Like ❤️</button>
    </div>`
    })
    document.querySelector('#toy-collection').innerHTML = toysHTML.join(' ')
  })

toyForm.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e.target.name)
  const toyName = e.target.name.value
  const toyImage = e.target.image.value
  fetch(baseURL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: toyName,
      image: toyImage,
      likes: 0
    })
  })
  .then(res => res.json())
  .then(newToy => {
    document.querySelector('#toy-collection').append(newToy)
    
})
})


// // }
addBtn.addEventListener("click", () => {
  // hide & seek with the form
  addToy = !addToy;
  if (addToy) {
    toyForm.style.display = "block";
  } else {
    toyForm.style.display = "none";
  }
});








// function getToys() {
//   fetch(baseURL)
//   .then(res => res.json())
// }

// getToys().then(toys =>
//   toys.forEach(toy => {
//     renderToys(toy)
//   }))

// const form = document.querySelector('form')
// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   form.reset()
//   renderToys(e)
// })

// function postToy(toyData) {
//   fetch(baseURL, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       "name": toyData.name.value,
//       "image": toyData.image.value,
//       "likes": 0
//     })
//   })
//   .then(res => res.json())
//   .then(toyObject => {
//     const newToy = renderToys(toyObject)
//   })
// }

// function renderToys(toy) {
//   const h2 = document.createElement('h2')
//   h2.innerText = toy.name
//   const img = document.createElement('img')
//   img.setAttribute('src', toy.image)
//   img.setAttribute('class', 'toy-avatar')
//   const pLikes = document.createElement('p')
//   pLikes.innerText = `${toy.likes} likes`
//   const likeButton = document.createElement('button')
//   likeButton.setAttribute('class', 'like-btn')
//   likeButton.setAttribute('id', toy.id)
//   likeButton.addEventListener('click', e => {
//     e.target.dataset
//     toy.likes ++
//   })

//   const toyCard = document.createElement('div')
//   toyCard.setAttribute('class', 'card')
//   toyCard.append(h2, img, pLikes, likeButton)
//   toyCollection.append(toyCard)
//   } 


