$(function () {

  // Нашли все заголовки табов по data атрибуту
  const tabHeaders = document.querySelectorAll('[data-tab]');

  // находим все modal-item
  const contentBoxes = document.querySelectorAll('[data-tab-content]');

  tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

      tabHeaders.forEach(function (item) {
        item.classList.remove('active');
      });
     
      this.classList.add('active');
      
        // 1. скрыть всем modal-item
      contentBoxes.forEach(function (item) {
        item.classList.add('hidden');
      });

      // 2. выбратьь нужный modal-item и показываем
      const contentBox = document.querySelector('#' + this.dataset.tab);
      contentBox.classList.remove('hidden');
    });
  });

});