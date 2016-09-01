'use strict';
const utils = require('./utils');

const getCPF = (random) => {
    random = random || []
    const multi1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const multi2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let result1 = [], resultsum1 = 0, module1, dig1 = 0, result2 = [], resultsum2 = 0, module2, dig2 = 0;

    random = random.length == 9 ? random : utils.getRandom(9);

    for (let j = 0; j < multi1.length; j++) {
        result1.push(multi1[j] * random[j]);
    }

    result1.forEach((el) => {
        resultsum1 += el;
    });

    module1 = resultsum1 % 11;

    if (module1 >= 2) {
        dig1 = 11 - module1;
    }

    random.push(dig1);

    for (let k = 0; k < multi2.length; k++) {
        result2.push(multi2[k] * random[k]);
    }

    result2.forEach((el) => {
        resultsum2 += el;
    });

    module2 = resultsum2 % 11;

    if (module2 >= 2) {
        dig2 = 11 - module2;
    }

    random.push(dig2);
    return random;
}

const getCNPJ = (random) => {
    random = random || [];
    const multi1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const multi2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let result1 = [], resultsum1 = 0, module1 = 0, dig1 = 0, result2 = [], resultsum2 = 0, module2 = 0, dig2 = 0;

    random = random.length == 8 || random.length == 12 ? random : utils.getRandom(8);

    if (random.length < 12) random.push(0, 0, 0, 1);

    for (let j = 0; j < multi1.length; j++) {
        result1.push(multi1[j] * random[j]);
    }

    result1.forEach((el) => {
        resultsum1 += el;
    });

    module1 = resultsum1 % 11;

    if (module1 >= 2) {
        dig1 = 11 - module1;
    }

    random.push(dig1);

    for (let k = 0; k < multi2.length; k++) {
        result2.push(random[k] * multi2[k]);
    }

    result2.forEach((el) => {
        resultsum2 += el;
    });

    module2 = resultsum2 % 11;

    if (module2 >= 2) {
        dig2 = 11 - module2;
    }

    random.push(dig2);
    return random;
}

module.exports = {
    getCPF,
    getCNPJ
}