const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const surname = document.getElementById("surname");
const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const passwordInp = document.getElementById("password");

function signUp(e) {
    e.preventDefault();

    const data = {
        name: nameInput.value,
        surname: surname.value,
        nickname: nickname.value,
        email: email.value,
        password: passwordInp.value
    };

    fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        form.reset();
    })
    .catch(error => {
        console.error("There was a problem with your fetch operation:", error);
    });
}

form.addEventListener("submit", signUp);





let password = document.getElementById('password');
        let togglePassword = document.getElementById('toggle');
        function showHide() {
            if (password.type === 'password') {
                password.setAttribute('type', 'text');
                togglePassword.style.backgroundImage = " url('/assets/Media/Images/eye_on.png')";
            }
            else {
                password.setAttribute('type', 'password');
                togglePassword.style.backgroundImage = " url('/assets/Media/Images/eye_off.png')";
            }
        }
        let passwordTwo = document.getElementById('passwordTwo');
        let togglePasswordTwo = document.getElementById('toggleTwo');
        function showHideTwo() {
            if (passwordTwo.type === 'password') {
                passwordTwo.setAttribute('type', 'text');
                togglePasswordTwo.style.backgroundImage = " url('/assets/Media/Images/eye_on.png')";
            }
            else {
                passwordTwo.setAttribute('type', 'password');
                togglePasswordTwo.style.backgroundImage = " url('/assets/Media/Images/eye_off.png')";
            }
        }





        document.addEventListener('DOMContentLoaded', function () {
            let nicknameInput = document.getElementById('nickname');

            let maxLength = 15;

            nicknameInput.addEventListener('input', function () {
                if (nicknameInput.value.length > maxLength) {
                    nicknameInput.value = nicknameInput.value.slice(0, maxLength);
                    alert("Maximum number of characters reached!");
                }
            });
        });




        document.addEventListener('DOMContentLoaded', function () {
            const restrictedKeyCode = 32;
            const inputElementOne = document.getElementById('nickname');
            const inputElementTwo = document.getElementById('email');
            const inputElementThree = document.getElementById('password');
            const inputElementFour = document.getElementById('passwordTwo');

            inputElementOne.addEventListener('keydown', function (event) {
                if (event.keyCode === restrictedKeyCode) {
                    event.preventDefault();
                    alert("You cannot press the space key!");
                }
            });
            inputElementTwo.addEventListener('keydown', function (event) {
                if (event.keyCode === restrictedKeyCode) {
                    event.preventDefault();
                    alert("You cannot press the space key!");
                }
            });
            inputElementThree.addEventListener('keydown', function (event) {
                if (event.keyCode === restrictedKeyCode) {
                    event.preventDefault();
                    alert("You cannot press the space key!");
                }
            });
            inputElementFour.addEventListener('keydown', function (event) {
                if (event.keyCode === restrictedKeyCode) {
                    event.preventDefault();
                    alert("You cannot press the space key!");
                }
            });
        });


        document.addEventListener('DOMContentLoaded', function () {
            let submitButton = document.getElementById('btn');
            let inputElementOne = document.getElementById('password');

            submitButton.addEventListener('click', function (event) {
                var inputValue = inputElementOne.value;
                var letterRegex = /[a-zA-Z]/;

                if (inputValue.length < 8 || !letterRegex.test(inputValue)) {
                    event.preventDefault();
                    alert("It must be at least 8 characters and contain at least one letter!");
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            let submitButton = document.getElementById('btn');
            let inputElementTwo = document.getElementById('passwordTwo');

            submitButton.addEventListener('click', function (event) {
                let inputValue = inputElementTwo.value;
                let letterRegex = /[a-zA-Z]/;

                if (inputValue.length < 8 || !letterRegex.test(inputValue)) {
                    event.preventDefault();
                    alert("It must be at least 8 characters and contain at least one letter!");
                }
            });
        });





        // Şifrə testiq
        document.addEventListener('DOMContentLoaded', function () {
            let passwordInput = document.getElementById('password');
            let confirmPasswordInput = document.getElementById('passwordTwo');
            let submitButton = document.getElementById('btn');

            confirmPasswordInput.disabled = true;

            passwordInput.addEventListener('input', function (event) {
                let passwordValue = event.target.value;

                if (passwordValue.length > 7) {
                    confirmPasswordInput.disabled = false;
                } else {
                    confirmPasswordInput.disabled = true;
                }
            });

            submitButton.addEventListener('click', function (event) {
                let passwordValue = passwordInput.value;
                let confirmPasswordValue = confirmPasswordInput.value;

                if (passwordValue !== confirmPasswordValue) {
                    event.preventDefault();
                    alert("Passwords do not match!");
                }
            });
        });


        //!
document.addEventListener("DOMContentLoaded", function () {
    let categoriesBtn = document.getElementById("categoriesBtn");
    let allCategories = document.querySelector(".allCategories");
    categoriesBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      if (
        allCategories.style.display === "none" ||
        allCategories.style.display === ""
      ) {
        showMenu();
      } else {
        hideMenu();
      }
    });
    allCategories.addEventListener("click", function (event) {
      event.stopPropagation();
    });
    document.addEventListener("click", function () {
      hideMenu();
    });
    function showMenu() {
      allCategories.classList.add("show");
      allCategories.style.animation = "slideInOut 0.5s forwards";
      setTimeout(function () {
        allCategories.style.display = "block";
      }, 100);
    }
  
    function hideMenu() {
      allCategories.style.animation = "slideOutReverse 0.5s forwards";
      setTimeout(function () {
        allCategories.style.display = "none";
        allCategories.classList.remove("show");
      }, 500);
    }
  });
  
  //!
  document.addEventListener("DOMContentLoaded", function () {
    let categoriesBtnTwo = document.getElementById("categoriesBtnTwo");
    let menuBtn = document.getElementById("menuBtn");
    let allCategories = document.querySelector(".allCategories");
    let allMenu = document.querySelector(".allMenu");
    categoriesBtnTwo.addEventListener("click", function (event) {
      event.stopPropagation();
      if (
        allCategories.style.display === "none" ||
        allCategories.style.display === ""
      ) {
        showCategories();
        if (allMenu.style.display !== "none" && allMenu.style.display !== "") {
          hideMenu();
        }
      } else {
        hideCategories();
      }
    });
    menuBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      if (allMenu.style.display === "none" || allMenu.style.display === "") {
        showMenu();
        if (
          allCategories.style.display !== "none" &&
          allCategories.style.display !== ""
        ) {
          hideCategories();
        }
      } else {
        hideMenu();
      }
    });
    allCategories.addEventListener("click", function (event) {
      event.stopPropagation();
    });
    allMenu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
    document.addEventListener("click", function () {
      hideCategories();
      hideMenu();
    });
    function showCategories() {
      allCategories.classList.add("show");
      allCategories.style.animation = "slideInOut 0.5s forwards";
      setTimeout(function () {
        allCategories.style.display = "block";
      }, 100);
    }
    function hideCategories() {
      allCategories.style.animation = "slideOutReverse 0.5s forwards";
      setTimeout(function () {
        allCategories.style.display = "none";
        allCategories.classList.remove("show");
      }, 500);
    }
    function showMenu() {
      allMenu.classList.add("show");
      allMenu.style.animation = "slideInOut 0.5s forwards";
      setTimeout(function () {
        allMenu.style.display = "block";
      }, 100);
    }
    function hideMenu() {
      allMenu.style.animation = "slideOutReverse 0.5s forwards";
      setTimeout(function () {
        allMenu.style.display = "none";
        allMenu.classList.remove("show");
      }, 500);
    }
  });