let center = [59.93863106417265, 30.323036499999905];
function init() {
    let map = new ymaps.Map('map', {
        center,
        zoom: 17,
        controls: [],
        behaviors: ['drag', 'scrollZoom', 'multiTouch']
    })
    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/content/map-pin.png',
        iconImageSize: [56, 56],
        iconImageOffset: [-28, -56]
    });

    map.geoObjects.add(placemark);
}
ymaps.ready(init)