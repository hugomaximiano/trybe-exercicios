
//exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index+= 1) {    
console.log(numbers[index])
}


//exercicio 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatoria = 0

for (let index = 0; index < numbers.length; index+= 1) {
    somatoria = somatoria + numbers[index];
}
console.log(somatoria);



//exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatoria = 0;
let media = 0

for (let index = 0; index < numbers.length; index+= 1) {
    somatoria = somatoria + numbers[index];
    media = somatoria / numbers.length;
}
console.log(media);



//exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somatoria = 0;
let media = 0

for (let index = 0; index < numbers.length; index+= 1) {
    somatoria = somatoria + numbers[index];
    media = somatoria / numbers.length;   
}
if (media > 20) {
console.log("media " + media + " maior que 20");
}
else {
    console.log("media " + media + " menor ou igual a 20")
}



//Exercicio 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggerNumber = numbers[0];

for (let index = 1; index < numbers.length; index+=1) {
    if (biggerNumber < numbers[index]){
biggerNumber = numbers[index];
    }   
}
console.log(biggerNumber);




