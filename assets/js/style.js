const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const menuList = $$('.menu__item');
menuList.forEach((menuItem, index) => {
  menuItem.onclick = function () {
    $('.menu__item--active').classList.remove(
      'menu__item--active'
    );
    this.classList.add('menu__item--active');
  };
});
