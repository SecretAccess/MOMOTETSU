// 初期化
let blackCount = 0;
let whiteCount = 0;
let colorCount = 0;

// ローカルストレージからデータを取得する関数
const loadCounts = () => {
    blackCount = Number(localStorage.getItem('blackCount')) || 0;
    whiteCount = Number(localStorage.getItem('whiteCount')) || 0;
    colorCount = Number(localStorage.getItem('colorCount')) || 0;
};

// ローカルストレージにデータを保存する関数
const saveCounts = () => {
    localStorage.setItem('blackCount', blackCount);
    localStorage.setItem('whiteCount', whiteCount);
    localStorage.setItem('colorCount', colorCount);
};

// 表示を更新する関数
const updateDisplay = () => {
    document.getElementById('black-count').textContent = blackCount;
    document.getElementById('white-count').textContent = whiteCount;
    document.getElementById('color-count').textContent = colorCount;

    const blackTotal = blackCount * 1000;
    const whiteTotal = whiteCount * 500;
    const colorTotal = colorCount * 300;

    document.getElementById('black-total').textContent = `${blackTotal}円`;
    document.getElementById('white-total').textContent = `${whiteTotal}円`;
    document.getElementById('color-total').textContent = `${colorTotal}円`;

    const totalAmount = blackTotal + whiteTotal + colorTotal;
    document.getElementById('total-amount').textContent = `${totalAmount}円`;

    saveCounts();
};

// 振動機能の追加
const vibrate = () => {
    if (navigator.vibrate) {
        navigator.vibrate(50); // 50ミリ秒の振動
    }
};

// 増減関数
const increment = (chip) => {
    if (chip === 'black') blackCount++;
    if (chip === 'white') whiteCount++;
    if (chip === 'color') colorCount++;
    updateDisplay();
    vibrate();
};

const decrement = (chip) => {
    if (chip === 'black' && blackCount > 0) blackCount--;
    if (chip === 'white' && whiteCount > 0) whiteCount--;
    if (chip === 'color' && colorCount > 0) colorCount--;
    updateDisplay();
    vibrate();
};

// ページ読み込み時にデータを読み込む
document.addEventListener('DOMContentLoaded', () => {
    loadCounts();
    updateDisplay();

    // タッチイベントの誤反応防止設定
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('touchstart', (event) => {
            event.preventDefault(); // ダブルタップズームを防止
        });

        // ボタンタップ時に振動機能を追加
        button.addEventListener('click', vibrate);
    });
});
