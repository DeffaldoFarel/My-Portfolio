//navigation scroll

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-12%";
  }
  prevScrollpos = currentScrollPos;
};

//navigation page

const navbut = document.getElementById("navbut");
const home = document.getElementById("homebut");
const about = document.getElementById("aboutbut");
const about2 = document.getElementById("aboutbut2");
const projects = document.getElementById("projectsbut");
const contact = document.getElementById("contactbut");

const homepage = document.getElementById("body");
const aboutpage = document.getElementById("about");
const projectspage = document.getElementById("projects");
const contactpage = document.getElementById("contact");

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function navdown() {
  document.getElementById("navbar").style.top = "0";
}

navbut.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
  setTimeout(navdown, 750);
});
home.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
  homepage.scrollIntoView(true);
  window.scrollBy(0, -150);
  setTimeout(navdown, 750);
});
about.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
  aboutpage.scrollIntoView(true);
  window.scrollBy(0, -100);
  setTimeout(navdown, 750);
});
about2.addEventListener("click", () => {
  aboutpage.scrollIntoView(true);
  window.scrollBy(0, -100);
  setTimeout(navdown, 750);
});
projects.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
  projectspage.scrollIntoView(true);
  window.scrollBy(0, -100);
  setTimeout(navdown, 750);
});
contact.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
  contactpage.scrollIntoView(true);
  window.scrollBy(0, -50);
  setTimeout(navdown, 750);
});
