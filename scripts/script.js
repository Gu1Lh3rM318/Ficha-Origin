var addimg = document.getElementById("add-imagem");
let file = document.getElementById("imgadd");
let photo = document.getElementById("imgPhoto");
var resultado = document.getElementById("resultado");
var number = document.getElementById("number");
var result = document.getElementById("result");
var fundoEscuro = document.getElementById("fundoEscuro");
var EP = document.getElementById("EP");
//////////////////////////localstorage///////////////
var reader = new FileReader();

function salvar() {
  localStorage.multi = $("#increment").val();
  localStorage.nameP = $("#player").val();
  localStorage.nameA = $("#personagem").val();
  localStorage.bDate = $("#idade").val();
  localStorage.dmg = $("#damage").val();
  localStorage.bdy = $("#body").val();
  localStorage.eP = EP.value;
  localStorage.placeR = $("#residencePlace").val();
  localStorage.imgR = reader.result;
  localStorage.sC = $("#classe").val();
  localStorage.sT = $("#trilha").val();
  localStorage.sP = $("#patente").val();
  localStorage.sO = $("#origem").val();
  localStorage.sA = $("#afinidade").val();
  localStorage.agility = $("#agilidade").val();
  localStorage.power = $("#forca").val();
  localStorage.vigour = $("#vigor").val();
  localStorage.presence = $("#presenca").val();
  localStorage.intellect = $("#intelecto").val();

}

$("window").ready(function () {
  afinidade();soma();carregar()
});
$("#afinidade").change(function () {afinidade()});
$("input").on('keyup',function (){salvar()});
$("#classe").change(function (){salvar()});
$("#trilha").change(function (){salvar()});
$("#patente").change(function (){salvar()});
$("#origem").change(function (){salvar()});
$("#afinidade").change(function (){salvar()});
/* $("#agilidade").blur(function(){salvar()}); */

function carregar() {
  $("#player").val(localStorage.nameP);
  $("#personagem").val(localStorage.nameA);
  $("#idade").val(localStorage.bDate);
  $("#damage").val(localStorage.dmg);
  $("#body").val(localStorage.bdy);
  EP.value =localStorage.eP;
  $("#increment").val(localStorage.multi);
  $("#residencePlace").val(localStorage.placeR);
  photo.src = localStorage.imgR;
  $("#classe").val(localStorage.sC);
  $("#trilha").val(localStorage.sT);
  $("#patente").val(localStorage.sP);
  $("#origem").val(localStorage.sO);
  $("#afinidade").val(localStorage.sA);
  $("#agilidade").val(localStorage.agility);
  $("#forca").val(localStorage.power);
  $("#vigor").val(localStorage.vigour);
  $("#presenca").val(localStorage.presence);
  $("#intelecto").val(localStorage.intellect);
}

function saveBars() {
  localStorage.lifeC = $("#lifeCurrent").val();
  localStorage.lifeM = $("#lifeMax").val();
  localStorage.sanityC = $("#sanityCurrent").val();
  localStorage.sanityM = $("#sanityMax").val();
  localStorage.ocultC = $("#ocultCurrent").val();
  localStorage.ocultM = $("#ocultMax").val();
}

$("#clear").click(function () {
  localStorage.clear();
  $("#player").val("");
  $("#personagem").val("");
  $("#idade").val("");
  $("#damage").val("");
  $("#body").val("");
  $("#EP").val("");
  $("#lifeCurrent").val("");
  $("#lifeMax").val("");
  $("#sanityCurrent").val("");
  $("#sanityMax").val("");
  $("#ocultCurrent").val("");
  $("#ocultMax").val("");
  $("#increment").val("");
  $("#residencePlace").val("");
  photo.src = "character.png";
  $("#classe").val("-");
  $("#trilha").val("-");
  $("#patente").val("-");
  $("#origem").val("-");
  $("#afinidade").val("-");
  $("#agilidade").val("");
  $("#forca").val("");
  $("#vigor").val("");
  $("#presenca").val("");
  $("#intelecto").val("");
  salvar();
});

const data = {
  player: "",
  name: "",
  age: "",

  life: {
    current: localStorage.lifeC,
    max: localStorage.lifeM,
  },
  sanity: {
    current: localStorage.sanityC,
    max: localStorage.sanityM,
  },
  ocultismo: {
    current: localStorage.ocultC,
    max: localStorage.ocultM,
  },

  weapons: [
    {
      name: "Bereta",
      type: "Pistola",
      damage: "2d10",
      numCurrent: 8,
      numMax: 8,
      attack: 5,
      reach: "15 m",
      defect: "",
      area: "",
    },
    {
      name: "Canivete",
      type: "Briga",
      damage: "1d10",
      numCurrent: "",
      numMax: "",
      attack: "1/2",
      reach: "1d4",
      defect: "",
      area: "",
    },
    {
      name: "Canivete",
      type: "Briga",
      damage: "1d10",
      numCurrent: "",
      numMax: "",
      attack: "1/2",
      reach: "1d4",
      defect: "",
      area: "",
    },
  ],

};
///////////////////////////life///////////////////////
$(".lifeBar").css(
  "width",
  `${calculateBar(data.life.current, data.life.max)}%`
);
$("#lifeCount").text(`${data.life.current}/${data.life.max}`);
$("#lifeCurrent").val(data.life.current);
$("#lifeMax").val(data.life.max);
///////////////////////////life///////////////////////
$(".ocultBar").css(
  "width",
  `${calculateBar(data.ocultismo.current, data.ocultismo.max)}%`
);
$("#ocultCount").text(`${data.ocultismo.current}/${data.ocultismo.max}`);
$("#ocultCurrent").val(data.ocultismo.current);
$("#ocultMax").val(data.ocultismo.max);
///////////////////////////sanity/////////////////////
$(".sanityBar").css(
  "width",
  `${calculateBar(data.sanity.current, data.sanity.max)}%`
);
$("#sanityCount").text(`${data.sanity.current}/${data.sanity.max}`);
$("#sanityCurrent").val(data.sanity.current);
$("#sanityMax").val(data.sanity.max);
///////////////////////////sanity/////////////////////
const diceModal = $("#diceAttributes");
const lifeModal = $("#lifeModal");
const sanityModal = $("#sanityModal");
const ocultModal = $("#ocultModal");
///////////////////////////life///////////////////////
$("#changeLife").submit(function (event) {
  let current = Number($("#lifeCurrent").val());
  let max = Number($("#lifeMax").val());

  if (current > max) {
    alert("A vida atual não pode ser maior que a maxima!");
    $("#lifeCurrent").val(max);
  }

  data.life.current = current;
  data.life.max = max;
  $(".lifeBar").css("width", `${calculateBar(current, max)}%`);
  $("#lifeCount").text(`${current}/${max}`);
  event.preventDefault();
  saveBars();
});
///////////////////////////life///////////////////////
$("#changeOcult").submit(function (event) {
  let current = Number($("#ocultCurrent").val());
  let max = Number($("#ocultMax").val());

  if (current > max) {
    alert("O ocultismo atual não pode ser maior que a maxima!");
    current = max;
  }

  data.ocultismo.current = current;
  data.ocultismo.max = max;
  $(".ocultBar").css("width", `${calculateBar(current, max)}%`);
  $("#ocultCount").text(`${current}/${max}`);
  event.preventDefault();
  saveBars();
});
///////////////////////////sanity/////////////////////
$("#changeSanity").submit(function (event) {
  let current = Number($("#sanityCurrent").val());
  let max = Number($("#sanityMax").val());

  if (current > max) {
    alert("A sanidade atual não pode ser maior que a maxima!");
    current = max;
  }

  data.sanity.current = current;
  data.sanity.max = max;
  $(".sanityBar").css("width", `${calculateBar(current, max)}%`);
  $("#sanityCount").text(`${current}/${max}`);
  event.preventDefault();
  saveBars();
});
///////////////////////////sanity/////////////////////
function calculateBar(current, max) {
  if (current > max) {
    return 100;
  } else if (current < 0) {
    return 0;
  } else {
    const value = (100 / max) * current;
    const string = value.toString().split(".")[0];
    const percentage = Number(string);
    return percentage;
  }
}

function sound() {
  var myAudio = document.getElementById("audio");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}
///////////////////////////d20///////////////////////
function D20() {
  var aleatorio = Math.floor(Math.random() * 20 + 1);
  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(360deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
    sound();
  }, 1000);

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(0deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
  }, 5000);
  function DoisSegundos() {
    number.style.display = "block";
    number.innerHTML = aleatorio;
  }
  function DezSegundos() {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
  }
  setTimeout(DoisSegundos, 1000 * 3);
  setTimeout(DezSegundos, 1000 * 5);
}
///////////////////////////d12///////////////////////
function D12() {
  var aleatorio = Math.floor(Math.random() * 12 + 1);
  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(360deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
    sound();
  }, 1000);

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(0deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
  }, 5000);
  function DoisSegundos() {
    number.style.display = "block";
    number.innerHTML = aleatorio;
  }
  function DezSegundos() {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
  }
  setTimeout(DoisSegundos, 1000 * 3);
  setTimeout(DezSegundos, 1000 * 5);
}
///////////////////////////d10///////////////////////
function D10() {
  var aleatorio = Math.floor(Math.random() * 10 + 1);
  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(360deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
    sound();
  }, 1000);

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(0deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
  }, 5000);
  function DoisSegundos() {
    number.style.display = "block";
    number.innerHTML = aleatorio;
  }
  function DezSegundos() {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
  }
  setTimeout(DoisSegundos, 1000 * 3);
  setTimeout(DezSegundos, 1000 * 5);
}
///////////////////////////d8////////////////////////
function D8() {
  var aleatorio = Math.floor(Math.random() * 8 + 1);
  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(360deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
    sound();
  }, 1000);

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(0deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
  }, 5000);
  function DoisSegundos() {
    number.style.display = "block";
    number.innerHTML = aleatorio;
  }
  function DezSegundos() {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
  }
  setTimeout(DoisSegundos, 1000 * 3);
  setTimeout(DezSegundos, 1000 * 5);
}
///////////////////////////d6////////////////////////
function D6() {
  var aleatorio = Math.floor(Math.random() * 6 + 1);
  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(360deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
    sound();
  }, 1000);

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(0deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
  }, 5000);
  function DoisSegundos() {
    number.style.display = "block";
    number.innerHTML = aleatorio;
  }
  function DezSegundos() {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
  }
  setTimeout(DoisSegundos, 1000 * 3);
  setTimeout(DezSegundos, 1000 * 5);
}
///////////////////////////d4////////////////////////
function D4() {
  var aleatorio = Math.floor(Math.random() * 4 + 1);
  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(360deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
    sound();
  }, 1000);

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(0deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
  }, 5000);
  function DoisSegundos() {
    number.style.display = "block";
    number.innerHTML = aleatorio;
  }
  function DezSegundos() {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
  }
  setTimeout(DoisSegundos, 1000 * 3);
  setTimeout(DezSegundos, 1000 * 5);
}
///////////////////////////||////////////////////////
$("#lesion").change(function () {
  if (this.checked) {
    console.log("Modo lesionamento grave ativado!");
  } else {
    console.log("Modo lesionamento grave desativado!");
  }
});

$("#injury").change(function () {
  if (this.checked) {
    console.log("Modo lesionamento ativado!");
  } else {
    console.log("Modo lesionado desativado!");
  }
});

$("#dying").change(function () {
  if (this.checked) {
    console.log("Modo morrendo ativado!");
  } else {
    console.log("Modo morrendo desativado!");
  }
});

$("#traumatized").change(function () {
  if (this.checked) {
    console.log("Modo traumatizado ativado!");
  } else {
    console.log("Modo traumatizado desativado!");
  }
});

$("#crazed").change(function () {
  if (this.checked) {
    console.log("Modo enlouquecido ativado!");
  } else {
    console.log("Modo enlouquecido desativado!");
  }
});
///////////////////////////||////////////////////////
function sanityDice() {
  var aleatorio = Math.floor(Math.random() * 20 + 1);
  /* var multiply = Number($("#increment").val()); */
  var total = aleatorio
  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";
  var current = Number($("#sanityCurrent").val());
  var max = Number($("#sanityMax").val());
  data.sanity.current = current;
  data.sanity.max = max;
  var failureSuccess;

  if (total == "") {
    total = 0;
  }

  if (total >= current) {
    failureSuccess = "Sucesso";
  } else if (total < current) {
    failureSuccess = "Fracasso";
  } else {
  }

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(360deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
    sound();
  }, 1000);

  setTimeout(() => {
    $(".diceAppear").css("transform", "rotate(0deg)");
    $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
  }, 5000);
  function TresSegundos() {
    number.style.display = "block";
    number.innerHTML = total;
    result.style.display = "block";
    result.innerHTML = failureSuccess;
  }
  function CincoSegundos() {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
    result.style.display = "none";
  }
  setTimeout(TresSegundos, 1000 * 3);
  setTimeout(CincoSegundos, 1000 * 5);
}
////////////////////sanityDice///////////////////////
$(".body").ready(carregar());
///////////////////////////||////////////////////////

function imgchange() {
  addimg.style.display = "block";
  fundoEscuro.style.display = "block";
}

file.addEventListener("change", () => {
  addimg.style.display = "none";
  fundoEscuro.style.display = "none";

  reader.onload = () => {
    photo.src = reader.result;
    salvar();
  };
  reader.readAsDataURL(file.files[0]);
});

fundoEscuro.addEventListener("click", () => {
  addimg.style.display = "none";
  fundoEscuro.style.display = "none";
});


//////////%%%%////////////////////////
$("#EP").blur(function () {
  var verifyInt = /\d+/g;
  if ($("#EP").val().match(verifyInt) != null) {
    EP.value = EP.value + "%"
}});
$("#EP").focus(function () {
  $("#EP").val("");
});
//////////%%%%////////////////////////
$(window).scroll(function(e){ 
  var $el = $('.rollDices');
  var isPositionFixed = ($el.css('position') == 'sticky');
  if ($(this).scrollTop() > 211 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'})
  }
  if ($(this).scrollTop() < 211 && isPositionFixed){
    $el.css({'position': 'sticky', 'top': '0px'})
  } 
});
$("#t").click(function () {
  if($(".checkboxs").css({'display':'contents'})){
    $(".checkboxs").css({'display':'none'})
  }
})
$("#i").click(function () {
  if ($(".checkboxs").css({'display':'none'})){
    $(".checkboxs").css({'display':'contents'})
  }
})
/////////////////mudar logo/////////////////////
function afinidade(){
  if($("#afinidade").val() == "Conhecimento"){
    $(".ordem").attr("src", "imagens/Conhecimento.png")
  }else if($("#afinidade").val() == "Energia"){
    $(".ordem").attr("src", "imagens/Energia.png")
  }else if ($("#afinidade").val() == "Morte"){
    $(".ordem").attr("src", "imagens/Morte.png")
  }else if($("#afinidade").val() == "Sangue"){
    $(".ordem").attr("src", "imagens/Sangue.png")
  }else{$(".ordem").attr("src", "imagens/ordem.png")}
}
////////////////////////////////////////////////
var numeros = [];
function novoNumero(index) {
    var sugestao = (Math.round(Math.random() * 20 + 1));
    if (index.value == 1 && sugestao == numeros[0]) sugestao = novoNumero(index.value);
    return sugestao;
}
/////////////rolarAtributos//////////////////////
/* $("#agilityA").click(function rollAttribute(vezes) {
  var vezes = document.getElementById("times1").value;
    if(vezes == "" || vezes == 0){vezes = 1}
  numeros=[]
  for (var i = 0; i < vezes; i++) {
    var numero = novoNumero(i);
    numeros.push(numero);
  }
  var soma = (accumulator, curr) => accumulator + curr;
  var atributoValor = document.getElementById("agilidade")
  var total = numeros.reduce(soma) + Number(atributoValor.value)

  var aleatorio = numeros.length + "d20" + " = " + numeros.reduce(soma) + " + " + atributoValor.value + " = " + total;
    if(Number(atributoValor.value) == ""){aleatorio = total}
    if(Number(atributoValor.value) == "" && vezes >= 2){aleatorio = numeros.length + "d20" + " = " + total}

  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(360deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
      sound();
    }, 1000);

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(0deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
    }, 5000);

    setTimeout(() => {
    number.style.display = "block";
    number.innerHTML = aleatorio;
    }, 1000 * 3);

    setTimeout(() => {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
    }, 1000 * 8);
});

$("#forcaA").click(function rollAttribute(vezes) {
  var vezes = document.getElementById("times2").value;
    if(vezes == "" || vezes == 0){vezes = 1}
  numeros=[]
  for (var i = 0; i < vezes; i++) {
    var numero = novoNumero(i);
    numeros.push(numero);
  }
  var soma = (accumulator, curr) => accumulator + curr;
  var atributoValor = document.getElementById("forca")
  var total = numeros.reduce(soma) + Number(atributoValor.value)

  var aleatorio = numeros.length + "d20" + " = " + numeros.reduce(soma) + " + " + atributoValor.value + " = " + total;
  if(Number(atributoValor.value) == ""){aleatorio = total}
  if(Number(atributoValor.value) == "" && vezes >= 2){aleatorio = numeros.length + "d20" + " = " + total}

  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(360deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
      sound();
    }, 1000);

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(0deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
    }, 5000);

    setTimeout(() => {
    number.style.display = "block";
    number.innerHTML = aleatorio;
    }, 1000 * 3);

    setTimeout(() => {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
    }, 1000 * 8);
});

$("#vigorA").click(function rollAttribute(vezes) {
  var vezes = document.getElementById("times3").value;
    if(vezes == "" || vezes == 0){vezes = 1}
  numeros=[]
  for (var i = 0; i < vezes; i++) {
    var numero = novoNumero(i);
    numeros.push(numero);
  }
  var soma = (accumulator, curr) => accumulator + curr;
  var atributoValor = document.getElementById("vigor")
  var total = numeros.reduce(soma) + Number(atributoValor.value)

  var aleatorio = numeros.length + "d20" + " = " + numeros.reduce(soma) + " + " + atributoValor.value + " = " + total;
  if(Number(atributoValor.value) == ""){aleatorio = total}
  if(Number(atributoValor.value) == "" && vezes >= 2){aleatorio = numeros.length + "d20" + " = " + total}

  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(360deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
      sound();
    }, 1000);

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(0deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
    }, 5000);

    setTimeout(() => {
    number.style.display = "block";
    number.innerHTML = aleatorio;
    }, 1000 * 3);

    setTimeout(() => {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
    }, 1000 * 8);
});

$("#presencaA").click(function rollAttribute(vezes) {
  var vezes = document.getElementById("times4").value;
    if(vezes == "" || vezes == 0){vezes = 1}
  numeros=[]
  for (var i = 0; i < vezes; i++) {
    var numero = novoNumero(i);
    numeros.push(numero);
  }
  var soma = (accumulator, curr) => accumulator + curr;
  var atributoValor = document.getElementById("presenca")
  var total = numeros.reduce(soma) + Number(atributoValor.value)

  var aleatorio = numeros.length + "d20" + " = " + numeros.reduce(soma) + " + " + atributoValor.value + " = " + total;
  if(Number(atributoValor.value) == ""){aleatorio = total}
  if(Number(atributoValor.value) == "" && vezes >= 2){aleatorio = numeros.length + "d20" + " = " + total}

  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(360deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
      sound();
    }, 1000);

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(0deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
    }, 5000);

    setTimeout(() => {
    number.style.display = "block";
    number.innerHTML = aleatorio;
    }, 1000 * 3);

    setTimeout(() => {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
    }, 1000 * 8);
});

$("#intelectoA").click(function rollAttribute(vezes) {
  var vezes = document.getElementById("times5").value;
    if(vezes == "" || vezes == 0){vezes = 1}
  numeros=[]
  for (var i = 0; i < vezes; i++) {
    var numero = novoNumero(i);
    numeros.push(numero);
  }
  var soma = (accumulator, curr) => accumulator + curr;
  var atributoValor = document.getElementById("intelecto")
  var total = numeros.reduce(soma) + Number(atributoValor.value)

  var aleatorio = numeros.length + "d20" + " = " + numeros.reduce(soma) + " + " + atributoValor.value + " = " + total;
  if(Number(atributoValor.value) == ""){aleatorio = total}
  if(Number(atributoValor.value) == "" && vezes >= 2){aleatorio = numeros.length + "d20" + " = " + total}

  resultado.style.display = "grid";
  fundoEscuro.style.display = "block";

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(360deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(360deg)");
      sound();
    }, 1000);

    setTimeout(() => {
      $(".diceAppear").css("transform", "rotate(0deg)");
      $(".diceAppear").css("-webkit-transform", "rotate(0deg)");
    }, 5000);

    setTimeout(() => {
    number.style.display = "block";
    number.innerHTML = aleatorio;
    }, 1000 * 3);

    setTimeout(() => {
    resultado.style.display = "none";
    number.style.display = "none";
    fundoEscuro.style.display = "none";
    }, 1000 * 8);
});
 */
/////////////rolarAtributos//////////////////////
function soma() {
  $("#input-3").val(Number($("#input-1").val()) + Number($("#input-2").val()))
  //////////////////////
  $("#input-6").val(Number($("#input-4").val()) + Number($("#input-5").val()))
  //////////////////////
  $("#input-9").val(Number($("#input-7").val()) + Number($("#input-8").val()))
  //////////////////////
  $("#input-12").val(Number($("#input-10").val()) + Number($("#input-11").val()))
  //////////////////////
  $("#input-15").val(Number($("#input-13").val()) + Number($("#input-14").val()))
  //////////////////////
  $("#input-18").val(Number($("#input-16").val()) + Number($("#input-17").val()))
  //////////////////////
  $("#input-21").val(Number($("#input-19").val()) + Number($("#input-20").val()))
  //////////////////////
  $("#input-24").val(Number($("#input-22").val()) + Number($("#input-23").val()))
  //////////////////////
  $("#input-27").val(Number($("#input-25").val()) + Number($("#input-26").val()))
  //////////////////////
  $("#input-30").val(Number($("#input-28").val()) + Number($("#input-29").val()))
  //////////////////////
  $("#input-33").val(Number($("#input-31").val()) + Number($("#input-32").val()))
  //////////////////////
  $("#input-36").val(Number($("#input-34").val()) + Number($("#input-35").val()))
  //////////////////////
  $("#input-39").val(Number($("#input-37").val()) + Number($("#input-38").val()))
  //////////////////////
  $("#input-42").val(Number($("#input-40").val()) + Number($("#input-41").val()))
  //////////////////////
  $("#input-45").val(Number($("#input-43").val()) + Number($("#input-44").val()))
  //////////////////////
  $("#input-48").val(Number($("#input-46").val()) + Number($("#input-47").val()))
  //////////////////////
  $("#input-51").val(Number($("#input-49").val()) + Number($("#input-50").val()))
  //////////////////////
  $("#input-54").val(Number($("#input-52").val()) + Number($("#input-53").val()))
  //////////////////////
  $("#input-57").val(Number($("#input-55").val()) + Number($("#input-56").val()))
  //////////////////////
  $("#input-60").val(Number($("#input-58").val()) + Number($("#input-59").val()))
  //////////////////////
  $("#input-63").val(Number($("#input-61").val()) + Number($("#input-62").val()))
  //////////////////////
  $("#input-66").val(Number($("#input-64").val()) + Number($("#input-65").val()))

}
/* Soma valores */
$(".outros").on('keyup', soma);
$(".outros").change(soma);
$("[data-first]").on('keyup', soma);
$('[data-first]').change(soma)
//////////////////
