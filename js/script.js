
window.addEventListener('load', () => {
    const scene = document.querySelector('a-scene');
    const data = JSON.parse(document.querySelector('#data').getAttribute('src'));

    // Assuming data is an array of objects like { id: "hiro", type: "Temperature", value: "20°C" }
    data.forEach(datum => {
        let marker = document.createElement('a-marker');
        marker.setAttribute('preset', datum.id);
        marker.innerHTML = `
            <a-box position="0 0.5 0" material="opacity: 0.75; side: double; color: ${getColor(datum.type)};"></a-box>
            <a-text value="${datum.type}: ${datum.value}" position="0 1.5 0" scale="2 2 2" color="white"></a-text>
        `;
        scene.appendChild(marker);
    });
});

function getColor(type) {
    switch (type) {
        case 'Temperature': return 'red';
        case 'Humidity': return 'blue';
        case 'Air Quality': return 'green';
        default: return 'gray';
    }
}
