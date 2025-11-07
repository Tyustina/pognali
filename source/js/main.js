import { mobileVhFix } from './utils/mobile-vh-fix.js';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';
import { CustomSelect } from './modules/select/custom-select';
import { uploadFile, uploadImageDrop } from './modules/input-file/init-upload';
import './modules/animations.js'
import './modules/map.js'
import './modules/modal.js'
import './modules/nav.js'
import { checkWidth } from './modules/slider.js'
import { switchingNav } from './modules/nav.js';
import { openCloseModal } from './modules/modal.js';
import { openCloseCatalogFilter } from './modules/catalog-filter.js';
import { openCloseFilterGroup, changeLikesIcon } from './modules/catalog-filter.js';
import { createRangeSlider } from './modules/range-slider.js';
import { initEmailValidation } from './modules/form.js';
import { initParallax } from './modules/img-paralax.js';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------
  openCloseCatalogFilter();
  openCloseFilterGroup();
  mobileVhFix();
  checkWidth();
  switchingNav();
  openCloseModal();
  createRangeSlider();
  changeLikesIcon();
  initEmailValidation();
  initParallax();
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {


    // initModals();
    // uploadFile();
    // uploadImageDrop();
    // const select = new CustomSelect();
    // select.init();
    // const form = new Form();
    // window.form = form;
    // form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
