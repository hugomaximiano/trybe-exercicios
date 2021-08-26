let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.push('Fazer exercicios');
console.log(tasksList.length);



let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro



let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']



let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList); 

tasksList.pop();  // remove a última tarefa
tasksList.shift(2); // .shift permite remover qualquer array pelo index



let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1

//Exercicios 

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = (menu.indexOf('Serviços')+1);

console.log(menuServices);



let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = (menu.indexOf('PortFólio')) ;

console.log(indexOfPortfolio);



let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push = ('Contato');
console.log(menu);



//FOR
var numero = 7;
for (var contador = 1; contador <= 9; contador++) {
    
    console.log(tabela);
}


var listaDeNomes = ("João", "Jose", "Maria", "Aparecida");
for (var indece = 0; indice<listaDeNomes.length; indece++) {
    var mensage = "boas vindas, " + listaDeNomes[indice] + "!";
    console,log(mensagem)
}


let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}



//Exercicios FOR


let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0;index <groceryList.length; index +=1) {
    console.log(groceryList[index]);
}



let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
  console.log(name);
}