//navigation scroll

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
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
const projects = document.getElementById("projectsbut");
const contact = document.getElementById("contactbut");

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

navbut.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
});
home.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
});
about.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
});
projects.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
});
contact.addEventListener("click", () => {
  document.getElementById("navpage").classList.toggle("-translate-x-full");
  document.getElementById("body").classList.toggle("overflow-y-hidden");
});
