'use strict';

const expect = require('chai').expect;
const core = require('../bin/core');

describe('Teste de CNPJ', () => {
    describe('CNPJ sempre gerado', () => {
        it('Espera um CPF aleatório caso random não seja informado', () => {
            expect(core.getCNPJ().length).to.equal(14);
        });
        it('Espera um CPF aleatório caso random seja inválido', () => {
            expect(core.getCNPJ([1, 2, 3]).length).to.equal(14);
        });
    });

    describe('CNPJ Válido', () => {
        it('Espera que o CNPJ gerado seja válido', () => {
            let cnpj = core.getCNPJ([1, 1, 4, 4, 4, 7, 7, 7, 0, 0, 0, 1]);
            expect(cnpj[12]).to.equal(6);
            expect(cnpj[13]).to.equal(1);
        });
    });
});