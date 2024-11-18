// 初期化
let forfeitAmount = 0;

// ローカルストレージから没収金額を取得
const loadForfeitAmount = () => {
    forfeitAmount = Number(localStorage.getItem('forfeitAmount')) || 0;
};

// ローカルストレージに没収金額を保存
const saveForfeitAmount = () => {
    localStorage.setItem('forfeitAmount', forfeitAmount);
};

// 表示を更新する関数
const updateForfeitDisplay = () => {
    document.getElementById('forfeit-amount').textContent = `${forfeitAmount}円`;
    saveForfeitAmount();
};

// 増減関数
const incrementForfeit = () => {
    forfeitAmount += 300;
    updateForfeitDisplay();
};

const decrementForfeit = () => {
    if (forfeitAmount >= 300) {
        forfeitAmount -= 300;
    }
    updateForfeitDisplay();
};

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    loadForfeitAmount();
    updateForfeitDisplay();

    document.getElementById('increment-forfeit').addEventListener('click', incrementForfeit);
    document.getElementById('decrement-forfeit').addEventListener('click', decrementForfeit);
});
