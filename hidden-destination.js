document.addEventListener('DOMContentLoaded', async () => {
    let areas;

    // JSONデータを読み込む
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

    // 裏目的地を抽選する
    const drawDestination = () => {
        const areaKeys = Object.keys(areas);
        const selectedArea = areaKeys[Math.floor(Math.random() * areaKeys.length)];
        const subAreaKeys = Object.keys(areas[selectedArea]);
        const selectedSubArea = subAreaKeys[Math.floor(Math.random() * subAreaKeys.length)];
        const cities = areas[selectedArea][selectedSubArea];
        const selectedCity = cities[Math.floor(Math.random() * cities.length)];
        currentResult = `${selectedArea} > ${selectedSubArea} > ${selectedCity}`;
        resultArea.textContent = `裏目的地: ${currentResult}`;
    };

    // 抽選ボタンが押されたときの動作
    drawButton.addEventListener('click', () => {
        if (currentResult) {
            popup.classList.remove('hidden');
        } else {
            drawDestination();
        }
    });

    // 「はい」をクリックで再抽選
    confirmYes.addEventListener('click', () => {
        popup.classList.add('hidden');
        drawDestination();
    });

    // 「いいえ」をクリックでポップアップを閉じる
    confirmNo.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});
