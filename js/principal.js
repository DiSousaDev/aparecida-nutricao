var titulo = document.querySelector(".titulo");
titulo.textContent = "Nova Aparecida Nutrições";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = peso / (altura * altura);

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
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    }

}

titulo.addEventListener("click", mostraMensagem);
// função nomeada
function mostraMensagem() {
    console.log("Fui Clicado!");
}

// escutando clique com função anônima
titulo.addEventListener("click", function(){
    console.log("fui clicado em uma função anônima.");
});

var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adicionar");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    
    
    

});
