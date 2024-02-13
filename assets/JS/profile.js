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
  
  //!
  