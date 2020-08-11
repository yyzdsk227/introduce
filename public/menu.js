(function (window, document) {
  "use strict";

  const $toggles = document.querySelectorAll(".toggle");
  //nodeList라는 유사배열임
  const $toggleBtn = document.getElementById("toggle-btn");

  $toggleBtn.addEventListener("click", () => {
    toggleElements();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      toggleElementsoff();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      console.log("tog1");
      toggle.classList.toggle("on");
    });
  }

  function toggleElementsoff() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove("on");
    });
  }
})(window, document);
