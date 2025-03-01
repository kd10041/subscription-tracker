//Javascript functions practice
console.log("hello!");

console.log("abc".toUpperCase());

//for array
[1,2,3].push(4);

//function defination: reduce redundancy!
// parameters
function Print(message){
    console.log(message);
}

//function call
Print("I love Javascript"); //arguments

function Sum(x,y){
    let s=x+y;
    return s;
}

let value=Sum(3,4);
console.log(value);

//Scope of variables

//Arrows function Compact function
// Modern Javascript
// arrowSum is function variable
const arrowSum=(a,b)=>{
    console.log(a+b);
}
arrowSum(5,10);

const printHello=()=>{
    console.log('Hello');
}

printHello();

//Problems
function countVowels(str){
    //"Kumar"
    let count=0;
    for(const char of str){
        if(char === 'a'|| char ==='e' || char ==='i' || char ==='o' || char ==='u'){
            count++;
        }
    }
    console.log(count);
}

countVowels("Kumar");