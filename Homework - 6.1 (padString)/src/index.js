let stringUser = prompt('Введите вашу информацию');
let length = +prompt('Введите длину строки!');
let symbolic = prompt('Введите символ которым наполнится свободное место строки!');

function padString (string, stringLength, symbol, flag) {
    let newSymbolCount = stringLength - string.length;

    if(symbolic.length === 1) {

        let add = symbol.repeat(newSymbolCount);
        
        return flag ? add + string : string + add;

    } else {
        return string;
    }    

}
console.log(padString(stringUser, length, symbolic, true));
console.log(padString(stringUser, length, symbolic, false));