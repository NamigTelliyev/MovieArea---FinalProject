
  
  
  
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


  $(document).ready(function() {
    function handleSearchBarVisibility() {
        if ($(window).width() >= 992 && $(window).scrollTop() <= 200) {
            $(".searchBar").show();
        } else {
            $(".searchBar").hide();
        }
    }

    // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde .searchBar'ın görünürlüğünü kontrol et
    $(window).on('load resize', handleSearchBarVisibility);

    $(window).scroll(function() {
        handleSearchBarVisibility(); // Scroll olayı olduğunda .searchBar'ın görünürlüğünü kontrol et
    });
});