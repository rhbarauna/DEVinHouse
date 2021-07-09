
//# 1 - Utilizando JavaScript, emita um alerta para o usuário com alguma informação importante.
alert("Este é um exemplo do que ocorre quando usamos a função alert()!");

//# 2 - Utilizando JavaScript, peça a confirmação do usuário ao clicar em algum botão, perguntando se ele deseja realmente realizar aquela ação.
confirm("Este é um exemplo do que ocorre quando usamos a função confirm()!\nVeja que agora temos o botão para cancelar além do botão 'OK'");

//# 3 - Faça com que o navegador do usuário pergunte o nome dele(a). Utilizando o método alert, exiba o nome inserido pelo usuário.
var userName = prompt("Este é um exemplo do que ocorre quando usamos a função prompt()!\n Digite o seu nome");
alert("Olá " + userName);

//# 4 - Pergunte ao usuário: nome (prompt), idade (prompt) e se gosta de praticar algum esporte (confirm). Crie 3 variáveis para guardar as respostas do usuário: uma deve receber um valor textual (string), outra deve receber um valor numérico (number), e outra um valor de verdadeiro ou falso (boolean). Faça com que esses 3 valores sejam exibidos no console do navegador.
var userName2 = prompt("Digite o seu nome novamente");
var userAge = prompt("Digite a sua idade");
var likeSports = confirm("Gosta de praticar esportes?");
console.log("Nome: " + userName2 + " - Idade: " + userAge + " - Gosta de praticar esportes? " + likeSports);

//#5 - Faça 2 prompts ao usuário: no primeiro, pergunte o seu sobrenome. No segundo, pergunte o seu nome. Em seguida, exiba na tela um alert contendo o nome completo do usuário, na ordem correta (ou seja: Nome Sobrenome).
var userSurname = prompt("Digite o seu sobrenome");
var userName3 = prompt("Digite o seu nome novamente");
alert(userName + " " + userSurname);

//#6 - Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um alert contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome.
var userSurname2 = prompt("Digite o seu último sobrenome");
alert("Olá " + userSurname.toUpperCase() + ".\nO seu sobrenome contem " + userSurname.length + " letras");

//#7 - Pergunte o ano atual e o ano de nascimento, exiba na tela a idade. Faça 2 prompts ao usuário: no primeiro, pergunte o ano de nascimento. No segundo, pergunte o ano atual. Em seguida, exiba na tela um alert contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente.
var actualYear = prompt("Qual o ano atual?");
var birthYear = prompt("Em que ano você nasceu?");
alert("Sua idade é " + (+actualYear - parseInt(birthYear)) + " ou " + (parseInt(actualYear) - +birthYear - 1) + " anos");

//#8 - Construa uma calculadora. Faça 3 prompts ao usuário: no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”). No segundo, pergunte o primeiro valor que deseja calcular. No terceiro, o segundo valor que deseja calcular. Em seguida, realize o cálculo e exiba na tela um alert contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário.
var operation = prompt("Qual a operação que vamos realizar? (“+”, “-”, “*” ou “/“)");
var firstValue = prompt("Qual o primeiro valor para a operação");
var secondValue = prompt("Qual o segundo valor para a operação");
var validOperation = true;
var operationResult = 0;
switch (operation) {
  case "+":
    operationResult = +firstValue + +secondValue;
    break;
  case "-":
    operationResult = +firstValue - +secondValue;
    break;
  case "*":
    operationResult = +firstValue * +secondValue;
    break;
  case "/":
    operationResult = +firstValue / +secondValue;
    break;
  default:
    alert("Operação  " + operation + "  não reconhecida");
    validOperation = false;
}

if (validOperation) {
  alert("O resultado do calculo é: " + operationResult);
}

//#9 - Alerte as horas para o usuário. Construa um script que alerta o horário no momento de acesso, no formato “23:59” (HH:mm).
var data = new Date();
var hora = data.getHours();
var minuto = data.getMinutes();
hora = hora <= 9 ? "0" + hora : hora;
minuto = minuto <= 9 ? "0" + minuto : minuto;
alert(hora + ":" + minuto);

//#10 -  Construa uma “calculadora” de P.A. Ao entrar na página, seu script deve realizar 2 prompts ao usuário: um solicitando um “valor inicial”, e outro um valor para a “raíz”. Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela. Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28.
var paFirstValue = prompt("Informe o valor inicial para a P.A.");
var paSecondValue = prompt("Informe o valor para a raiz da P.A.");
var result = [];
for (var i = 0; i < 10; i++) {
  if (i == 0) {
    result.push(+paFirstValue);
    continue;
  }
  result.push(result[result.length - 1] + +paSecondValue);
}
alert(result);