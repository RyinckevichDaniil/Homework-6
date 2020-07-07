function isCharPresent (string, symbol) {
    let search;

    if (symbol.length > 1) {
        return "Введите только один символ";
    }
    for (i = 0; i < string.length; i++) {
        if (string[i] == symbol) {
            search = true;
            break;
        } else {
            search = false;
        }
    }
    return search;
}

function charIndexOf (string, symbol) {
    let search;

    if(symbol.length > 1) {
        return "Введите только один символ";
    }
    for (i = 0; i < string.length; i++) {
        if (string[i] == symbol) {
            search = i;
            break;
        } else {
            search = -1;
        }
    }
    return search;
}

console.log(isCharPresent('Привет', 'е'));
console.log(charIndexOf('Привет', 'е'));
