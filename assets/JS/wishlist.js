
  
  
  
  //!
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        // Sayfa belirli bir scroll değerinden sonra
        $(".header").addClass("scrollHeader"); // 'scroll' sınıfını ekle
      } else {
        $(".header").removeClass("scrollHeader"); // 'scroll' sınıfını kaldır
      }
    });
  });
  
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
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
          $(".navbarHamburger li:contains('Shop'), .navbarHamburger li:contains('WishList')").remove();
          isExtraItemsAdded = false;
        }
      }
    }
  
    // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde ekstra öğeleri ekleme veya kaldırma
    $(window).on('load resize', addAdditionalItems);
  });
  
  
 
  
  
  
  //!
  $(document).ready(function() {
    function handleSearchBarVisibility() {
      if ($(window).width() >= 992) {
        $(".searchBar").css("display", "flex"); 
      } else {
        $(".searchBar").css("display", "none"); 
      }
    }
    $(window).on('load resize', handleSearchBarVisibility);
  
    $(window).scroll(function () {
      if ($(window).width() < 992) {
        $(".searchBar").hide(); 
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
          "z-index": -1, 
          transition: " 0.4s ease" 
        });
      } else {
        $(".header").css({
          opacity: 1,
          "z-index": 15, 
          transition: " 0.4s ease"
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
          transition: "opacity 0.5s ease" 
        });
      } else {
        $(".navSearch").css({
          opacity: 1,
          "z-index": 15,
          transition: "opacity 0.5s ease" 
        });
      }
    });
  });

  $(document).ready(function() {
    function handleSearchBarVisibility() {
        if ($(window).width() >= 992 && $(window).scrollTop() <= 200) {
            $(".searchBar").show();
        } else {
            $(".searchBar").hide();
        }
    }

    $(window).on('load resize', handleSearchBarVisibility);

    $(window).scroll(function() {
        handleSearchBarVisibility(); 
    });
});




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
              <div class="buton"><button class="btn" onclick="remove(${item.id})">Remove</button>

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





// to remove
function remove(index){
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart))
    getProduct()
}