// ルーレットの結果を決定する関数
const spinRoulette = (type) => {
    let result;
    
    if (type === 'prize1') {
        // 特別賞①：2位 17％、3位 33％、4位 50％
        const rand = Math.random();
        if (rand < 0.17) {
            result = '2位が当選しました！';
        } else if (rand < 0.50) {
            result = '3位が当選しました！';
        } else {
            result = '4位が当選しました！';
        }
        document.getElementById('result1').textContent = result;
    }

    if (type === 'prize2') {
        // 特別賞②：1位 14％、3位 43％、4位 43％
        const rand = Math.random();
        if (rand < 0.14) {
            result = '1位が当選しました！';
        } else if (rand < 0.57) {
            result = '3位が当選しました！';
        } else {
            result = '4位が当選しました！';
        }
        document.getElementById('result2').textContent = result;
    }

    if (type === 'prize3') {
        // 特別賞③：全プレイヤー均等に25％
        const rand = Math.random();
        if (rand < 0.25) {
            result = '1位が当選しました！';
        } else if (rand < 0.50) {
            result = '2位が当選しました！';
        } else if (rand < 0.75) {
            result = '3位が当選しました！';
        } else {
            result = '4位が当選しました！';
        }
        document.getElementById('result3').textContent = result;
    }
};
