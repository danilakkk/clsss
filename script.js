// 1

let i = 1;

for (i = 1; i <= 50; i++) {
    console.log(i);
}

let d = 8;

for (i = d; i <= 35; i++) {
    console.log(i);
}

// 2

let r = 11;

while (r <= 81) {
    console.log(r);
    r++;
}

// 3

let sum3 = 0;

for (let i = 0; i <= 100; i++) {
    sum3 += i;
}
console.log(sum3);

// 4

let a = 5;
sum = 0;

for (i = 1; i <= a; i++) {
    sum = 0;
    for (let t = 1; t <= i; t++) {
        sum += t;
    }

    console.log('Summa' + i + '=' + sum);
}

// 5

let l = 8;

for (i = l; i <= 56; i++) {
    if (i % 2 == + 0) {
        console.log(i);
    }
}

// 6

for (let x = 1; x <= 10; x++) {
    for (let s = 1; s <= 10; s++) {
        document.write(`${x} * ${s} = ${x * s} <br/>`);
    }
    document.write(`<br/>`);
}

// 7 

let n = 1000;
let numb = 0;

while (n >= 50) {
    n = n / 2;
    numb++;
}
console.log(n);
console.log(numb);

// 8

let sum4 = 0;
let countt = 0;

while (true) {
    let mass = prompt('Введите нужные вам числа');

    if (mass === '' || mass === '0') {
        break;
    }

    let nmbr = parseFloat(mass);


    if (isNaN(nmbr)) {
        console.log('Произошла ошибка');
        continue;
    }

    sum4 += nmbr;
    countt++;
}

let obsharef = sum4 / countt;
console.log('Общая сумма ' + '= ' + sum4);
console.log('Среднее арифметическое' + '= ' + obsharef);

// 9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let max = -Infinity;
let min = Infinity;
let buf = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        buf += str[i];
    } else {
        buf = +buf;
        if (max < buf) max = buf;
        if (min > buf) min = buf;
        buf = '';
    }
}
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);


// 10.

let msg = prompt('Введите число')
let summa = 0;
let count = 0;
let reverce = '';

for (let i = 0; i < msg.length; i++) {
    console.log([i]);
    summa += +msg[i];
    count += 1;
    reverce = msg[i] + reverce; 
}

console.log(`
Вводится число: ${msg}
Цифр в числе: ${count}
Cумма чисел: ${summa}
Обратный порядок чисел: ${reverce}
`);



