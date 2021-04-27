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

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        paciente.querySelector(".info-imc").textContent = 'Peso Inválido';
        paciente.classList.add("paciente-invalido");
        pesoValido = false;
    } 

    if (altura <= 0 || altura >= 3.00) {
        paciente.querySelector(".info-imc").textContent = 'Altura Inválida';
        paciente.classList.add("paciente-invalido");
        alturaValida = false;
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



