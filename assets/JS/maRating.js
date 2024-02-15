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
  const ITEMS_PER_PAGE = 30;
  let currentPage = 1;
  
  function getProduct(page) {
    axios
      .get(`http://localhost:3000/films`)
      .then((response) => {
        const data = response.data;
        const sortedData = data.sort((a, b) => b.ma - a.ma);
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const paginatedData = sortedData.slice(start, end);
        products.innerHTML = "";
        paginatedData.forEach((item) => {
          const box = document.createElement("div");
          box.className = "col col-sm-3 col-md-2 col-xl-2 col-lg-2 col-xxl-2 content";
          box.innerHTML = `<a href="#">
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
          products.appendChild(box);
        });
        createPaginationButtons(Math.ceil(data.length / ITEMS_PER_PAGE));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  
  function createPaginationButtons(totalPages) {
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      if (i === currentPage) {
        button.classList.add("active");
        button.disabled = true;
      } else {
        button.addEventListener("click", () => {
          currentPage = i;
          getProduct(currentPage);
          window.scrollTo(0, 0); 
        });
      }
      pagination.appendChild(button);
    }
  }
  getProduct(currentPage);
  
  
  
  
  
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
        box.className = "col col-sm-3 col-md-2 col-xl-2 col-lg-2 col-xxl-2 content";
        box.innerHTML = `<a href="#">
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
        products.appendChild(box);
      });
    });
  }
  