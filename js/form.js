var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
});

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura)
    }
    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function montaTd(args, classe) {
    var td = document.createElement("td");
    td.textContent = args;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso Inválido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura Inválida!");
    }

    if (!validaNome(paciente.nome)) {
        erros.push("Nome Inválido!");
    }

    if (!validaGordura(paciente.gordura)) {
        erros.push("Porcentagem de Gordura inválida!");
    }

    if (!validaPesoEmBranco(paciente.peso)) {
        erros.push("Peso não pode ser vazio!");
    }
    return erros;
}

