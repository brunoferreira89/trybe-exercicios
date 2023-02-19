const body = document.querySelector('body');
const main = document.querySelector('main');

function changeBgColor() {
    const btnBgWhite = document.querySelector('#btn-bg-white');
    btnBgWhite.addEventListener('click', () => {
        body.style.backgroundColor = 'white';
    });
    const btnBgBlack = document.querySelector('#btn-bg-black');
    btnBgBlack.addEventListener('click', () => {
        body.style.backgroundColor = 'black';
    });
    const btnBgGreen = document.querySelector('#btn-bg-green');
    btnBgGreen.addEventListener('click', () => {
        body.style.backgroundColor = 'green';
    });
    const btnBgBlue = document.querySelector('#btn-bg-blue');
    btnBgBlue.addEventListener('click', () => {
        body.style.backgroundColor = 'blue';
    });
    const btnBgYellow = document.querySelector('#btn-bg-yellow');
    btnBgYellow.addEventListener('click', () => {
        body.style.backgroundColor = 'yellow';
    });
};
changeBgColor();

function changeFontColor() {
    const btnFontBlack = document.querySelector('#btn-font-black');
    btnFontBlack.addEventListener('click', () => {
        body.style.color = 'black';
    });
    const btnFontRed = document.querySelector('#btn-font-red');
    btnFontRed.addEventListener('click', () => {
        body.style.color = 'red';
    });
    const btnFontWhite = document.querySelector('#btn-font-white');
    btnFontWhite.addEventListener('click', () => {
        body.style.color = 'white';
    });
};
changeFontColor();

function changeFontSize() {
    const btnFontSize8 = document.querySelector('#btn-font-size-8');
    btnFontSize8.addEventListener('click', () => {
        main.style.fontSize = '8px';
    });
    const btnFontSize10 = document.querySelector('#btn-font-size-10');
    btnFontSize10.addEventListener('click', () => {
        main.style.fontSize = '10px';
    });
    const btnFontSize12 = document.querySelector('#btn-font-size-12');
    btnFontSize12.addEventListener('click', () => {
        main.style.fontSize = '12px';
    });
    const btnFontSize14 = document.querySelector('#btn-font-size-14');
    btnFontSize14.addEventListener('click', () => {
        main.style.fontSize = '14px';
    });
    const btnFontSize20 = document.querySelector('#btn-font-size-20');
    btnFontSize20.addEventListener('click', () => {
        main.style.fontSize = '20px';
    });
};
changeFontSize();

function changeLineHeight () {
    const btnLineHeight1 = document.querySelector('#btn-lineheight-1');
    btnLineHeight1.addEventListener('click', () => {
        main.style.lineHeight = '1px';
    });
    const btnLineHeightNormal = document.querySelector('#btn-lineheight-normal');
    btnLineHeightNormal.addEventListener('click', () => {
        main.style.lineHeight = 'normal';
    });
    const btnLineHeight15 = document.querySelector('#btn-lineheight-1-5');
    btnLineHeight15.addEventListener('click', () => {
        main.style.lineHeight = '1.5px';
    });
    const btnLineHeight2 = document.querySelector('#btn-lineheight-2');
    btnLineHeight2.addEventListener('click', () => {
        main.style.lineHeight = '2px';
    });
    const btnLineHeight3 = document.querySelector('#btn-lineheight-3');
    btnLineHeight3.addEventListener('click', () => {
        main.style.lineHeight = '3px';
    });
};
changeLineHeight();

function changeFontFamily () {
    const btnFontArial = document.querySelector('#btn-font-arial');
    btnFontArial.addEventListener('click', () => {
        body.style.fontFamily = 'Arial';
    });
    const btnFontTimes = document.querySelector('#btn-font-times');
    btnFontTimes.addEventListener('click', () => {
        body.style.fontFamily = 'Times New Roman';
    });
};
changeFontFamily();