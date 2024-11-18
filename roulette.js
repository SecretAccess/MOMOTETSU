const spinRoulette = (type) => {
    const roulette = document.getElementById(`roulette${type === 'prize1' ? 1 : type === 'prize2' ? 2 : 3}`);
    const resultDiv = document.getElementById(`result${type === 'prize1' ? 1 : type === 'prize2' ? 2 : 3}`);
    let resultText = '';

    // アニメーションをリセットしてから再設定
    roulette.style.animation = 'none';
    void roulette.offsetWidth; // 強制的にリフロー
    roulette.style.animation = 'spin 3s cubic-bezier(0.25, 0.1, 0.25, 1)';

    // 3秒後に結果を表示
    setTimeout(() => {
        const rand = Math.random();
        
        if (type === 'prize1') {
            if (rand < 0.17) {
                resultText = '2位が当選しました！';
            } else if (rand < 0.50) {
                resultText = '3位が当選しました！';
            } else {
                resultText = '4位が当選しました！';
            }
        } else if (type === 'prize2') {
            if (rand < 0.14) {
                resultText = '1位が当選しました！';
            } else if (rand < 0.57) {
                resultText = '3位が当選しました！';
            } else {
                resultText = '4位が当選しました！';
            }
        } else if (type === 'prize3') {
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
    }, 3000); // 3秒後に結果を表示
};
