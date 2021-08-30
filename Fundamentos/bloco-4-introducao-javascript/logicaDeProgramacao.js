let fruits = [3, 4, 10, 1, 12];
let somatoria = 0;

for (let index = 0; index < fruits.length; index+= 1) {
    somatoria = somatoria + fruits[index];  
}
if (somatoria > 15) {
    console.log(somatoria);
  } else {
    console.log('valor menor que 16');
  }
