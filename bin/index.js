#!/usr/bin/env node
'use strict';

const tp = process.argv[2];

const types = {
    f: '', j: ''
}

let repeat = process.argv[3] || 1;
let list = false;
if (process.argv[4] && (process.argv[4].toLowerCase() == 'y' || process.argv[4].toLowerCase() == 's')) {
    list = true;
}

if (repeat <= 0) {
    repeat = 1;
}

if (tp && tp in types) {
    for (let r = 0; r != repeat; r++) {
        if (tp == 'f') {
            const multi1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
            const multi2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
            let random = [], result1 = [], resultsum1 = 0, module1, dig1 = 0, result2 = [], resultsum2 = 0, module2, dig2 = 0;

            for (let i = 0; i < 9; i++) {
                random[i] = parseInt(Math.random() * 10);
            }

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
            if (list) {
                console.log(random.join(''));
            } else {
                console.log('CPF Gerado:', random.join(''));
            }
        } else {
            const multi1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
            const multi2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
            let random = [], result1 = [], resultsum1 = 0, module1 = 0, dig1 = 0, result2 = [], resultsum2 = 0, module2 = 0, dig2 = 0;

            for (let i = 0; i < 8; i++) {
                random[i] = parseInt(Math.random() * 10);
            }

            random.push(0, 0, 0, 1);

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
            if (list) {
                console.log(random.join(''));
            } else {
                console.log('CNPJ Gerado:', random.join(''));
            }
        }
    }
} else {
    console.log('Uso: gendoc f|j [quantidade (>1)] [y|n]');
}