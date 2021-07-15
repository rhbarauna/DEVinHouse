// #  1 - Calcule automaticamente a idade. Faça uma página HTML contendo um label que exiba a mensagem “Insira sua data de nascimento”, um campo de texto que só permita inserir data (dica: input type date) e um botão rotulado “calcular idade”. Programe uma função a ser executada quando o usuário clicar no botão, que faça o cálculo da idade do usuário, e então exiba a idade em um texto na página HTML.
function calculateAge(birthdate){
  var birthdateObj = new Date(birthdate);
  var now = new Date();
  var age = now.getFullYear() - birthdateObj.getFullYear() - 1;
  
  if(now.getMonth() >= birthdateObj.getMonth() && now.getUTCDate() >= birthdateObj.getUTCDate()) {
    age = now.getUTCFullYear() - birthdateObj.getUTCFullYear();
  }

  return age;
}

function calculateAgeButtonAction(){
  var birthdateInputValue = document.querySelector("#birthdate_input").value;
  
  if(!birthdateInputValue) {
    alert('Favor informar uma data válida');
    return;
  }
  var age = calculateAge(birthdateInputValue);
  showAge(age);
}

function showAge(age) {
  var calculateAgeButton = document.querySelector("#calculateAge");
  var p = document.createElement('p')
  p.textContent = "Sua idade é " + age | " anos";
  calculateAgeButton.after(p);
}

// #  2 - Construa uma calculadora simples. Faça uma página HTML contendo 2 campos de texto (dica: input type number), para que o usuário possa inserir, em cada um, o valor que deseja calcular. Coloque também na sua página 4 botões, um indicando soma, outro subtração, outro multiplicação, e outro divisão. Adicione um outro campo de texto, apenas leitura (readonly). Quando o usuário clicar no botão de soma (multiplicação, divisão ou subtração), a sua página deve somar (multiplicar, dividir ou subtrair) os 2 valores inseridos pelo usuário e exibir o resultado no campo de texto readonly. Programe essa interatividade utilizando JavaScript.
var plus = function () { calculate("+") };
var minus = function () { calculate("-") };
var times = function () { calculate("*") };
var division = function () { calculate("/") };

function executeOperation(operation, firstOperand, secondOperand) {
  switch (operation) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      // if (secondOperand == 0) {
      //   return NaN;
      // }
      return firstOperand / secondOperand;
  }
}

function calculate(operation) {
  var firstOperand = +document.getElementById("firstOperand").value;
  var secondOperand = +document.getElementById("secondOperand").value;
  var result = executeOperation(operation, firstOperand, secondOperand);
  document.getElementById("calcResult").value = result;
}

// #  3 - Programe um verificador de números pares. Em uma página HTML, insira um campo de texto para que o usuário insira um número. Programe uma função em JavaScript para verificar se o número inserido pelo usuário é par ou ímpar, e informe o usuário através de um texto na página HTML.
function clearEvenOrOddResul() { 
  document.getElementById('evenOddResult').textContent = "";
}
function evenOrOdd(input) {
  var result = "Este é um número ímpar";

  if (input.value % 2 == 0) {
    result = "Este é um número par";
  }
  document.getElementById('evenOddResult').textContent = result;
}

// # 4 - Faça um relógio. Construa uma página HTML contendo um texto que informa o horário no momento de acesso, no formato “23:59”
function printClockAt(preText, viewer){
  var accessDateTime = new Date();  
  var hour = accessDateTime.getHours();
  var minute = accessDateTime.getMinutes();
  hour = hour <= 9 ? "0" + hour : hour;
  minute = minute <= 9 ? "0" + minute : minute;
  document.querySelector(viewer).innerHTML = preText + " <strong>" + hour + "<span class='blink'>:</span>" + minute + "</strong>";
}
printClockAt("Acessado em:","#clock");

// # 5 - Faça um relógio que atualize automaticamente. Construa uma página HTML contendo um texto que informa o horário atual, no formato “23:59”, e que atualize automaticamente o valor, sempre que mudar o horário.
printClockAt("Hora atual: ", "#updatableClock");
setInterval(printClockAt,1000,"Hora atual: ", "#updatableClock");

// # 6 - Construa uma página que informe a estação do ano no dia de acesso. Sua página deve conter um texto e uma imagem, ambos representando a estação. Ao carregar a página, baseado na data
function getSeasonImageAndTitle() {
  var now = new Date();
  var outonoInicio = new Date("2021-03-20T06:38:00");
  var invernoInicio = new Date("2021-06-21T00:32:00");
  var primaveraInicio = new Date("2021-09-22T16:21:00");
  var veraoInicio = new Date("2021-12-21T12:59:00");

  // Outono: 20 de março de 2021, às 06h38;
  if(now >= outonoInicio && now < invernoInicio) {
    return [
      "OUTONO",
      "url('https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/11/folhas.jpg')"
    ];
  }

  // Inverno: 21 de junho de 2021, às 00h32;
  if(now >= invernoInicio && now < primaveraInicio) {
    return [
      "INVERNO",
      "url('https://s2.glbimg.com/8DbpN34qSdzqkewHGpyAu57yCSg=/0x0:1280x720/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/e/p/PSijiDQMecsNAtNBvmMg/whatsapp-image-2019-07-17-at-08.33.55.jpeg')"
    ];
  }

  // Primavera: 22 de setembro de 2021, às 16h21;
  if(now >= primaveraInicio && now < veraoInicio) {
    return [
      "PRIMAVERA",
      "url('https://www.neoenergia.com/pt-br/te-interessa/meio-ambiente/PublishingImages/fotos/708x324-primavera.jpg')"
    ];
  }

  // Verão: 21 de dezembro de 2021, às 12h59.
  return [
    "VERÃO",
    "url('http://eglu.pontofrio.com.br/wp-content/uploads/2018/12/dicas-verao-2019_destaque-1360x451.jpg')"
  ];
}

function getSeason(){
  var seasonWrapper = document.querySelector("#season");
  var season = getSeasonImageAndTitle();
  seasonWrapper.style["background-image"] = season[1];
  document.querySelector("#season").innerHTML = "<span>"+season[0]+"</span>";
}
getSeason();

// 7 - Faça uma página de “lista de mercado”. Sua página deve possibilitar ao usuário inserir itens em uma lista e exibir a lista atualizada a medida que forem sendo adicionados novos itens. A página deve conter um rótulo (<label>) “Item a adicionar:” seguido de um campo de texto onde o usuário possa digitar o item. Deve conter também um botão “Adicionar”, que no momento do clique do usuário deve inserir o item digitado na lista. Se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto. A página também deve conter uma lista (<select>), que exibirá os itens adicionados pelo usuário.
function addItem() {
  var inputItemValue = document.getElementById("inputItem").value.trim();
  if (!inputItemValue) {
    alert("Favor inserir um item válido")
    return;
  }

  var itemList = document.getElementById("itemList");
  var listChildren = itemList.children;

  for (var i = 0; i < listChildren.length; i++) {
    if (listChildren[i].value == inputItemValue) {
      alert("Item já adicionado na lista");
      return;
    }
  }

  var newOption = document.createElement('option');
  newOption.value = inputItemValue;
  newOption.textContent = inputItemValue;
  itemList.appendChild(newOption);
}

// 8 - Salve a lista de mercado. Utilizando a mesma página do exercício anterior, adicione um novo botão “Salvar lista”. Quando o usuário clicar nesse botão, a lista de itens de mercado deve ser salva no Local Storage do navegador.
function saveList() {
  var itemList = document.getElementById("itemList");
  var listChildren = itemList.children;
  
  if(listChildren.length == 0) {
    alert("Adicione algum item na lista antes de salvar");
    return;
  }

  var itemListValues = [];
  for (var i = 0; i < listChildren.length; i++) {
    itemListValues.push(listChildren[i].value);
  }

  localStorage.setItem("shopList", JSON.stringify(itemListValues));
}

// 9 - Carregue uma lista salva anteriormente. Utilizando a mesma página dos 2 exercícios anteriores [link para os cards], crie um novo botão “Carregar lista”, que ao ser clicado deve buscar no Local Storage se existe uma lista de itens de mercado salva, e em caso positivo deve mostrar os itens no elemento da página. Caso não haja nenhuma lista previamente salva, deve informar o usuário “Não há itens salvos”.
function loadList() {
  var storageList = localStorage.getItem("shopList");

  if(!storageList) {
    alert("Não há itens salvos");
    return;
  }
  var itemList = document.getElementById("itemList");
  var jsonList = JSON.parse(storageList);
  
  jsonList.forEach(function(item){
    var newOption = document.createElement('option');
    newOption.value = item;
    newOption.textContent = item;
    itemList.appendChild(newOption);
  });
}


// 10 - Construa uma “calculadora” de P.A. e P.G. Na página HTML devem existir 2 campos de texto (dica: input type number): um rotulado (label) “valor inicial”, e outro rotulado “raíz”. Também deve ter 2 botões: um rotulado “Calcular P.A.” e outro rotulado “Calcular P.G.”. O evento click de cada botão deve chamar uma função que: verifica se os campos estão preenchidos (dica: length) e, se estiverem vazios, deve mostrar uma mensagem ao usuário pedindo para inserir os valores; caso os campos estejam preenchidos, deve calcular os 10 primeiros valores da sequência e exibir na tela. Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28. P.G. (Progressão Geométrica) é como uma P.A., mas em vez de somar, multiplica-se a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.G. = 1, 3, 9, 27, 81...
function getFieldValue(fieldName, fieldId) {
  var fieldValue = document.getElementById(fieldId).value;
  if (!fieldValue) {
    alert('Favor informar: ' + fieldName);
    return;
  }
  return +fieldValue;
}
function execPaOrPg(initialValue, root, operation) {
  var result = [initialValue];
  for (var i = 0; i < 9; i++) {
    var lastValue = result[result.length - 1];
    result.push(operation(lastValue,root));
  }
  return result;
}
function calculate(operation) {
  var paPgInitialValue = getFieldValue("Valor Inicial", "paPgValue");
  var paPgRootValue = getFieldValue("Raiz", "paPgRoot");
  
  if(!paPgInitialValue || ! paPgRootValue) {
    return;
  }

  return execPaOrPg(paPgInitialValue, paPgRootValue, operation);
}
function calculatePA() {
  var resultPA = calculate(function(element, root) {return element + root;});
  if(!resultPA) {
    return;
  }
  alert("P.A. " + resultPA);
}
function calculatePG() {
  var resultPG = calculate(function(element, root) {return element * root;});
  if(!resultPG) {
    return;
  }
  alert("P.G. " + resultPG);
}