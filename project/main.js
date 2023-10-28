const goBackButton = document.querySelector("#backToTop");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");

const menuItems = document.querySelectorAll("nav ul li a");
const navigation = document.querySelector(".navigation-bar");

//trigger for scroll func
window.onscroll = function () {
  scrollFunction();
};

// code from W3S about scrolling, for two browsers
function scrollFunction() {
  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    ? (goBackButton.style.display = "block")
    : (goBackButton.style.display = "none");

  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ? navigation.classList.add("bg")
    : navigation.classList.remove("bg");
}

const mobMenu = () => {
  for (const item of menuItems) {
    item.addEventListener("click", mobMenu);
  }

  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    navigation.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
    navigation.classList.add("responsive");
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; /* for 2nd broser */
};
goBackButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);

/* window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    author.classList;
  }
}; */
