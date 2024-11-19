// 初期化
let forfeitData = {
    nozomu: 0,
    madoka: 0,
    hikaru: 0,
    chie: 0
};

// ローカルストレージからデータを取得
const loadForfeitData = () => {
    const storedData = JSON.parse(localStorage.getItem('forfeitData'));
    if (storedData) {
        forfeitData = storedData;
    }
};

// ローカルストレージにデータを保存
const saveForfeitData = () => {
    localStorage.setItem('forfeitData', JSON.stringify(forfeitData));
};

// 表示を更新する関数
const updateDisplay = () => {
    document.getElementById('nozomu-amount').textContent = `${forfeitData.nozomu}Pt`;
    document.getElementById('madoka-amount').textContent = `${forfeitData.madoka}Pt`;
    document.getElementById('hikaru-amount').textContent = `${forfeitData.hikaru}Pt`;
    document.getElementById('chie-amount').textContent = `${forfeitData.chie}Pt`;

    const totalAmount = forfeitData.nozomu + forfeitData.madoka + forfeitData.hikaru + forfeitData.chie;
    document.getElementById('total-amount').textContent = `${totalAmount}Pt`;

    saveForfeitData();
};

// 増減関数
const incrementForfeit = (player) => {
    forfeitData[player] += 300;
    updateDisplay();
};

const decrementForfeit = (player) => {
    if (forfeitData[player] >= 300) {
        forfeitData[player] -= 300;
    }
    updateDisplay();
};

// イベントリスナーの設定関数
const setupEventListeners = () => {
    document.getElementById('increment-nozomu').addEventListener('click', () => incrementForfeit('nozomu'));
    document.getElementById('decrement-nozomu').addEventListener('click', () => decrementForfeit('nozomu'));

    document.getElementById('increment-madoka').addEventListener('click', () => incrementForfeit('madoka'));
    document.getElementById('decrement-madoka').addEventListener('click', () => decrementForfeit('madoka'));

    document.getElementById('increment-hikaru').addEventListener('click', () => incrementForfeit('hikaru'));
    document.getElementById('decrement-hikaru').addEventListener('click', () => decrementForfeit('hikaru'));

    document.getElementById('increment-chie').addEventListener('click', () => incrementForfeit('chie'));
    document.getElementById('decrement-chie').addEventListener('click', () => decrementForfeit('chie'));
};

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    loadForfeitData();
    updateDisplay();
    setupEventListeners();
});
