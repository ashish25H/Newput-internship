const Logger = require("nodemon/lib/utils/log");

console.log('it is a stinrg in single quotes');
console.log("String in double quotes");

let str = 'A variable';
console.log(`String in Template Literls ${str}`);

let list = `Items:-
1-Laptop
2-Mobile
3-Tablet
4-Watch
`

console.log(list);

let str2 = 'what is length';
console.log(str2.length);

// Strings are immutable
let str3 = 'hello';
str3[0] = 'E';
console.log(str3);

//find as in string
let str4 = 'As sly as a fox, as strong as an ox';

let target = 'as';
let pos = 0;

while (true) {
    let index = str4.indexOf(target, pos);
    if (index !== -1) {
        console.log(index);
        pos = index + 1;
    } else {
        break;
    }
}
// end 

//slice method
let str5 = 'stringify';
console.log(str5.slice(0, 5));
console.log(str5);
console.log('Use -ve numbers in slice : ' + str5.slice(-4, -1));


//slice will return a new string


//substring method
console.log(str5.substring(2, 6));
console.log(str5.substring(6, 2));
//end


//codePointAt

// console.log('a'.codePointAt(0));
//end


//char code

let charNum = 65;
while (charNum <= 220) {
    let char = String.fromCharCode(charNum);
    let charCode = char.charCodeAt(0);
    console.log(`Character - ${char} charCode - ${charCode}`);
    // console.log(String.fromCharCode(charNum));
    charNum++;
}
//end


//slice
// let st = 'result';
// console.log(st.slice(0));


//first letter uppercase
let name = 'tony';

console.log(name[0].toUpperCase() + name.slice(1));

//includes
function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes('love')) {
        return true;
    } else if (str.includes('xxxx')) {
        return true;
    } else return false;
}

console.log(checkSpam('buy love now'));
console.log(checkSpam('Do something else'));
//end


//truncate
function truncate(str){
    if(str.length >= 20){
        str = str.slice(0,19) + '...';
    }else{
        return;
    }
    console.log(str);
}


truncate("What I'd like to tell on this topic is:", 20)
//end




//
function extractCurrencyValue(str){
    return +str.slice(1);
}



// extractCurrencyValue('$120');
if(extractCurrencyValue('$120') === 120){
    console.log('correct');
}else{
    console.log('false');
}


