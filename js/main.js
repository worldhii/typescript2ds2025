"use strict";
/// <reference path = "pessoa.ts" />
/// <reference path = "aluno.ts" />
var escola;
(function (escola) {
    const btnCalcularMedia = document.getElementById("calcmedia");
    const btnCadastrar = document.getElementById("cad");
    const campoAluno = document.getElementById("campoAluno");
    const campoAno = document.getElementById("campoAno");
    const campoCPF = document.getElementById("campoCPF");
    const campoEndereco = document.getElementById("campoEndereco");
    const campoTel = document.getElementById("campoTel");
    const campoNumMat = document.getElementById("campoNumMatricula");
    const campoCurso = document.getElementById("campoCurso");
    const campoEscola = document.getElementById("campoEscola");
    const campoNt1 = document.getElementById("campoNt1");
    const campoNt2 = document.getElementById("campoNt2");
    const campoNt3 = document.getElementById("campoNt3");
    const campoNt4 = document.getElementById("campoNt4");
    const media = document.getElementById("media");
    let a;
    btnCadastrar.addEventListener("click", () => {
        if (!campoAluno.value ||
            isNaN(campoAno.valueAsNumber) ||
            !campoCPF.value ||
            !campoEndereco.value ||
            !campoTel.value ||
            isNaN(campoNumMat.valueAsNumber) ||
            !campoCurso.value ||
            !campoEscola.value) {
            alert("Por favor, preencha todos os campos corretamente!");
            return;
        }
        a = new escola.Aluno(campoAluno.value, campoAno.valueAsNumber, campoCPF.value, campoEndereco.value, campoTel.value, campoNumMat.valueAsNumber, campoCurso.value, campoEscola.value, parseFloat(campoNt1.value) || 0, parseFloat(campoNt2.value) || 0, parseFloat(campoNt3.value) || 0, parseFloat(campoNt4.value) || 0);
        document.getElementById("nome").textContent = a.nome;
        document.getElementById("ano").textContent = a.anoNasc.toString();
        document.getElementById("idade").textContent = a.calcularIdade(2025).toString();
        document.getElementById("cpf").textContent = a.cpf;
        document.getElementById("endereco").textContent = a.endereco;
        document.getElementById("telefone").textContent = a.tel;
        document.getElementById("numMatricula").textContent = a.matricula.toString();
        document.getElementById("curso").textContent = a.curso;
        document.getElementById("escola").textContent = a.escola;
    });
    btnCalcularMedia.addEventListener("click", () => {
        if (!a) {
            alert("Cadastre o aluno primeiro!");
            return;
        }
        if (isNaN(campoNt1.valueAsNumber) ||
            isNaN(campoNt2.valueAsNumber) ||
            isNaN(campoNt3.valueAsNumber) ||
            isNaN(campoNt4.valueAsNumber)) {
            alert("Preencha as notas somente com números, por favor!");
            return;
        }
        a.nota1 = parseFloat(campoNt1.value) || 0;
        a.nota2 = parseFloat(campoNt2.value) || 0;
        a.nota3 = parseFloat(campoNt3.value) || 0;
        a.nota4 = parseFloat(campoNt4.value) || 0;
        document.getElementById("n1").textContent = a.nota1.toString();
        document.getElementById("n2").textContent = a.nota2.toString();
        document.getElementById("n3").textContent = a.nota3.toString();
        document.getElementById("n4").textContent = a.nota4.toString();
        document.getElementById("media").textContent = a.calcularMedia().toString();
    });
})(escola || (escola = {}));
