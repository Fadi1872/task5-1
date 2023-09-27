const numbers = document.querySelectorAll('.numberHover');
const op = document.querySelectorAll('.operator');
const result = document.querySelector('#res');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const deleteNum = document.querySelector('#delete');

let opClick = false;
let operation = '';

let fNum = '';
let sNum = '';


numbers.forEach(element => {
    element.addEventListener('click', event => {
        result.innerHTML += element.innerHTML;
        (opClick === false)? fNum = result.innerHTML : sNum += element.innerHTML; 
    });
});

op.forEach(element => {
    element.addEventListener('click', event => {
        if(!opClick){
            opClick = true;
            operation = element.innerHTML;
            result.innerHTML += element.innerHTML;
        }
    })
});

equal.addEventListener('click', event => {
    switch (operation) {
        case '+':
            result.innerHTML = Number(fNum) + Number(sNum);
            break;
        case '-':
            result.innerHTML = Number(fNum) - Number(sNum);
            break;
        case '/':
            result.innerHTML = Number(fNum) / Number(sNum);
            break;
        case 'x':
            result.innerHTML = Number(fNum) * Number(sNum);
            break;
    };
    fNum = result.innerHTML;
    sNum = '';
    opClick = false;
});

clear.addEventListener('click', event => {
    result.innerHTML = '';
    fNum = '';
    sNum = '';
    opClick = false;
});

deleteNum.addEventListener('click', event => {
    if(!opClick){
        result.innerHTML = result.innerHTML.slice(0,-1);
        fNum = fNum.slice(0,-1);
    }else{
        let length = result.innerHTML[result.innerHTML.length -1]
        if(length === '+' || length === '/' || length === '-' || length === 'x'){
            result.innerHTML = result.innerHTML.slice(0,-1);
            opClick = false;
        }else{
            result.innerHTML = result.innerHTML.slice(0,-1);
            sNum = sNum.slice(0,-1);
        };
    };
});
