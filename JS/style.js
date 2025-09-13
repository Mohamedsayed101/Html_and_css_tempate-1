let menuIcon = document.querySelector(".header .links");
let headerLinks = document.querySelector(".header .header-links");
let upBtn = document.getElementById("up-btn");

// Logic of menu Links
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // علشان الكليك هنا مايتحسبش كأنه برا
  headerLinks.style.display =
    headerLinks.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!menuIcon.contains(e.target)) {
    headerLinks.style.display = "none";
  }
});

// Logic of upBtn
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    upBtn.style.display = "flex";
  } else {
    upBtn.style.display = "none";
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
