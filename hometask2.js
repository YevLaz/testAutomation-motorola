
// Zadanie 1 - znalezienie minimalnego wsrod 3
function min (a,b,c) {
    if (a<=b && a<=c) {
        return a
    }
    if (b<=a && b<=c) {
        return b
    }
    if (c<=b && c<=a) {
        return c
    }
    else {
        return console.log ('incorrect input')
    }
}


// Zadanie 2
function calc (a,b,c) {

        if (c == '*') {
            let result = a*b;
            return result;
    }
        if (c == '/') {
            let result = a/b;
            return result;
    }
        if (c == '+') {
            let result = a+b;
            return result;
    }
        if (c == '-') { 
            let result = a-b;
            return result;
    }
    else {
        return console.log ('incorrect input')
    }
}