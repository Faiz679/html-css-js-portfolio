function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// CHANGING THEME //
var head = document.head;
var link = document.createElement("link");

link.type = "text/css";
link.rel = "stylesheet";

function themeDefault() {
  link.href = "";
}

function themeBlueArchive() {
  link.href = "blue-archive.css";
}

head.appendChild(link);

function toggleTheme() {
  const themeList = document.querySelectorAll(".theme-icon");
  const themeText = document.querySelector(".theme-text");

  themeList.forEach((n) => {
    n.classList.toggle("open");
  });
  themeText.classList.toggle("theme-p");
}
