'use strict';
const showUsage = () => {
    console.log('Uso: genc f|j [quantidade (>1)] [y|n]');
    process.exit();
}

const getRandom = (size) => {
    let random = [];
    for (let i = 0; i < size; i++) {
        random[i] = parseInt(Math.random() * 10);
    }
    return random;
}

module.exports = {
    showUsage,
    getRandom
}