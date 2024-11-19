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

    let currentResult = ''; // 現在の結果を保存

    // 抽選を行う関数
    const drawDestination = () => {
        const areaKeys = Object.keys(areas);
        const selectedArea = areaKeys[Math.floor(Math.random() * areaKeys.length)];
        const subAreaKeys = Object.keys(areas[selectedArea]);
        const selectedSubArea = subAreaKeys[Math.floor(Math.random() * subAreaKeys.length)];
        const cities = areas[selectedArea][selectedSubArea];
        const selectedCity = cities[Math.floor(Math.random() * cities.length)];

        // 結果を表示
        currentResult = `${selectedArea} > ${selectedSubArea} > ${selectedCity}`;
        resultArea.innerHTML = `
            <div>
                <span class="destination-area">${selectedArea}</span><br>
                <span class="destination-subarea">${selectedSubArea}</span><br>
                <span class="city-name">${selectedCity}</span>
            </div>
        `;
    };

    // 抽選開始ボタンの動作
    drawButton.addEventListener('click', () => {
        if (currentResult !== '') {
            popup.classList.remove('hidden'); // 2回目以降はポップアップを表示
        } else {
            drawDestination(); // 初回抽選
        }
    });

    // ポップアップ内の「はい」ボタン
    confirmYes.addEventListener('click', () => {
        popup.classList.add('hidden'); // ポップアップを閉じる
        drawDestination(); // 再抽選
    });

    // ポップアップ内の「いいえ」ボタン
    confirmNo.addEventListener('click', () => {
        popup.classList.add('hidden'); // ポップアップを閉じるのみ
    });
});
