import noUiSlider from '../vendor/nouislider.mjs';
const form = document.querySelector('.form')
export function createRangeSlider() {
    if (form) {
        const rangeSlider = document.getElementById('range-slider');
        console.log('все работает');

        noUiSlider.create(rangeSlider, {
            start: [30, 10],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            },
            step: 1,
            format: {
                to: value => Math.round(value),
                from: value => Number(value)
            }
        });
    }
}