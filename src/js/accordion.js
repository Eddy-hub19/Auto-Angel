// this logic should be inside 'DOMContentLoaded' as well
// it's better to move this logic to some function and call
let acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

// for 2 accordion

document.addEventListener('DOMContentLoaded', function () {
  // same here wrap logic with function and call it
  let accordionToggles = document.querySelectorAll('.accordion-header');

  accordionToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      let accordionItem = this.parentNode;
      accordionItem.classList.toggle('active');

      let accordionContent = accordionItem.querySelector('.accordion-content');
      if (accordionContent.style.display === 'flex') {
        accordionContent.style.display = 'none';
      } else {
        accordionContent.style.display = 'flex';
      }
    });
  });
});
