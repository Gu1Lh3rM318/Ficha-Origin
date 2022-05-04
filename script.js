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
}

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
  $("#afinidade").val();
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
  attributes: [
    {
      type: "Agilidade",
      amount: 10,
    },
    {
      type: "Constituição",
      amount: 15,
    },
    {
      type: "Destreza",
      amount: 14,
    },
    {
      type: "Educação",
      amount: 10,
    },
    {
      type: "Força",
      amount: 12,
    },
    {
      type: "Inteligência",
      amount: 11,
    },
    {
      type: "Poder",
      amount: 11,
    },
    {
      type: "Sorte",
      amount: 7,
    },
    {
      type: "Movimento",
      amount: 11,
    },
    {
      type: "Lutar/Briga",
      amount: 12,
    },
    {
      type: "Encontrar",
      amount: 13,
    },
    {
      type: "Escutar",
      amount: 11,
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
$(".lifeBar").click(function () {
  lifeModal.css("display", "block");
});
///////////////////////////sanity/////////////////////
$(".sanityBar").click(function () {
  sanityModal.css("display", "block");
});
///////////////////////////ocult///////////////////////
$(".ocultBar").click(function () {
  ocultModal.css("display", "block");
});
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
  var multiply = Number($("#increment").val());
  var total = aleatorio + multiply;
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
$(".body").ready(`${carregar()}`);
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



$("#EP").blur(function () {
  var verifyInt = /\d+/g;
  if ($("#EP").val().match(verifyInt) != null) {
    EP.value = EP.value + "%"
}});
$("#EP").focus(function () {
  $("#EP").val("");
});
$(window).scroll(function(e){ 
  var $el = $('.rollDices');
  var isPositionFixed = ($el.css('position') == 'sticky');
  if ($(this).scrollTop() > 211 && !isPositionFixed){ 
    $el.css({'position': 'sticky', 'top': '0px', 'margin-right':'390px'})
  }
  if ($(this).scrollTop() < 211 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px', 'margin-right':'0px'})
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

function afinidade(){
  if($("#afinidade").val() == "Conhecimento"){
    console.log("Conhecimento")
    $(".ordem").attr("src", "Conhecimento.png")
  }else if($("#afinidade").val() == "Energia"){
    console.log("Energia")
    $(".ordem").attr("src", "Energia.png")
  }else if ($("#afinidade").val() == "Morte"){
    console.log("Morte")
    $(".ordem").attr("src", "Morte.png")
  }else if($("#afinidade").val() == "Sangue"){
    console.log("Sangue")
    $(".ordem").attr("src", "Sangue.png")
  }else{
    $(".ordem").attr("src", "ordem.png")
  }
}

$("window").ready(function (){afinidade()});
$("#afinidade").change(function(){afinidade()});

$("input").blur(function(){salvar()});
$("#classe").change(function(){salvar()});
$("#trilha").change(function(){salvar()});
$("#patente").change(function(){salvar()});
$("#origem").change(function(){salvar()});
$("#afinidade").change(function(){salvar()});
////////////////////////////////////////////////
/* function rollAtribute (atribute, amount) {
  const diceNumber = rollDice('1d20')
  const diceType = calcDice(amount, diceNumber)
  $('#diceNumber').text(diceNumber)
  $('#diceType').text(diceType)
}
function calcDice(ability, dice) {
  // Não encontrei uma forma mais fácil, então fiz assim

  const table = [
    { normal: 20 },
    { normal: 19, good: 20 },
    { normal: 18, good: 20 },
    { normal: 17, good: 19 },
    { normal: 16, good: 19, extreme: 20 },
    { normal: 15, good: 18, extreme: 20 },
    { normal: 14, good: 18, extreme: 20 },
    { normal: 13, good: 17, extreme: 20 },
    { normal: 12, good: 17, extreme: 20 },
    { normal: 11, good: 16, extreme: 20 },
    { normal: 10, good: 16, extreme: 19 },
    { normal: 9, good: 16, extreme: 19 },
    { normal: 8, good: 15, extreme: 19 },
    { normal: 7, good: 14, extreme: 19 },
    { normal: 6, good: 14, extreme: 18 },
    { normal: 5, good: 13, extreme: 18 },
    { normal: 4, good: 13, extreme: 18 },
    { normal: 3, good: 12, extreme: 18 },
    { normal: 2, good: 12, extreme: 18 },
    { normal: 1, good: 11, extreme: 17 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Extremo'
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  } else if (type.good) {
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  } else if (type.normal) {
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  }
}
function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
} */