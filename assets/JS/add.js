const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const year = document.getElementById("year");
const image = document.getElementById("image");
const price = document.getElementById("price");
const imdb = document.getElementById("imdb");
const director = document.getElementById("director");
const genre = document.getElementById("genre");
const description = document.getElementById("description");

function addFilm(e) {
    e.preventDefault();

    const data = {
        name: nameInput.value,
        year: year.value,
        image: image.value,
        price: price.value,
        imdb: imdb.value,
        director: director.value,
        genre: genre.value,
        description: description.value
    };

    fetch("http://localhost:3000/films", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        form.reset();
    })
    .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
    });
}

form.addEventListener("submit", addFilm);






const products=document.getElementById("products");
function getProduct() {
    axios.get(`http://localhost:3000/films`)
        .then(response => {
            const data = response.data;
            db = data;
            db.forEach(item => {
                const box = document.createElement('div');
                box.className = 'col-2 col-sm-2 col-md-2 col-xl-2 col-lg-2 col-xxl-2 content';
                box.innerHTML = `<div class="poster">
                <img src="${item.image}" alt="image"/>
              </div>
              <div class="language">
                <span class="dubbing">Dubbing</span>
                <span class="subtitle">Subtitle</span>
                
              </div>
              <div class="delete"><button class="btn" onclick="deleteItem(${item.id})">Delete</button>

              <div class="textArea">
                <h2>${item.name}</h2>
                <h5>${item.director}</h5>
                <h4><i>${item.genre}</i></h4>
                <h3 class="year">${item.year}</h3>
                <div class="ratings">

                  <h3><i class="fa-brands fa-imdb"></i>${item.imdb}</h3>
                <h3><img src="./assets/Media/Images/512x512.png" alt="MA">${item.ma}</h3>
                </div>
              </div> `;
                products.appendChild(box);
            });
        })
}
getProduct();


function deleteItem(id) {
    axios.delete(`http://localhost:3000/films/${id}`)
    .then(res => {
        getProduct()
    })
}