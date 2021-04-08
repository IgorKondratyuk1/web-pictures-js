import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import loadPictures from './modules/loadPictures';
import calc from './modules/calc';
import filter from './modules/filter';
import showPicture from './modules/showPicture';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    loadPictures('.styles .row', '.button-styles');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    showPicture('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
});