
// Zadanie 1 - znalezienie minimalnego wsrod 3
function min (a,b,c) {
    if (a<b && a<c) {
        return console.log (a)
    }
    if (b<a && b<c) {
        return console.log (b)
    }
    if (c<b && c<a) {
        return console.log (c)
    }
    else {
        return console.log ('incorrect input')
    }
}


// Zadanie 2
function calc (a,b,c) {

        if (c == '*') {
            let result = a*b;
            return console.log (result);
    }
        if (c == '/') {
            let result = a/b;
            return console.log (result);
    }
        if (c == '+') {
            let result = a+b;
            return console.log (result);
    }
        if (c == '-') { 
            let result = a-b;
            return console.log (result);
    }
    else {
        return console.log ('incorrect input')
    }
}