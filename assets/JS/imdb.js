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
const ITEMS_PER_PAGE = 30; // Her sayfada gösterilecek film sayısı
let currentPage = 1; // Başlangıçta varsayılan olarak 1. sayfa

function getProduct(page) {
    axios.get(`http://localhost:3000/films`)
        .then(response => {
            const data = response.data;
            // Tüm filmleri sırala
            const sortedData = data.sort((a, b) => b.imdb - a.imdb);
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
                        <p>${item.imdb}</p>
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
                getProduct(currentPage);
                window.scrollTo(0, 0); // Yeni sayfa yüklendiğinde sayfanın üstüne git
            });
        }
        pagination.appendChild(button);
    }
}

// İlk sayfayı yükle
getProduct(currentPage);

