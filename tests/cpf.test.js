'use strict';

const expect = require('chai').expect;
const core = require('../bin/core');

describe('Teste de CPF', () => {
    describe('CPF sempre é gerado', () => {
        it('Espera um CPF aleatório caso random não seja informado', () => {
            expect(core.getCPF().length).to.equal(11);
        });
        it('Espera um CPF aleatório caso random seja inválido', () => {
            expect(core.getCPF([1, 2, 3]).length).to.equal(11);
        });
    });

    describe('CPF Válido', () => {
        it('Espera que o CPF gerado seja válido', () => {
            let cpf = core.getCPF([4, 2, 7, 5, 3, 6, 7, 3, 0]);
            expect(cpf[9]).to.equal(8);
            expect(cpf[10]).to.equal(0);
        });
    });
});