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
    document.getElementById('nozomu-amount').textContent = `${forfeitData.nozomu}円`;
    document.getElementById('madoka-amount').textContent = `${forfeitData.madoka}円`;
    document.getElementById('hikaru-amount').textContent = `${forfeitData.hikaru}円`;
    document.getElementById('chie-amount').textContent = `${forfeitData.chie}円`;

    const totalAmount = forfeitData.nozomu + forfeitData.madoka + forfeitData.hikaru + forfeitData.chie;
    document.getElementById('total-amount').textContent = `${totalAmount}円`;

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

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    loadForfeitData();
    updateDisplay();
});
