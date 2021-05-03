var titulo = document.querySelector(".titulo");
titulo.textContent = "Nova Aparecida Nutrições";

titulo.addEventListener("click", mostraMensagem);
// função nomeada
function mostraMensagem() {
    console.log("Fui Clicado!");
}

// escutando clique com função anônima
titulo.addEventListener("click", function(){
    console.log("fui clicado em uma função anônima.");
});

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = calculaImc(peso, altura);

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        paciente.querySelector(".info-imc").textContent = 'Peso Inválido';
        paciente.classList.add("paciente-invalido");
    } 

    if (!alturaValida) {
        paciente.querySelector(".info-imc").textContent = 'Altura Inválida';
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoValido && alturaValida) {
        paciente.querySelector(".info-imc").textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false
    }
}


function validaPesoEmBranco(peso) {
    if (peso.length != 0) {
        return true;
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false
    }
}

function validaNome(nome) {
    if (nome.length != 0) {
        return true;
    } else {
        return false
    }
}

function validaGordura(gordura) {
    if (gordura.length != 0) {
        return true;
    } else {
        return false
    }
}

