//!
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      // Sayfa belirli bir scroll değerinden sonra
      $(".header").addClass("scrollHeader"); // 'scroll' sınıfını ekle
    } else {
      $(".header").removeClass("scrollHeader"); // 'scroll' sınıfını kaldır
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $(".searchBar").hide(); // Scroll değeri 900'ü geçtiğinde .searchBar gizlenir
    } else {
      $(".searchBar").show(); // Scroll değeri 900'den az olduğunda .searchBar gösterilir
    }
  });
});



// //!
$(document).ready(function() {
  $(".toggleHamburger").click(function(e) {
    e.stopPropagation(); // Bu tıklamanın diğer elementlere ulaşmasını engeller
    $(".navbarHamburger").toggleClass("active");
    $(".navbarCategories").removeClass("active"); // Diğer menüyü kapat
  });

  $(".toggleCategories").click(function(e) {
    e.stopPropagation(); // Bu tıklamanın diğer elementlere ulaşmasını engeller
    $(".navbarCategories").toggleClass("active");
    $(".navbarHamburger").removeClass("active"); // Diğer menüyü kapat
  });

  // Dokümana herhangi bir yere tıklandığında menülerin kapanmasını sağlar
  $(document).click(function(e) {
    if (!$(e.target).closest('.hamburgerMenu').length) {
      $(".navbarHamburger").removeClass("active");
    }
    if (!$(e.target).closest('.categoriesBurger').length) {
      $(".navbarCategories").removeClass("active");
    }
  });
});


//!
$(document).ready(function() {
  $(".navbarCategories li.active").hover(function() {
    // Hover edilen li öğesinin z-index değerini artır
    $(this).css("z-index", "999");
  }, function() {
    // Fare ayrıldığında z-index değerini geri döndür
    $(this).css("z-index", "");
  });
});


//!
$(document).ready(function() {
  var isExtraItemsAdded = false;

  function addAdditionalItems() {
    if ($(window).width() >= 250 && $(window).width() <= 599) {
      if (!isExtraItemsAdded) {
        $(".navbarHamburger").append(`
          <li style="--i:8;--clr:goldenrod;">
            <a href="#">Shop</a>
          </li>
          <li style="--i:9;--clr:limegreen;">
            <a href="#">WishList</a>
          </li>
        `);
        isExtraItemsAdded = true;
      }
    } else {
      if (isExtraItemsAdded) {
        $(".navbarHamburger li:contains('Shop'), .navbarHamburger li:contains('WishList')").remove();
        isExtraItemsAdded = false;
      }
    }
  }

  // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde ekstra öğeleri ekleme veya kaldırma
  $(window).on('load resize', addAdditionalItems);
});


// //!
// $(document).ready(function() {
//   var isExtraItemsAdded = false;

//   function addAdditionalItems() {
//     if ($(window).width() >= 250 && $(window).width() <= 299) {
//       if (!isExtraItemsAdded) {
//         $(".navbarHamburger").append(`
//           <li style="--i:9;--clr:goldenrod;">
//             <a href="#">Shop</a>
//           </li>
//           <li style="--i:10;--clr:limegreen;">
//             <a href="#">WishList</a>
//           </li>
//         `);
//         isExtraItemsAdded = true;
//       }
//     } else {
//       if (isExtraItemsAdded) {
//         $(".navbarHamburger li:contains('Shop'), .navbarHamburger li:contains('WishList')").remove();
//         isExtraItemsAdded = false;
//       }
//     }
//   }

//   // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde ekstra öğeleri ekleme veya kaldırma
//   $(window).on('load resize', addAdditionalItems);
// });



//!
$(document).ready(function() {
  function handleSearchBarVisibility() {
    if ($(window).width() >= 992) {
      $(".searchBar").css("display", "flex"); // Ekran genişliği 992 pikselden büyükse .searchBar görünür olur
    } else {
      $(".searchBar").css("display", "none"); // Ekran genişliği 992 pikselden küçükse .searchBar gizlenir
    }
  }
  // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde .searchBar'ın görünürlüğünü kontrol et
  $(window).on('load resize', handleSearchBarVisibility);

  $(window).scroll(function () {
    if ($(window).width() < 992) {
      $(".searchBar").hide(); // Ekran genişliği 992 pikselden küçükse, scroll ile de .searchBar gizlenir
    }
  });
});



//!
$(document).ready(function() {
  $(window).scroll(function() {
    var footerOffset = $("footer").offset().top;
    var headerHeight = $(".header").outerHeight();

    if ($(this).scrollTop() > footerOffset - headerHeight) {
      $(".header").css({
        opacity: 0,
        "z-index": -1, // z-index değerini ayarla
        transition: " 0.4s ease" // Geçiş efekti
      });
    } else {
      $(".header").css({
        opacity: 1,
        "z-index": 15, // z-index değerini orijinal değerine geri al
        transition: " 0.4s ease" // Geçiş efekti
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
        transition: "opacity 0.5s ease" // 0.5 saniyelik geçiş efekti
      });
    } else {
      $(".navSearch").css({
        opacity: 1,
        "z-index": 15,
        transition: "opacity 0.5s ease" // 0.5 saniyelik geçiş efekti
      });
    }
  });
});

//!
document.addEventListener("DOMContentLoaded", function() {
  let categoriesBtn = document.getElementById("categoriesBtn");
  let allCategories = document.querySelector(".allCategories");

  // Kategori butonuna tıklanınca menüyü aç veya kapat
  categoriesBtn.addEventListener("click", function(event) {
      event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle

      // Menüyü göster veya gizle
      if (allCategories.style.display === "none" || allCategories.style.display === "") {
          // Menüyü göster
          showMenu();
      } else {
          // Menüyü gizle
          hideMenu();
      }
  });

  // Menüye tıklanınca menüyü kapat
  allCategories.addEventListener("click", function(event) {
      event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle
  });

  // Sayfa herhangi bir yerine tıklanınca menüyü kapat
  document.addEventListener("click", function() {
      hideMenu();
  });



  // Menüyü gösterme fonksiyonu
  function showMenu() {
      // "show" sınıfını ekle
      allCategories.classList.add("show");
      // "slideInOut" animasyonunu uygula
      allCategories.style.animation = "slideInOut 0.5s forwards";
      // Animasyon bitince görünürlüğü değiştir
      setTimeout(function() {
          allCategories.style.display = "block";
      }, 100); // Animasyon süresi (0.5 saniye) kadar beklet
  }

  // Menüyü gizleme fonksiyonu
  function hideMenu() {
      // "slideOutReverse" animasyonunu uygula
      allCategories.style.animation = "slideOutReverse 0.5s forwards";
      // Animasyon bitince görünürlüğü değiştir
      setTimeout(function() {
          allCategories.style.display = "none";
          // "show" sınıfını kaldır
          allCategories.classList.remove("show");
      }, 500); // Animasyon süresi (0.5 saniye) kadar beklet
  }
});


// //!
// document.addEventListener("DOMContentLoaded", function() {
//   let categoriesBtnTwo = document.getElementById("categoriesBtnTwo");
//   let menuBtn = document.getElementById("menuBtn");
//   let allCategories = document.querySelector(".allCategories");

//   // Kategori butonuna tıklanınca menüyü aç veya kapat
//   categoriesBtnTwo.addEventListener("click", function(event) {
//       event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle

//       // Menüyü göster veya gizle
//       if (allCategories.style.display === "none" || allCategories.style.display === "") {
//           // Menüyü göster
//           showMenu();
//       } else {
//           // Menüyü gizle
//           hideMenu();
//       }
//   });

//   // Menüye tıklanınca menüyü kapat
//   allCategories.addEventListener("click", function(event) {
//       event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle
//   });

//   // Sayfa herhangi bir yerine tıklanınca menüyü kapat
//   document.addEventListener("click", function() {
//       hideMenu();
//   });

//   // Kategori butonuna tıklanınca menüyü kapat
//   menuBtn.addEventListener("click", function(event) {
//       event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle
//       hideMenu();
//   });

//   // Menüyü gösterme fonksiyonu
//   function showMenu() {
//       // "show" sınıfını ekle
//       allCategories.classList.add("show");
//       // "slideInOut" animasyonunu uygula
//       allCategories.style.animation = "slideInOut 0.5s forwards";
//       // Animasyon bitince görünürlüğü değiştir
//       setTimeout(function() {
//           allCategories.style.display = "block";
//       }, 100); // Animasyon süresi (0.5 saniye) kadar beklet
//   }

//   // Menüyü gizleme fonksiyonu
//   function hideMenu() {
//       // "slideOutReverse" animasyonunu uygula
//       allCategories.style.animation = "slideOutReverse 0.5s forwards";
//       // Animasyon bitince görünürlüğü değiştir
//       setTimeout(function() {
//           allCategories.style.display = "none";
//           // "show" sınıfını kaldır
//           allCategories.classList.remove("show");
//       }, 500); // Animasyon süresi (0.5 saniye) kadar beklet
//   }
// });


// //!
// document.addEventListener("DOMContentLoaded", function() {
//   let categoriesBtnTwo = document.getElementById("categoriesBtnTwo");
//   let menuBtn = document.getElementById("menuBtn");
//   let allMenu = document.querySelector(".allMenu");


//   // Kategori butonuna tıklanınca menüyü aç veya kapat
//   menuBtn.addEventListener("click", function(event) {
//       event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle

//       // Menüyü göster veya gizle
//       if (allMenu.style.display === "none" || allMenu.style.display === "") {
//           // Menüyü göster
//           showMenu();
//       } else {
//           // Menüyü gizle
//           hideMenu();
//       }
//   });

//   // Menüye tıklanınca menüyü kapat
//   allMenu.addEventListener("click", function(event) {
//       event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle
//   });

//   // Sayfa herhangi bir yerine tıklanınca menüyü kapat
//   document.addEventListener("click", function() {
//       hideMenu();
//   });

//   // Kategori butonuna tıklanınca menüyü kapat
//   categoriesBtnTwo.addEventListener("click", function(event) {
//       event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle
//       hideMenu();
//   });

//   // Menüyü gösterme fonksiyonu
//   function showMenu() {
//       // "show" sınıfını ekle
//       allMenu.classList.add("show");
//       // "slideInOut" animasyonunu uygula
//       allMenu.style.animation = "slideInOut 0.5s forwards";
//       // Animasyon bitince görünürlüğü değiştir
//       setTimeout(function() {
//           allMenu.style.display = "block";
//       }, 100); // Animasyon süresi (0.5 saniye) kadar beklet
//   }

//   // Menüyü gizleme fonksiyonu
//   function hideMenu() {
//       // "slideOutReverse" animasyonunu uygula
//       allMenu.style.animation = "slideOutReverse 0.5s forwards";
//       // Animasyon bitince görünürlüğü değiştir
//       setTimeout(function() {
//           allMenu.style.display = "none";
//           // "show" sınıfını kaldır
//           allMenu.classList.remove("show");
//       }, 500); // Animasyon süresi (0.5 saniye) kadar beklet
//   }
// });


document.addEventListener("DOMContentLoaded", function() {
  let categoriesBtnTwo = document.getElementById("categoriesBtnTwo");
  let menuBtn = document.getElementById("menuBtn");
  let allCategories = document.querySelector(".allCategories");
  let allMenu = document.querySelector(".allMenu");

  // Kategori butonuna tıklanınca menüyü aç veya kapat (categoriesBtnTwo için)
  categoriesBtnTwo.addEventListener("click", function(event) {
      event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle

      // Kategori menüsünü göster veya gizle
      if (allCategories.style.display === "none" || allCategories.style.display === "") {
          // Kategori menüsünü göster
          showCategories();
          // Eğer ana menü açıksa, onu kapat
          if (allMenu.style.display !== "none" && allMenu.style.display !== "") {
              hideMenu();
          }
      } else {
          // Kategori menüsünü gizle
          hideCategories();
      }
  });

  // Ana menü butonuna tıklanınca menüyü aç veya kapat (menuBtn için)
  menuBtn.addEventListener("click", function(event) {
      event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle

      // Ana menüyü göster veya gizle
      if (allMenu.style.display === "none" || allMenu.style.display === "") {
          // Ana menüyü göster
          showMenu();
          // Eğer kategori menüsü açıksa, onu kapat
          if (allCategories.style.display !== "none" && allCategories.style.display !== "") {
              hideCategories();
          }
      } else {
          // Ana menüyü gizle
          hideMenu();
      }
  });

  // Kategori menüsüne tıklanınca menüyü kapat (categoriesBtnTwo için)
  allCategories.addEventListener("click", function(event) {
      event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle
  });

  // Ana menüye tıklanınca menüyü kapat (menuBtn için)
  allMenu.addEventListener("click", function(event) {
      event.stopPropagation(); // Bu olayın diğer elementlere ulaşmasını engelle
  });

  // Sayfa herhangi bir yerine tıklanınca menüyü kapat (her iki menü için)
  document.addEventListener("click", function() {
      hideCategories();
      hideMenu();
  });

  // Kategori menüsünü gösterme fonksiyonu
  function showCategories() {
      // "show" sınıfını ekle
      allCategories.classList.add("show");
      // "slideInOut" animasyonunu uygula
      allCategories.style.animation = "slideInOut 0.5s forwards";
      // Animasyon bitince görünürlüğü değiştir
      setTimeout(function() {
          allCategories.style.display = "block";
      }, 100); // Animasyon süresi (0.5 saniye) kadar beklet
  }

  // Kategori menüsünü gizleme fonksiyonu
  function hideCategories() {
      // "slideOutReverse" animasyonunu uygula
      allCategories.style.animation = "slideOutReverse 0.5s forwards";
      // Animasyon bitince görünürlüğü değiştir
      setTimeout(function() {
          allCategories.style.display = "none";
          // "show" sınıfını kaldır
          allCategories.classList.remove("show");
      }, 500); // Animasyon süresi (0.5 saniye) kadar beklet
  }

  // Ana menüyü gösterme fonksiyonu
  function showMenu() {
      // "show" sınıfını ekle
      allMenu.classList.add("show");
      // "slideInOut" animasyonunu uygula
      allMenu.style.animation = "slideInOut 0.5s forwards";
      // Animasyon bitince görünürlüğü değiştir
      setTimeout(function() {
          allMenu.style.display = "block";
      }, 100); // Animasyon süresi (0.5 saniye) kadar beklet
  }

  // Ana menüyü gizleme fonksiyonu
  function hideMenu() {
      // "slideOutReverse" animasyonunu uygula
      allMenu.style.animation = "slideOutReverse 0.5s forwards";
      // Animasyon bitince görünürlüğü değiştir
      setTimeout(function() {
          allMenu.style.display = "none";
          // "show" sınıfını kaldır
          allMenu.classList.remove("show");
      }, 500); // Animasyon süresi (0.5 saniye) kadar beklet
  }
});





//! Search by name
const formSrc=document.getElementById("formSrc")
const inp=document.getElementById("inpSrc")
formSrc.addEventListener("submit", srcFunc)
function srcFunc(e){
    e.preventDefault()
    products.innerHTML=''
    axios.get("http://localhost:3000/films")
    .then(res=>{
        let data=res.data;
      let datas =  data.filter((item)=> item.name.toLowerCase().includes(inp.value.toLowerCase()))
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






//! get products
const trendProducts = document.getElementById("trendProducts");
const popularProducts = document.getElementById("popularProducts");
const releaseDate = document.getElementById("releaseDate");
const ITEMS_PER_PAGE = 15;

function getProduct(url, targetElement, sortBy) {
  axios.get(url)
      .then(response => {
          const data = response.data;
          // Verileri belirtilen şekilde sırala
          const sortedData = data.sort((a, b) => {
              if (sortBy === 'popularity') {
                  return b.popularity - a.popularity;
              } else if (sortBy === 'trend') {
                  return b.trend - a.trend;
              } else if (sortBy === 'year') {
                  return b.year - a.year;
              } else {
                  return 0;
              }
          });
          const paginatedData = sortedData.slice(0, ITEMS_PER_PAGE); // İlk sayfada gösterilecek verileri al
 
          targetElement.innerHTML = ""; // Önceki içeriği temizle
          paginatedData.forEach(item => {
              const box = document.createElement('div');
              box.className = 'col content';
              box.innerHTML = `<img src="${item.image}" alt="img">
                      <h2>${item.name}</h2>
                      <p>${item.popularity} </p>
                      <p>${item.trend} </p>
                      <p>${item.year} </p>
                      <div class="basket"><button class="btn" onclick="addToBasket(${item.id})">Add to Basket</button>
                      <i class="fa-solid fa-heart" onclick="wishlist(${item.id})"></i></div>
                  `;
              targetElement.appendChild(box);
          });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}

getProduct('http://localhost:3000/films', trendProducts, 'trend');
getProduct('http://localhost:3000/films', popularProducts, 'popularity');
getProduct('http://localhost:3000/films', releaseDate, 'year');



const seriesProducts = document.getElementById("seriesProducts");

function getProducts(url) {
    axios.get(url)
        .then(response => {
            const data = response.data;

            // seriesNumber değeri 1 olan tüm filmleri filtrele
            const filteredData = data.filter(item => item.seriesNumber === "1");

            // seriesName'e göre filmleri grupla
            const seriesGroupedData = filteredData.reduce((acc, curr) => {
                if (!acc[curr.seriesName]) {
                    acc[curr.seriesName] = [];
                }
                acc[curr.seriesName].push(curr);
                return acc;
            }, {});

            seriesProducts.innerHTML = ""; // Önceki içeriği temizle
            for (const seriesName in seriesGroupedData) {
                const films = seriesGroupedData[seriesName];
                films.forEach(item => {
                    const box = document.createElement('div');
                    box.className = 'col content';
                    box.innerHTML = `<img src="${item.image}" alt="img">
                            <h2>${item.name}</h2>
                            <p>${item.popularity} </p>
                            <p>${item.trend} </p>
                            <p>${item.year} </p>
                            <div class="basket"><button class="btn" onclick="addToBasket(${item.id})">Add to Basket</button>
                            <i class="fa-solid fa-heart" onclick="wishlist(${item.id})"></i></div>
                        `;
                    seriesProducts.appendChild(box);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

getProducts('http://localhost:3000/films');
