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

    document.getElementById('black-total').textContent = `${blackTotal}Pt`;
    document.getElementById('white-total').textContent = `${whiteTotal}Pt`;
    document.getElementById('color-total').textContent = `${colorTotal}Pt`;

    const totalAmount = blackTotal + whiteTotal + colorTotal;
    document.getElementById('total-amount').textContent = `${totalAmount}Pt`;

    saveCounts();
};

// ボタンのクリックイベント設定
const setupEventListeners = () => {
    document.getElementById('increment-black').addEventListener('click', () => increment('black'));
    document.getElementById('decrement-black').addEventListener('click', () => decrement('black'));

    document.getElementById('increment-white').addEventListener('click', () => increment('white'));
    document.getElementById('decrement-white').addEventListener('click', () => decrement('white'));

    document.getElementById('increment-color').addEventListener('click', () => increment('color'));
    document.getElementById('decrement-color').addEventListener('click', () => decrement('color'));
};

// 増減関数
const increment = (chip) => {
    if (chip === 'black') blackCount++;
    if (chip === 'white') whiteCount++;
    if (chip === 'color') colorCount++;
    updateDisplay();
};

const decrement = (chip) => {
    if (chip === 'black' && blackCount > 0) blackCount--;
    if (chip === 'white' && whiteCount > 0) whiteCount--;
    if (chip === 'color' && colorCount > 0) colorCount--;
    updateDisplay();
};

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    loadCounts();
    updateDisplay();
    setupEventListeners();
});
