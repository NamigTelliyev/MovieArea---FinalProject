//!
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $(".header").addClass("scrollHeader");
    } else {
      $(".header").removeClass("scrollHeader");
    }
  });
});

//!
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $(".searchBar").hide();
    } else {
      $(".searchBar").show();
    }
  });
});

// //!
$(document).ready(function () {
  $(".toggleHamburger").click(function (e) {
    e.stopPropagation();
    $(".navbarHamburger").toggleClass("active");
    $(".navbarCategories").removeClass("active");
  });

  $(".toggleCategories").click(function (e) {
    e.stopPropagation(); // Bu tıklamanın diğer elementlere ulaşmasını engeller
    $(".navbarCategories").toggleClass("active");
    $(".navbarHamburger").removeClass("active"); // Diğer menüyü kapat
  });

  // Dokümana herhangi bir yere tıklandığında menülerin kapanmasını sağlar
  $(document).click(function (e) {
    if (!$(e.target).closest(".hamburgerMenu").length) {
      $(".navbarHamburger").removeClass("active");
    }
    if (!$(e.target).closest(".categoriesBurger").length) {
      $(".navbarCategories").removeClass("active");
    }
  });
});

//!
$(document).ready(function () {
  function handleSearchBarVisibility() {
    if ($(window).width() >= 992) {
      $(".searchBar").css("display", "flex");
    } else {
      $(".searchBar").css("display", "none");
    }
  }
  $(window).on("load resize", handleSearchBarVisibility);
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      $(".searchBar").hide();
    }
  });
});

//!
$(document).ready(function () {
  $(window).scroll(function () {
    var footerOffset = $("footer").offset().top;
    var headerHeight = $(".header").outerHeight();

    if ($(this).scrollTop() > footerOffset - headerHeight) {
      $(".header").css({
        opacity: 0,
        "z-index": -1,
        transition: " 0.4s ease",
      });
    } else {
      $(".header").css({
        opacity: 1,
        "z-index": 15,
        transition: " 0.4s ease",
      });
    }
  });
});

//!
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 900) {
//       $(".navSearch").css({
//         opacity: 0,
//         "z-index": -1,
//         transition: "opacity 0.5s ease",
//       });
//     } else {
//       $(".navSearch").css({
//         opacity: 1,
//         "z-index": 15,
//         transition: "opacity 0.5s ease",
//       });
//     }
//   });
// });

//!
document.addEventListener("DOMContentLoaded", function () {
  let categoriesBtn = document.getElementById("categoriesBtn");
  let allCategories = document.querySelector(".allCategories");
  categoriesBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    if (
      allCategories.style.display === "none" ||
      allCategories.style.display === ""
    ) {
      showMenu();
    } else {
      hideMenu();
    }
  });
  allCategories.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  document.addEventListener("click", function () {
    hideMenu();
  });
  function showMenu() {
    allCategories.classList.add("show");
    allCategories.style.animation = "slideInOut 0.5s forwards";
    setTimeout(function () {
      allCategories.style.display = "block";
    }, 100);
  }

  // Menüyü gizleme fonksiyonu
  function hideMenu() {
    // "slideOutReverse" animasyonunu uygula
    allCategories.style.animation = "slideOutReverse 0.5s forwards";
    // Animasyon bitince görünürlüğü değiştir
    setTimeout(function () {
      allCategories.style.display = "none";
      // "show" sınıfını kaldır
      allCategories.classList.remove("show");
    }, 500); // Animasyon süresi (0.5 saniye) kadar beklet
  }
});

//!
document.addEventListener("DOMContentLoaded", function () {
  let categoriesBtnTwo = document.getElementById("categoriesBtnTwo");
  let menuBtn = document.getElementById("menuBtn");
  let allCategories = document.querySelector(".allCategories");
  let allMenu = document.querySelector(".allMenu");
  categoriesBtnTwo.addEventListener("click", function (event) {
    event.stopPropagation();
    if (
      allCategories.style.display === "none" ||
      allCategories.style.display === ""
    ) {
      showCategories();
      if (allMenu.style.display !== "none" && allMenu.style.display !== "") {
        hideMenu();
      }
    } else {
      hideCategories();
    }
  });
  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    if (allMenu.style.display === "none" || allMenu.style.display === "") {
      showMenu();
      if (
        allCategories.style.display !== "none" &&
        allCategories.style.display !== ""
      ) {
        hideCategories();
      }
    } else {
      hideMenu();
    }
  });
  allCategories.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  allMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  document.addEventListener("click", function () {
    hideCategories();
    hideMenu();
  });
  function showCategories() {
    allCategories.classList.add("show");
    allCategories.style.animation = "slideInOut 0.5s forwards";
    setTimeout(function () {
      allCategories.style.display = "block";
    }, 100);
  }
  function hideCategories() {
    allCategories.style.animation = "slideOutReverse 0.5s forwards";
    setTimeout(function () {
      allCategories.style.display = "none";
      allCategories.classList.remove("show");
    }, 500);
  }
  function showMenu() {
    allMenu.classList.add("show");
    allMenu.style.animation = "slideInOut 0.5s forwards";
    setTimeout(function () {
      allMenu.style.display = "block";
    }, 100);
  }
  function hideMenu() {
    allMenu.style.animation = "slideOutReverse 0.5s forwards";
    setTimeout(function () {
      allMenu.style.display = "none";
      allMenu.classList.remove("show");
    }, 500);
  }
});

//! Search by name
const formSrc = document.getElementById("formSrc");
const inp = document.getElementById("inpSrc");
formSrc.addEventListener("submit", srcFunc);
function srcFunc(e) {
  e.preventDefault();
  products.innerHTML = "";
  axios.get("http://localhost:3000/films").then((res) => {
    let data = res.data;
    let datas = data.filter((item) =>
      item.name.toLowerCase().includes(inp.value.toLowerCase())
    );
    datas.forEach((item) => {
      const box = document.createElement("div");
      box.className = "col content";
      box.innerHTML = `<img src="${item.image}" alt="img">
                    <h2>${item.name}</h2>
                    <p>${item.price} $</p>
                    <div class="basket"><button class="btn" onclick="addToBasket(${item.id})">Add to Basket</button>
                    <i class="fa-solid fa-heart"></i></div>
                `;
      products.appendChild(box);
    });
  });
}

//! get products
const trendProducts = document.getElementById("trendProducts");
const popularProducts = document.getElementById("popularProducts");
const releaseDate = document.getElementById("releaseDate");
const ITEMS_PER_PAGE = 15;

function getProduct(url, targetElement, sortBy) {
  axios.get(url)
    .then((response) => {
      const data = response.data;
      const sortedData = data.sort((a, b) => {
        if (sortBy === "popularity") {
          return b.popularity - a.popularity;
        } else if (sortBy === "trend") {
          return b.trend - a.trend;
        } else if (sortBy === "year") {
          return b.year - a.year;
        } else {
          return 0;
        }
      });
      const paginatedData = sortedData.slice(0, ITEMS_PER_PAGE);
      targetElement.innerHTML = "";
      paginatedData.forEach((item) => {
        const box = document.createElement("div");
        box.className =
          "col-2 col-sm-2 col-md-2 col-xl-2 col-lg-2 col-xxl-2 content";
        box.innerHTML = `<div class="poster">
        <img src="${item.image}" alt="image"/>
      </div>
      <div class="language">
        <span class="dubbing">Dubbing</span>
        <span class="subtitle">Subtitle</span>
      </div>
      <div class="textArea">
        <h2>${item.name}</h2>
        <h5>${item.director}</h5>
        <h4><i>${item.genre}</i></h4>
        <h3 class="year">${item.year}</h3>
        <div class="ratings">
          <h3><i class="fa-brands fa-imdb"></i>${item.imdb}</h3>
        <h3><img src="./assets/Media/Images/512x512.png" alt="MA">${item.ma}</h3>
        </div>
      </div>`;
        targetElement.appendChild(box);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
getProduct("http://localhost:3000/films", trendProducts, "trend");
getProduct("http://localhost:3000/films", popularProducts, "popularity");
getProduct("http://localhost:3000/films", releaseDate, "year");





const seriesProducts = document.getElementById("seriesProducts");
function getProducts(url) {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      const filteredData = data.filter((item) => item.seriesNumber === "1");
      const seriesGroupedData = filteredData.reduce((acc, curr) => {
        if (!acc[curr.seriesName]) {
          acc[curr.seriesName] = [];
        }
        acc[curr.seriesName].push(curr);
        return acc;
      }, {});
      seriesProducts.innerHTML = "";
      for (const seriesName in seriesGroupedData) {
        const films = seriesGroupedData[seriesName];
        films.forEach((item) => {
          const box = document.createElement("div");
          box.className = "col-2 col-sm-2 col-md-2 col-xl-2 col-lg-2 col-xxl-2 content";
          box.innerHTML = `<a href="detail.html?id=${item.id}">
          <div class="poster">
          <img src="${item.image}" alt="image"/>
        </div>
        <div class="language">
          <span class="dubbing">Dubbing</span>
          <span class="subtitle">Subtitle</span>
        </div>
        <div class="textArea">
          <h2>${item.name}</h2>
          <h5>${item.director}</h5>
          <h4><i>${item.genre}</i></h4>
          <h3 class="year">${item.year}</h3>
          <div class="ratings">
            <h3><i class="fa-brands fa-imdb"></i>${item.imdb}</h3>
          <h3><img src="./assets/Media/Images/512x512.png" alt="MA">${item.ma}</h3>
          </div>
        </div>    
          </a>`;
          seriesProducts.appendChild(box);
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
getProducts("http://localhost:3000/films");




//ad to basket
function addToBasket(id){
  let cart=JSON.parse(localStorage.getItem("cart")) || []
  cart.push(db.find(item=>item.id==id))
  localStorage.setItem("cart",JSON.stringify(cart))
}


//wishlist
function wishlist(id){
  let heart=JSON.parse(localStorage.getItem("heart")) || []
  heart.push(db.find(item=>item.id==id))
  localStorage.setItem("heart",JSON.stringify(heart))
}


