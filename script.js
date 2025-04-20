function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
};

// CHANGING THEME //
var head = document.head;
var link = document.createElement("link");
  
link.type = "text/css";
link.rel = "stylesheet";

function themeDefault() {
    link.href = "";
};

function themeBlueArchive() {
    link.href = "blue-archive.css";
};

function themeTerraria() {
    link.href = "terraria.css";
};
  
head.appendChild(link);
