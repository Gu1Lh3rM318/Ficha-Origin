var namePlayer = document.getElementById("player");
var nameActor = document.getElementById("personagem");
var birthDate = document.getElementById("idade");
var sClasse = document.getElementById("classe");
var sTril = document.getElementById("trilha");
var sPat = document.getElementById("patente");
var sOri = document.getElementById("origem");
var sAfin = document.getElementById("afinidade");
var damage = document.getElementById("damage");
var body = document.getElementById("body");
var EP = document.getElementById("EP");
var multiply = document.getElementById("increment");
var placeReside = document.getElementById("residencePlace");
var addimg = document.getElementById("add-imagem");
let file = document.getElementById("imgadd");
let photo = document.getElementById("imgPhoto");
var resultado = document.getElementById("resultado");
var number = document.getElementById("number");
var result = document.getElementById("result");
var fundoEscuro = document.getElementById("fundoEscuro");
var dadoGirar = document.querySelector(".diceAppear");
var vidaAtual = document.getElementById("lifeCurrent");
var vidaMaxima = document.getElementById("lifeMax");
var sanidadeAtual = document.getElementById("sanityCurrent");
var sanidadeMaxima = document.getElementById("sanityMax");
var ocultismoAtual = document.getElementById("ocultCurrent");
var ocultismoMaximo = document.getElementById("ocultMax");
//////////////////////////localstorage///////////////
var reader = new FileReader();

function salvar() {
  localStorage.multi = multiply.value;
  localStorage.nameP = namePlayer.value;
  localStorage.nameA = nameActor.value;
  localStorage.bDate = birthDate.value;
  localStorage.dmg = damage.value;
  localStorage.bdy = body.value;
  localStorage.eP = EP.value;
  localStorage.placeR = placeReside.value;
  localStorage.imgR = reader.result;
  localStorage.sC = sClasse.value;
  localStorage.sT = sTril.value;
  localStorage.sP = sPat.value;
  localStorage.sO = sOri.value;
  localStorage.sA = sAfin.value;
}

function carregar() {
  namePlayer.value = data.player;
  nameActor.value = data.name;
  birthDate.value = data.age;
  damage.value = localStorage.dmg;
  body.value = localStorage.bdy;
  EP.value = localStorage.eP;
  multiply.value = localStorage.multi;
  placeReside.value = localStorage.placeR;
  photo.src = localStorage.imgR;
  sClasse.value = localStorage.sC;
  sTril.value = localStorage.sT;
  sPat.value = localStorage.sP;
  sOri.value = localStorage.sO;
  sAfin.value = localStorage.sA;
}

function saveBars() {
  localStorage.lifeC = vidaAtual.value;
  localStorage.lifeM = vidaMaxima.value;
  localStorage.sanityC = sanidadeAtual.value;
  localStorage.sanityM = sanidadeMaxima.value;
  localStorage.ocultC = ocultismoAtual.value;
  localStorage.ocultM = ocultismoMaximo.value;
}

const data = {
  player: localStorage.nameP,
  name: localStorage.nameA,
  age: localStorage.bDate,

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
      type: "Aparência",
      amount: 13,
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
  console.log("Vida Alterada");
  lifeModal.css("display", "block");
});
///////////////////////////sanity/////////////////////
$(".sanityBar").click(function () {
  console.log("Sanidade Alterada");
  sanityModal.css("display", "block");
});
///////////////////////////ocult///////////////////////
$(".ocultBar").click(function () {
  console.log("Ocultismo Alterado");
  ocultModal.css("display", "block");
});
///////////////////////////life///////////////////////
$("#changeLife").submit(function (event) {
  let current = Number($("#lifeCurrent").val());
  const max = Number($("#lifeMax").val());

  if (current > max) {
    alert("A vida atual não pode ser maior que a maxima!");
    current = max;
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
  const max = Number($("#ocultMax").val());

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
  const max = Number($("#sanityMax").val());

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
$("#clear").click(function () {
  localStorage.clear();
  namePlayer.value = "";
  nameActor.value = "";
  birthDate.value = "";
  damage.value = "";
  body.value = "";
  EP.value = "";
  vidaAtual.value = "";
  vidaMaxima.value = "";
  sanidadeAtual.value = "";
  sanidadeMaxima.value = "";
  ocultismoAtual.value = "";
  ocultismoMaximo.value = "";
  multiply.value = "";
  placeReside.value = "";
  photo.src = "character.png";
  sClasse.value = "-";
  sTril.value = "-";
  sPat.value = "-";
  sOri.value = "-";
  sAfin.value = "-";
  salvar();
});

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

var verifyInt = /\d+/g;

$("#EP").blur(function () {
  if ($("#EP").val().match(verifyInt) != null) {
    EP.value = EP.value + "%";
  }
});
$("#EP").focus(function () {
  EP.value = "";
});
$(window).scroll(function(e){ 
  var $el = $('.rollDices');
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 211 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px', 'right': '100px'})
  }
  if ($(this).scrollTop() < 211 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'})
  } 
});
$("#t").click(function () {
  if($(".checkboxs").css({'display':'contents'})){
    console.log('sim');
    $(".checkboxs").css({'display':'none'})
  }
})
$("#i").click(function () {
  if ($(".checkboxs").css({'display':'none'})){
    $(".checkboxs").css({'display':'contents'})
  }
})
