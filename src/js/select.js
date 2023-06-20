if (typeof require !== 'undefined') {
  var customSelect = require("custom-select").default;
  require("../../node_modules/custom-select/build/");
}


const mySelects = customSelect("select");

document.querySelector(".custom-select-opener").addEventListener("click", function() {
  this.parentNode.classList.toggle("is-open");
});