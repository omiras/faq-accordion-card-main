
var acc = document.querySelectorAll(".faq__question");
console.log(acc);
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */

    // hide all other questions
    var questionOpen = document.querySelector(".active");
    if (questionOpen && questionOpen !== this) {
      hideElement(questionOpen);
    }

    toggleElementVisibility(this);



  });
}
function hideElement(element) {
  console.dir(element);
  element.classList.remove("active");
  element.querySelector(".faq__arrow").classList.remove("upsidedown");
  element.querySelector("p").classList.remove("selected");
  element.nextElementSibling.style.display = "none";
}

function toggleElementVisibility(element) {
  element.classList.toggle("active");
  element.querySelector(".faq__arrow").classList.toggle("upsidedown");
  element.querySelector("p").classList.toggle("selected");

  /* Toggle between hiding and showing the active panel */
  var panel = element.nextElementSibling;
  console.log("pannel:" + panel);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
    // hide all other panels
  }
}