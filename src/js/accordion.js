document.addEventListener('DOMContentLoaded', function () {
  let acc = document.getElementsByClassName('accordion');
  let i;

  for (i = 0; i < acc.length; i++) {
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
