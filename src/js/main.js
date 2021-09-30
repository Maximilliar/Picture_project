import modals from "./modals/modals";
import sliders from "./modals/sliders";
import forms from "./modals/forms";
import mask from "./modals/mask";
import checkTextInputs from "./modals/checkTextInputs";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical', '', '');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
});