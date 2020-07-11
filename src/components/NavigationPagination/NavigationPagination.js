import { renderAPI } from '../Main/Main.js';

export let containerPag = document.querySelector('.main-pagination-navigatin');
containerPag.addEventListener('click', cbel);
function cbel(e) {
  event.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    let numberPageActive = Number(e.target.textContent);
    (renderAPI.activePage = numberPageActive),
      // Вызов функции рендера страницы(заимпортированой)
      (containerPag.innerHTML = '');
    renderAPI.infoAllFilm(renderAPI.dataFilmsFlag, numberPageActive);
  }
}

export function pagination(activePage, amontPage) {
  let activePagePrevious1 = activePage - 1;
  let activePagePrevious2 = activePage - 2;

  let activePageNext1 = activePage + 1;
  let activePageNext2 = activePage + 2;

  let layoutCont = document.createElement('div');
  layoutCont.style.margin = '0 auto';
  layoutCont.style.width = 'max-content';
  console.dir(layoutCont);

  layoutCont.insertAdjacentHTML(
    'afterbegin',
    `<button style='background: #ff0; border: 1px solid; margin: 1px'>${activePage}</button>`,
  );

  if (activePagePrevious1 > 0) {
    console.log(activePagePrevious1);
    layoutCont.insertAdjacentHTML(
      'afterbegin',
      `<button style='border: 1px solid; margin: 1px'>${activePagePrevious1}</button>`,
    );
  }
  if (activePagePrevious2 > 0) {
    layoutCont.insertAdjacentHTML(
      'afterbegin',
      `<button style='border: 1px solid; margin: 1px'>${activePagePrevious2}</button>`,
    );
  }

  if (activePageNext1 <= amontPage) {
    layoutCont.insertAdjacentHTML(
      'beforeend',
      `<button style='border: 1px solid; margin: 1px'>${activePageNext1}</button>`,
    );
  }
  if (activePageNext2 <= amontPage) {
    layoutCont.insertAdjacentHTML(
      'beforeend',
      `<button style='border: 1px solid; margin: 1px'>${activePageNext2}</button>`,
    );
  }
  containerPag.insertAdjacentElement('afterbegin', layoutCont);
}
