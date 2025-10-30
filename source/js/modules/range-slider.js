import noUiSlider from '../vendor/nouislider.mjs';
const form = document.querySelector('.form')
export function createRangeSlider() {
    if (form) {
        const rangeSlider = document.getElementById('range-slider');
        const minValue = document.getElementById('min-value');
        const maxValue = document.getElementById('max-value');
        console.log('все работает');

        noUiSlider.create(rangeSlider, {
            start: [30, 100],
            connect: true,
            range: {
                'min': 0,
                'max': 100,
            },
            step: 1,
            format: {
                to: value => Math.round(value),
                from: value => Number(value)
            }
        });

        console.log(minValue);
        console.log(maxValue);

        rangeSlider.noUiSlider.on('update', (values, handle) => {
            if (handle === 0) {
                minValue.value = values[0];
            } else {
                maxValue.value = values[1];
            }
        });

        minValue.addEventListener('change', function () {
            var value = parseFloat(this.value);
            if (value >= 0 && value <= 100) {
                rangeSlider.noUiSlider.set([value, null]);
            } else {
                this.value = rangeSlider.noUiSlider.get()[0];  // Восстановить, если значение некорректно
            }
        });

        maxValue.addEventListener('change', function () {
            var value = parseFloat(this.value);
            if (value >= 0 && value <= 100) {
                rangeSlider.noUiSlider.set([null, value]);
            } else {
                this.value = rangeSlider.noUiSlider.get()[1];  // Восстановить, если значение некорректно
            }
        });
    }
}