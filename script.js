// =================== Завдання 1 =======================

// let numMin = parseFloat(prompt('Введіть мінімальне число диапазону:'));
// let numMax = parseFloat(prompt('Введіть максимальне число диапазону:'));
// let sum = 0;

// for (i = numMin; i <= numMax; i++) {
//     sum += i;
// }

// alert(`Сумма всіх чисел у заданому диапазоні дорівнює: ${sum}`);


// ========================= Завдання 2 ===========================

// let num1 = parseInt(prompt('Введіть перше число:'));
// let num2 = parseInt(prompt('Введіть друге число:'));
// let num = 1;

// for (i = 1; i <= num1; i++){
//     if (num1 % i === 0 && num2 % i === 0){
//         num = i;
//     }
// }

// alert(`Найбільший спільний дільник дорівнює: ${num}`);


// ========================= Завдання 3 =============================

// let num = parseInt(prompt('Введіть число:'));

// for (i = 1; i <= num; i++){
//     if (num % i === 0){
//         console.log(i);
//     }
// }


// ======================== Завдання 4 ===============================

// let num = prompt('Введіть число:');

// alert(`Кількість чисел у введеному числу дорівнює: ${num.length}`);


// ======================== Завдання 5 ================================

let numberPositive = 0;
let numberNegative = 0;
let numberEven = 0;
let numberOdd = 0;
let numberZero = 0;

for (i = 0; i < 10; i++){
    let number = parseFloat(prompt('Введіть число:'));
    if (number > 0){
        if (number % 2 === 0){
            numberEven += 1;
        }
        else{
            numberOdd += 1;
        }

        numberPositive += 1;
    }

    else if (number < 0){
        if (number % 2 === 0){
            numberEven += 1;
        }
        else{
            numberOdd += 1;
        }

        numberNegative += 1;
    }

    else {
        numberEven += 1;
        numberZero += 1;
    }
}

console.log(` Додатні: ${numberPositive}. \n Від'ємні: ${numberNegative}. \n Парні: ${numberEven}. \n Непарні: ${numberOdd}. \n Нулі: ${numberZero}`);

