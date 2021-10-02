import modals from "./modals/modals";
import sliders from "./modals/sliders";
import forms from "./modals/forms";
import mask from "./modals/mask";
import checkTextInputs from "./modals/checkTextInputs";
import showMoreStyles from "./modals/showMoreStyles";
import calc from "./modals/calc";
import filter from "./modals/filter";
import pictureSize from "./modals/pictureSize";
import accordion from "./modals/accordion";
import burger from "./modals/burger";
import scrolling from "./modals/scrolling";
import drop from "./modals/drop";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical', '', '');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    scrolling('.pageup');
    drop();
});