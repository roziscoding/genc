#!/usr/bin/env node
'use strict';

const utils = require('./bin/utils');
const core = require('./bin/core');
const tp = process.argv[2];
const types = {
    f: '', j: ''
}

let repeat = process.argv[3] || 1;
let list = false;
if (process.argv[4] && (process.argv[4].toLowerCase() == 'y' || process.argv[4].toLowerCase() == 's')) {
    list = true;
}

if (isNaN(repeat)) {
    utils.showUsage();
}

if (repeat <= 0) {
    repeat = 1;
}

if (tp && tp in types) {
    for (let r = 0; r != repeat; r++) {
        if (tp == 'f') {
            let cpf = core.getCPF();
            if (list) {
                console.log(cpf.join(''));
            } else {
                console.log('CPF Gerado:', cpf.join(''));
            }
        } else {
            let cnpj = core.getCNPJ();
            if (list) {
                console.log(cnpj.join(''));
            } else {
                console.log('CNPJ Gerado:', cnpj.join(''));
            }
        }
    }
} else {
    utils.showUsage();
}