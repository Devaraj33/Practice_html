//TYPE CONVERSION   
/*let age=window.prompt("How old are you");
console.log(typeof age);
age=Number(age);//type conversion
console.log(typeof age);
age=age+1;
console.log("Happy birthday",age,"years old");

let x ="3.14";
x=Number(x);
console.log(x,typeof x)
let y = String("pizz");
console.log(y,typeof y) 
y = Number(y);
console.log(y,typeof y) // it wil shows it has not a number(naN)
let z =Boolean(""); // it will shows false if string is empty
console.log(z,typeof z);
z=Boolean("dev");
console.log(z, typeof z);// it will shows TRUE when string is not empty*/

// SIMPLE CALCULATION
// 1. Here anybody can change the pi value if used the variable
    /*let pi = 3.14;
    let radius;
    let circumferece;
    radius = window.prompt("Enter the radius");
    pi=25;
    circumferece=2*pi*radius;
    alert("The Radius of the circle is "+circumferece);*/

    2. /*Here we can't change the pi value because constant never allows to assigns same value 
    again and again in different places*/
    
   /* const pi = 3.14;
    let radius;
    let circumferece;
    radius = window.prompt("Enter the radius");
    //pi=25;
    circumferece=2*pi*radius;
    alert("The Radius of the circle is "+circumferece);*/

     let x = 3.145;
    //let x;
    let y = 5;
    let z = 9;
    let minimum;
    let maximum;
    maximum = Math.max(x,y,z);
    minimum = Math.min(x,y,z);
    x=Math.PI;
    console.log(x);
    console.log(maximum);
    console.log(minimum);