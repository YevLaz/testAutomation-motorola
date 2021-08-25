// Task 1

function reverseString(str) {
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("");
    return joinStr;
}

// Task 2

function removeO(rem) {
    let newStr = rem.replace(/o/g, '');

    return newStr;
}

// Task 3

function sumOfTwo(n) {
    if (n>0) {
       let firstDigit = n.toString()[0];
       let firstDigitInt = parseInt(firstDigit);

       let lastDigit = Math.floor(n%10);

       return (firstDigitInt + lastDigit);
    }

    console.log('Incorrect input. Only +int');
}

// Task 4

let m = [22, 1, 3, 4, 8, 13];

function sumEven(arr) {
        let even = 0;
        for (let i = 0; i<arr.length; i++) {
        if ((arr[i]%2) === 0) {
            even = even + arr[i];
        }
    }
    return even;
}