// Three ways to create function in js
//1) function Declaration
//2) function Expression
//3) Arrow Function


//Declaration of a function

function mul(a,b){
    console.log(a*b);
}
mul(2,3);


//Function Expression

let vl = function(a,b){
    console.log(a+b);
}
vl(4,5);

//Arrow function
let j = (a,b)=>{return a/b;}
console.log(j(16,4));


//Callback function

function ha(a,b,Callback){
    console.log(`sum is ${a+b} and this first function`);
    Callback();
}

function cal(){
    console.log('this is callback function')
}

ha(8,22,cal);

//callback function as a anonymous function

function tr(a,b,callback){
    console.log(`the multiply of a and b is : ${a*b} and` );
    callback();
}

tr(4,8,function mu(){
    console.log("this is callback function 2 as anonymous.")
})