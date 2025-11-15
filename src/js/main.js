//Cainã Sandes Batista; RM: 568571.

var modal = document.getElementById("modal");
var btFecha = document.getElementById("bt-fecha");
var btAnterior = document.getElementById("bt-anterior");
var btProximo = document.getElementById("bt-proximo");
var indModal = document.getElementById("ind-modal");

var imgModal = document.getElementById("img-modal");
var nomeModal = document.getElementById("nome-modal");
var cargoModal = document.getElementById("cargo-modal");
var formModal = document.getElementById("formacao-modal");
var expModal = document.getElementById("exp-modal");
var softModal = document.getElementById("soft-modal");
var hobbyModal = document.getElementById("hobby-modal");
var odsModal = document.getElementById("ods-modal");

var btRecomendar = document.getElementById("bt-recomendar");
var btMensagem = document.getElementById("bt-mensagem");
var areaMensagem = document.getElementById("area-mensagem");
var campoMensagem = document.getElementById("campo-mensagem");
var btEnviarMensagem = document.getElementById("bt-enviar-mensagem");

var totalPerfis = perfis.length;
var indiceAtual = 0;

function abrirModal(i){
    indiceAtual = i;
    mostrarPerfil(i);
    modal.style.display = "flex";
    areaMensagem.style.display = "none";
}

function fecharModal(){
    modal.style.display = "none";
}

function mostrarPerfil(i){
    var p = perfis[i];

    imgModal.src = p.foto;
    nomeModal.textContent = p.nome;
    cargoModal.textContent = p.cargo;
    formModal.textContent = "Formação: " + p.formacao;
    expModal.textContent = "Experiência: " + p.experiencia;

    var textoSoft = "";
    for (var s = 0; s < p.soft.length; s++){
        if (s > 0){
            textoSoft = textoSoft + ", ";
        }
        textoSoft = textoSoft + p.soft[s];
    }
    softModal.textContent = "Soft skills: " + textoSoft;

    var textoHobby = "";
    for (var h = 0; h < p.hobbies.length; h++){
        if (h > 0){
            textoHobby = textoHobby + ", ";
        }
        textoHobby = textoHobby + p.hobbies[h];
    }
    hobbyModal.textContent = "Hobbies: " + textoHobby;

    odsModal.textContent = "ODS: " + p.ods;
    indModal.textContent = (i + 1) + " / " + totalPerfis;
}

function anterior(){
    indiceAtual = indiceAtual - 1;
    if (indiceAtual < 0){
        indiceAtual = totalPerfis - 1;
    }
    mostrarPerfil(indiceAtual);
}

function proximo(){
    indiceAtual = indiceAtual + 1;
    if (indiceAtual >= totalPerfis){
        indiceAtual = 0;
    }
    mostrarPerfil(indiceAtual);
}

function recomendar(){
    alert("Profissional recomendado com sucesso!");
}

function alternarMensagem(){
    if (areaMensagem.style.display == "block"){
        areaMensagem.style.display = "none";
    } else {
        areaMensagem.style.display = "block";
    }
}

function enviarMensagem(){
    var txt = campoMensagem.value;

    if (txt == ""){
        alert("Digite uma mensagem antes de enviar.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    campoMensagem.value = "";
    areaMensagem.style.display = "none";
}

var perguntaEl = document.getElementById("pergunta");
var opt0 = document.getElementById("opt0");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var btQuiz = document.getElementById("bt-quiz");

var indiceQuiz = 0;
var acertos = 0;
var totalPerguntas = perguntas.length;

function carregarPergunta(i){
    var q = perguntas[i];

    perguntaEl.textContent = (i + 1) + ". " + q.perg;

    opt0.textContent = q.opts[0];
    opt1.textContent = q.opts[1];
    opt2.textContent = q.opts[2];

    var radios = document.getElementsByName("op");
    for (var r = 0; r < radios.length; r++){
        radios[r].checked = false;
    }

    if (i < totalPerguntas - 1){
        btQuiz.textContent = "Próxima";
    } else {
        btQuiz.textContent = "Finalizar";
    }
}

function avaliarQuiz(){
    var radios = document.getElementsByName("op");
    var marcada = -1;

    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked){
            marcada = Number(radios[i].value);
            break;
        }
    }

    if (marcada == -1){
        alert("Escolha uma opção antes de continuar.");
        return;
    }

    if (marcada == perguntas[indiceQuiz].correta){
        acertos = acertos + 1;
    }

    if (indiceQuiz < totalPerguntas - 1){
        indiceQuiz = indiceQuiz + 1;
        carregarPergunta(indiceQuiz);
    } else {
        alert("Você acertou " + acertos + " de " + totalPerguntas + " questões.");
        acertos = 0;
        indiceQuiz = 0;
        carregarPergunta(0);
    }
}

btFecha.onclick = fecharModal;
btAnterior.onclick = anterior;
btProximo.onclick = proximo;
btRecomendar.onclick = recomendar;
btMensagem.onclick = alternarMensagem;
btEnviarMensagem.onclick = enviarMensagem;

btQuiz.onclick = avaliarQuiz;

carregarPergunta(0);
