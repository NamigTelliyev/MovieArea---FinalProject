function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");
  video.pause();
  trailer.classList.toggle("active");
}

// function changeBg(bg,title){
//     const banner=document.querySelectorAll('.banner');
//     const contents=document.querySelectorAll('.content');
//     banner.style.background=`url("/assets/Media/Images/${bg}")`;
//     banner.style.backgroundSize='cover';
//     banner.style.backgroundPosition='center';

//     contents.forEach(content=>{
//         content.classList.remove('active');
//         if(content.classList.contains(title)){
//             content.classList.add('active');
//         }
//     });
// }


//!
function changeBg(bg, title) {
  const banners = document.querySelectorAll(".banner");
  const contents = document.querySelectorAll(".content");

  banners.forEach((banner, index) => {
    banner.style.background = `url("/assets/Media/Images/${bg}")`;
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center";

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    contents.forEach((content) => {
      if (content.classList.contains(title)) {
        content.classList.add("active");
      }
    });
  });
}



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
  var categoriesBtn = document.getElementById("categoriesBtn");
  var allCategories = document.querySelector(".allCategories");

  categoriesBtn.addEventListener("click", function() {
      // "allCategories" bölümünün görünürlüğünü değiştir
      if (allCategories.style.display === "none" || allCategories.style.display === "") {
          // "show" sınıfını ekle
          allCategories.classList.add("show");
          // "slideInOut" animasyonunu uygula
          allCategories.style.animation = "slideInOut 0.5s forwards";
          // Animasyon bitince görünürlüğü değiştir
          setTimeout(function() {
              allCategories.style.display = "block";
          }, 100); // Animasyon süresi (0.5 saniye) kadar beklet
      } else {
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
});



