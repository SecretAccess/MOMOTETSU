// ルーレットの結果を決定する関数
const spinRoulette = (type) => {
    const roulette = document.getElementById(`roulette${type === 'prize1' ? 1 : type === 'prize2' ? 2 : 3}`);
    const resultDiv = document.getElementById(`result${type === 'prize1' ? 1 : type === 'prize2' ? 2 : 3}`);
    let resultText = '';

    // ルーレットを回転させるアニメーションを追加
    roulette.style.animation = 'spin 2s ease-out';

    // 2秒後に結果を表示
    setTimeout(() => {
        if (type === 'prize1') {
            const rand = Math.random();
            if (rand < 0.17) {
                resultText = '2位が当選しました！';
            } else if (rand < 0.50) {
                resultText = '3位が当選しました！';
            } else {
                resultText = '4位が当選しました！';
            }
        }

        if (type === 'prize2') {
            const rand = Math.random();
            if (rand < 0.14) {
                resultText = '1位が当選しました！';
            } else if (rand < 0.57) {
                resultText = '3位が当選しました！';
            } else {
                resultText = '4位が当選しました！';
            }
        }

        if (type === 'prize3') {
            const rand = Math.random();
            if (rand < 0.25) {
                resultText = '1位が当選しました！';
            } else if (rand < 0.50) {
                resultText = '2位が当選しました！';
            } else if (rand < 0.75) {
                resultText = '3位が当選しました！';
            } else {
                resultText = '4位が当選しました！';
            }
        }

        // 結果を表示
        resultDiv.textContent = resultText;
        resultDiv.style.visibility = 'visible';
        roulette.style.animation = ''; // アニメーションをリセット
    }, 2000); // 2秒後に表示
};
