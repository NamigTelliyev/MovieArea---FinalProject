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



//!
$(document).ready(function() {
  $(".toggleHamburger").click(function(e) {
    e.stopPropagation(); // Bu tıklamanın diğer elementlere ulaşmasını engeller
    $(".navbarHamburger").toggleClass("active");
  });

  // Dokümana herhangi bir yere tıklandığında menünün kapanmasını sağlar
  $(document).click(function(e) {
    if (!$(e.target).closest('.hamburgerMenu').length) {
      $(".navbarHamburger").removeClass("active");
    }
  });
});




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