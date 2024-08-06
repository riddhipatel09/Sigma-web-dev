console.log("hey this is js tut")
//var a=5;   //var is global variable
//a=a+1;
//var b=6;
//var c="Riddhi";
//var _a=6;
//var 55a=1; //not allowed
//console.log(a+b)
//console.log(typeof a,typeof b,typeof c)
//const a = 6;
//a = a+6; //not allowed bcz a is constant

//hence we use "let" most of the time...let and const ara block variables ane var is global variable
let a=6;
console.log(a)
{
    let a=55;
    console.log(a)
}
console.log(a) 


//datatype
let x = "riddhi";
let y =22; //string
let z=3.5; //number
const p=true; //boolean
let q=undefined; //undefined
let r=null; //object
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)


//object
let o={
    "name":"riddhi",
    "job code":5600,
    "is_handsome":"true"
}

console.log(o)
o.salary="100 crores";
console.log(o)
o.salary="500 crores";
console.log(o)
