var a =10;
function b(){
    var x =100;
}
//window is a global object in javascript which is created along with the global execution context
// and also this variable is created(this is also point to the global object)
console.log(window.a);
console.log(a);
console.log(this.a)