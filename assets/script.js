let menu = document.querySelector("#menu");
let menuToggle = document.querySelector("#menu-toggle");
let navLinks = document.querySelectorAll(".navlink");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuToggle.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    menu.classList.remove("open");
  });
});

let descriptors = document.querySelectorAll(".descriptor");

let graph = document.querySelector(".graph");
let graphWaypoint = document.querySelector("#graph-wp");

let observer = new IntersectionObserver((entries) => {
  if (entries[0].boundingClientRect.top < 0 + window.outerHeight) {
    graph.classList.add("active");
  }
});

observer.observe(graphWaypoint);

let timelineSections = document.querySelectorAll(".timeline-section");
let experienceContainers = document.querySelectorAll(".experience-container");
let timelineContainer = document.querySelector(".timeline-container");
let dismissExperience = document.querySelector(".dismiss-experience");

timelineSections.forEach((section) => {
  let target = document.querySelector("#" + section.dataset.target);
  section.addEventListener("click", () => {
    timelineContainer.classList.add("hidden");
    target.classList.remove("hidden");
    dismissExperience.classList.remove("hidden");
  });
});

dismissExperience.addEventListener("click", (e) => {
  e.preventDefault();
  timelineContainer.classList.remove("hidden");
  dismissExperience.classList.add("hidden");
  experienceContainers.forEach((experience) => {
    experience.classList.add("hidden");
  });
});
