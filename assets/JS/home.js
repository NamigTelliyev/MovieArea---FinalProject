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



$(document).ready(function() {
  $(".toggleHamburger").click(function() {
    $(".navbarHamburger").toggleClass("active");
  });
});