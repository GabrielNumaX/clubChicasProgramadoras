const myH1 = document.getElementById('myH1');
const myButton = document.getElementById('myButton');

const helloWorld = () => {
    myH1.innerText = "Hola Mundo!!!";
}

// console.log('Hola Mundo desde la consola!!!');
// ----------------------------------------


// var myVariable = 'Hola Mundo!!! con var';

// let myVariableLet = 'Hola Mundo!!! con let';
// const myVariableConst = 'Hola Mundo!!! con const';

// console.log({myVariable});
// console.log({myVariableLet});
// console.log({myVariableConst});

// myVariableLet = 'nuevo texto en let';

// console.log({myVariableLet});

// const suma = '2';
// const suma2 = '2';

// // console.log('2'+'2');
// // console.log('a'+'b');

// console.log({suma})
// console.log({suma2});

// function sumatoria() {
//     const resultado = parseInt(suma) + parseInt(suma2);
//     console.log({resultado});
// }

// sumatoria();

// texto = 'texto';
// enteros = 2;
// arrays = [0, 1, 2, 4, 5]
// objectos = {key1: 'valor01', key2: 'valor02'};


const sumaConParametros = (num1, num2) => {

    // console.log({num1});
    // console.log({num2});

    const resultado = num1 + num2;
    console.log({resultado});
}

sumaConParametros(2, 3);
sumaConParametros(10, 20);
sumaConParametros(200, 300);

const a = undefined;
const b = null;
const c = 2;


