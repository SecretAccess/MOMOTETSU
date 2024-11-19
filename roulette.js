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
    roulette.style.animation = 'spin 2s ease-out';

    setTimeout(() => {
        const rand = Math.random();

        if (type === 'prize1') {
            if (rand < 0.17) {
                resultText = `${secondPlace}が、1位の${firstPlace}に15,000円相当のチップを支払います。`;
            } else if (rand < 0.50) {
                resultText = `${thirdPlace}が、1位の${firstPlace}に15,000円相当のチップを支払います。`;
            } else {
                resultText = `${fourthPlace}が、1位の${firstPlace}に15,000円相当のチップを支払います。`;
            }
        } else if (type === 'prize2') {
            if (rand < 0.14) {
                resultText = `${firstPlace}が、2位の${secondPlace}に7,500円相当のチップを支払います。`;
            } else if (rand < 0.57) {
                resultText = `${thirdPlace}が、2位の${secondPlace}に7,500円相当のチップを支払います。`;
            } else {
                resultText = `${fourthPlace}が、2位の${secondPlace}に7,500円相当のチップを支払います。`;
            }
        } else if (type === 'prize3') {
            const chosenPlayer = [firstPlace, secondPlace, thirdPlace, fourthPlace][Math.floor(rand * 4)];
            resultText = `${chosenPlayer}が、没収された全てのチップを受け取ります。`;
        }

        resultDiv.textContent = resultText;
        resultDiv.style.visibility = 'visible';
    }, 2000);
};

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

