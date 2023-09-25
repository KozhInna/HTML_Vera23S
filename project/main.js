const goBackButton = document.querySelector("#backToTop");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");
const header = document.querySelector("header");

//triger for scroll func
window.onscroll = function () {
  scrollFunction();
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; /* for 2nd broser */
};

// code from W#S about scrolling, for two browsers
function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    goBackButton.style.display = "block";
  } else {
    goBackButton.style.display = "none";
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
}

const mobMenu = () => {
  for (const item of menuItems) {
    item.addEventListener("click", mobMenu);
  }

  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; /* for 2nd broser */
};
goBackButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
