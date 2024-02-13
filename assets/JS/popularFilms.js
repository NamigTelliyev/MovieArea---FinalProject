//!
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".header").addClass("scrollHeader");
    } else {
      $(".header").removeClass("scrollHeader");
    }
  });
});

//!
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
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
    e.stopPropagation();
    $(".navbarCategories").toggleClass("active");
    $(".navbarHamburger").removeClass("active");
  });

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
  $(".navbarCategories li.active").hover(
    function () {
      $(this).css("z-index", "30");
    },
    function () {
      $(this).css("z-index", "");
    }
  );
});

//!
$(document).ready(function () {
  let isExtraItemsAdded = false;

  function addAdditionalItems() {
    if ($(window).width() >= 250 && $(window).width() <= 599) {
      if (!isExtraItemsAdded) {
        $(".navbarHamburger").append(`
            <li style="--i:9;--clr:goldenrod;">
              <a href="#">Shop</a>
            </li>
            <li style="--i:10;--clr:limegreen;">
              <a href="#">WishList</a>
            </li>
          `);
        isExtraItemsAdded = true;
      }
    } else {
      if (isExtraItemsAdded) {
        $(
          ".navbarHamburger li:contains('Shop'), .navbarHamburger li:contains('WishList')"
        ).remove();
        isExtraItemsAdded = false;
      }
    }
  }

  $(window).on("load resize", addAdditionalItems);
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
    let footerOffset = $("footer").offset().top;
    let headerHeight = $(".header").outerHeight();

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
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $(".navSearch").css({
        opacity: 0,
        "z-index": -1,
        transition: "opacity 0.5s ease",
      });
    } else {
      $(".navSearch").css({
        opacity: 1,
        "z-index": 15,
        transition: "opacity 0.5s ease",
      });
    }
  });
});

//!
$(document).ready(function () {
  function handleSearchBarVisibility() {
    if ($(window).width() >= 992 && $(window).scrollTop() <= 200) {
      $(".searchBar").show();
    } else {
      $(".searchBar").hide();
    }
  }

  $(window).on("load resize", handleSearchBarVisibility);

  $(window).scroll(function () {
    handleSearchBarVisibility();
  });
});


//?
const products = document.getElementById("products");
const pagination = document.getElementById("pagination");
const ITEMS_PER_PAGE = 40; // Her sayfada gösterilecek film sayısı
let currentPage = 1; // Başlangıçta varsayılan olarak 1. sayfa

function getProduct(page) {
    axios.get(`http://localhost:3000/films`)
        .then(response => {
            const data = response.data;
            // Tüm filmleri sırala
            const sortedData = data.sort((a, b) => b.popularity - a.popularity);
            const start = (page - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;
            const paginatedData = sortedData.slice(start, end); // Sayfaya özgü verileri al
            products.innerHTML = ""; // Önceki içeriği temizle
            paginatedData.forEach(item => {
                const box = document.createElement('div');
                box.className = 'col content';
                box.innerHTML = `<img src="${item.image}" alt="img">
                        <h2>${item.name}</h2>
                        <p>${item.price} $</p>
                        <p>${item.popularity} $</p>
                        <div class="basket"><button class="btn" onclick="addToBasket(${item.id})">Add to Basket</button>
                        <i class="fa-solid fa-heart" onclick="wishlist(${item.id})"></i></div>
                    `;
                products.appendChild(box);
            });
            createPaginationButtons(Math.ceil(data.length / ITEMS_PER_PAGE)); // Sayfalandırma düğmelerini oluştur
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Sayfalandırma düğmelerini oluştur
function createPaginationButtons(totalPages) {
    pagination.innerHTML = ""; // Önceki düğmeleri temizle
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add("active"); // Aktif sayfayı belirtmek için bir sınıf ekle
            button.disabled = true; // Aktif sayfa düğmesini devre dışı bırak
        } else {
            button.addEventListener("click", () => {
                currentPage = i;
                updateSortedDataForCurrentPage(); // Sıralı veri kümesini güncelle
                getProduct(currentPage);
                window.scrollTo(0, 0); // Yeni sayfa yüklendiğinde sayfanın üstüne git
            });
        }
        pagination.appendChild(button);
    }
}

// İlk sayfayı yükle
getProduct(currentPage);

// Butonları seçin
const sortAZButton = document.getElementById("sortAZ");
const sortZAButton = document.getElementById("sortZA");
const sortDefaultButton = document.getElementById("sortDefault");

// A-Z'ye göre sıralama
sortAZButton.addEventListener("click", function() {
    fetchDataAndSort("AZ");
});

// Z-A'ya göre sıralama
sortZAButton.addEventListener("click", function() {
    fetchDataAndSort("ZA");
});

// Default sıralama (Popülerliğe göre)
sortDefaultButton.addEventListener("click", function() {
    getProduct(currentPage);
});

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// API'den veri alıp istenilen sıralamaya göre işleme yapacak fonksiyon
// function fetchDataAndSort(sortType) {
//     axios.get(`http://localhost:3000/films`)
//         .then(response => {
//             const data = response.data;
//             let sortedData; // sortedData burada tanımlanmalıdır

//             // Verileri A-Z'ye veya Z-A'ya göre sırala
//             if (sortType === "AZ") {
//                 sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
//             } else if (sortType === "ZA") {
//                 sortedData = data.sort((a, b) => b.name.localeCompare(a.name));
//             } else {
//                 // Varsayılan sıralama (API'den alınan sıralama)
//                 sortedData = data.sort((a, b) => b.popularity - a.popularity);
//             }

//             // Sayfa geçişlerinde sıralı veri kümesini güncelle
//             updateSortedDataForCurrentPage(sortedData);

//             // Sadece sayfada görünen verileri al
//             const start = (currentPage - 1) * ITEMS_PER_PAGE;
//             const end = start + ITEMS_PER_PAGE;
//             const paginatedData = sortedData.slice(start, end);

//             // Sıralanmış verileri işleme devam et
//             // Ekrana sıralanmış verileri göster
//             showSortedData(paginatedData);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




// Sıralanmış verileri HTML içine yerleştiren fonksiyon
function showSortedData(data) {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedData = data.slice(start, end);

    products.innerHTML = ""; // Önceki içeriği temizle
    paginatedData.forEach(item => {
        const box = document.createElement('div');
        box.className = 'col content';
        box.innerHTML = `<img src="${item.image}" alt="img">
                <h2>${item.name}</h2>
                <p>${item.price} $</p>
                <div class="basket"><button class="btn" onclick="addToBasket(${item.id})">Add to Basket</button>
                <i class="fa-solid fa-heart" onclick="wishlist(${item.id})"></i></div>
            `;
        products.appendChild(box);
    });

    createPaginationButtons(Math.ceil(data.length / ITEMS_PER_PAGE)); // Sayfalandırma düğmelerini oluştur
}






//! Search by name
const formSrc = document.getElementById("formSrc")
const inp = document.getElementById("inpSrc")
const suggestions = document.getElementById("suggestions");

formSrc.addEventListener("submit", srcFunc)
inp.addEventListener("input", showSuggestions);

function srcFunc(e) {
    e.preventDefault();
    products.innerHTML = '';
    axios.get("http://localhost:3000/films")
        .then(res => {
            let data = res.data;
            let datas = data.filter((item) => item.name.toLowerCase().includes(inp.value.toLowerCase()));
            datas.forEach(item => {
                const box = document.createElement('div');
                box.className = 'col content';
                box.innerHTML = `<img src="${item.image}" alt="img">
                    <h2>${item.name}</h2>
                    <p>${item.price} $</p>
                    <div class="basket"><button class="btn" onclick="addToBasket(${item.id})">Add to Basket</button>
                    <i class="fa-solid fa-heart"></i></div>
                `;
                products.appendChild(box);
            });

        })
}

function showSuggestions() {
    suggestions.innerHTML = ''; // Önceki önerileri temizle
    axios.get("http://localhost:3000/films")
        .then(res => {
            let data = res.data;
            let filteredData = data.filter((item) => item.name.toLowerCase().startsWith(inp.value.toLowerCase()));
            filteredData.forEach(item => {
                const suggestion = document.createElement('div');
                suggestion.textContent = item.name;
                suggestion.addEventListener('click', () => {
                    inp.value = item.name; // Öneriyi input alanına ekle
                    suggestions.innerHTML = ''; // Önerileri temizle
                });
                suggestions.appendChild(suggestion);
            });
        });
}
