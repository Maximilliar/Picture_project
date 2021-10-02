const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const promocodeBlock = document.querySelector(promocode);
    const resultBlock = document.querySelector(result);

    let sum = 0;

    const calFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));



        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
            resultBlock.style.cssText = `font-size: `;
        } else if (promocodeBlock.value == 'IWANTPOPART') {
            resultBlock.value = Math.round(sum * 0.7);
            resultBlock.innerHTML = `${resultBlock.value} ₽<sup style = "color: red"> -%</sup>`;
            resultBlock.style.cssText = `font-size: 32px`;
        } else {
            resultBlock.textContent = `${sum} ₽`;
            resultBlock.style.cssText = `font-size: 32px`;
        }
    };

    sizeBlock.addEventListener('change', calFunc);
    materialBlock.addEventListener('change', calFunc);
    optionsBlock.addEventListener('change', calFunc);
    promocodeBlock.addEventListener('input', calFunc);
};

export default calc;