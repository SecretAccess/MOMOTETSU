document.addEventListener('DOMContentLoaded', () => {
    const areas = {
        'ヨーロッパエリア': {
            '北欧': ['コペンハーゲン', 'ヌーク', 'ストックホルム', 'オスロ', 'ヘルシンキ', 'ロヴァニエミ', 'レイキャヴィーク', 'トースハウン'],
            '西欧': ['ベルリン', 'フランクフルト', 'ミュンヘン', 'アムステルダム', 'ブリュッセル', 'パリ', 'ロンドン', 'マンチェスター'],
            // 他エリアを追加
        },
        '北米エリア': {
            'アメリカ合衆国': ['ニューヨーク', 'ワシントンD.C.', 'ロサンゼルス', 'シカゴ'],
            'カナダ': ['トロント', 'モントリオール', 'バンクーバー']
        },
        // 他エリアを追加
    };

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
        currentResult = `${selectedArea} ${selectedSubArea} ${selectedCity}`;
        resultArea.textContent = `裏目的地: ${currentResult}`;
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
