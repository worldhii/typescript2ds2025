"use strict";
var escola;
(function (escola) {
    class Pessoa {
        constructor(nome, anoNasc, cpf, endereco, tel) {
            this._nome = nome;
            this._anoNasc = anoNasc;
            this._cpf = cpf;
            this._endereco = endereco;
            this._telefone = tel;
        }
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get anoNasc() {
            return this._anoNasc;
        }
        set anoNasc(anoNasc) {
            this._anoNasc = anoNasc;
        }
        get cpf() {
            return this._cpf;
        }
        set cpf(cpf) {
            this._cpf = cpf;
        }
        get endereco() {
            return this._endereco;
        }
        set endereco(endereco) {
            this._endereco = endereco;
        }
        get tel() {
            return this._telefone;
        }
        set tel(tel) {
            this._telefone = tel;
        }
        calcularIdade(anoAtual) {
            return anoAtual - this._anoNasc;
        }
    }
    escola.Pessoa = Pessoa;
})(escola || (escola = {}));
