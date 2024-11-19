// プレイヤー名の取得
const getPlayerNames = () => {
    const firstPlace = document.getElementById('first-place').value || '1位のプレイヤー';
    const secondPlace = document.getElementById('second-place').value || '2位のプレイヤー';
    const thirdPlace = document.getElementById('third-place').value || '3位のプレイヤー';
    const fourthPlace = document.getElementById('fourth-place').value || '4位のプレイヤー';
    return { firstPlace, secondPlace, thirdPlace, fourthPlace };
};

// ルーレットを回す関数
const spinRoulette = (type) => {
    const roulette = document.getElementById(`roulette${type === 'prize1' ? 1 : type === 'prize2' ? 2 : 3}`);
    const resultDiv = document.getElementById(`result${type === 'prize1' ? 1 : type === 'prize2' ? 2 : 3}`);
    const { firstPlace, secondPlace, thirdPlace, fourthPlace } = getPlayerNames();
    let resultText = '';

    // アニメーションをリセットしてから再設定
    roulette.style.animation = 'none';
    void roulette.offsetWidth;
    roulette.style.animation = 'spin-animation 2s ease-out';


 setTimeout(() => {
    const rand = Math.random();

    // デザイン付きの結果表示を設定
    if (type === 'prize1') {
        if (rand < 0.17) {
            resultText = `
                <span class="player">${secondPlace}</span>
                <span>→</span>
                <span class="player">${firstPlace}</span>
                <span>💰</span>
                <span class="amount">15,000円</span>
            `;
        } else if (rand < 0.50) {
            resultText = `
                <span class="player">${thirdPlace}</span>
                <span>→</span>
                <span class="player">${firstPlace}</span>
                <span>💰</span>
                <span class="amount">15,000円</span>
            `;
        } else {
            resultText = `
                <span class="player">${fourthPlace}</span>
                <span>→</span>
                <span class="player">${firstPlace}</span>
                <span>💰</span>
                <span class="amount">15,000円</span>
            `;
        }
    } else if (type === 'prize2') {
        if (rand < 0.14) {
            resultText = `
                <span class="player">${firstPlace}</span>
                <span>→</span>
                <span class="player">${secondPlace}</span>
                <span>💰</span>
                <span class="amount">7,500円</span>
            `;
        } else if (rand < 0.57) {
            resultText = `
                <span class="player">${thirdPlace}</span>
                <span>→</span>
                <span class="player">${secondPlace}</span>
                <span>💰</span>
                <span class="amount">7,500円</span>
            `;
        } else {
            resultText = `
                <span class="player">${fourthPlace}</span>
                <span>→</span>
                <span class="player">${secondPlace}</span>
                <span>💰</span>
                <span class="amount">7,500円</span>
            `;
        }
    } else if (type === 'prize3') {
        const chosenPlayer = [firstPlace, secondPlace, thirdPlace, fourthPlace][Math.floor(rand * 4)];
        resultText = `
            <span class="player">${chosenPlayer}</span>
            <span>が</span>
            <span class="amount">没収された全てのチップ</span>
            <span>を受け取ります。</span>
        `;
    }

    resultDiv.innerHTML = resultText; // 結果をHTMLに挿入
    resultDiv.style.visibility = 'visible';
}, 2000);


// ルール説明の表示・非表示切り替え
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-rules');
    const rulesList = document.getElementById('rules-list');

    toggleButton.addEventListener('click', () => {
        if (rulesList.classList.contains('hidden')) {
            rulesList.classList.remove('hidden');
            toggleButton.textContent = 'ルールを非表示';
        } else {
            rulesList.classList.add('hidden');
            toggleButton.textContent = 'ルールを表示';
        }
    });
});

