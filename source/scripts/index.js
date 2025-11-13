/* в этот файл добавляет скрипты*/
document.addEventListener('DOMContentLoaded', (event) => {

  const navElement = document.querySelector('.main-nav');
  const toggleButton = document.querySelector('.main-header__toggle');

  if (navElement && toggleButton) {

    toggleButton.addEventListener('click', () => {

      navElement.classList.toggle('main-nav--close');
      navElement.classList.toggle('main-nav--open');

      toggleButton.classList.toggle('toggle--active');

      const isMenuOpen = navElement.classList.contains('main-nav--open');
      toggleButton.setAttribute('aria-label', isMenuOpen ? 'Закрыть меню' : 'Открыть меню');

    });

  }
});
