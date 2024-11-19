document.addEventListener('DOMContentLoaded', async () => {
    let areas;

    try {
        const response = await fetch('destination-data.json');
        areas = await response.json();
    } catch (error) {
        console.error('データの読み込みに失敗しました:', error);
        return;
    }

    const drawButton = document.getElementById('draw-button');
    const popup = document.getElementById('popup');
    const resultArea = document.getElementById('result');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    let currentResult = '';

    const drawDestination = () => {
    const areaKeys = Object.keys(areas);
    const selectedArea = areaKeys[Math.floor(Math.random() * areaKeys.length)];
    const subAreaKeys = Object.keys(areas[selectedArea]);
    const selectedSubArea = subAreaKeys[Math.floor(Math.random() * subAreaKeys.length)];
    const cities = areas[selectedArea][selectedSubArea];
    const selectedCity = cities[Math.floor(Math.random() * cities.length)];

    // 改行して階層を表示、都市名だけ大きく
    resultArea.innerHTML = `
        <div>
            <span class="destination-area">${selectedArea}</span><br>
            <span class="destination-subarea">${selectedSubArea}</span><br>
            <span class="city-name">${selectedCity}</span>
        </div>
    `;
};



    drawButton.addEventListener('click', () => {
        if (currentResult) {
            popup.classList.remove('hidden');
        } else {
            drawDestination();
        }
    });

    confirmYes.addEventListener('click', () => {
        popup.classList.add('hidden');
        drawDestination();
    });

    confirmNo.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});
