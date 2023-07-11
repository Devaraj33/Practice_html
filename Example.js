/*console.log("Welcome to javascript");
var firstname="dev"; // series of character is string here can't increment by 1
var age =30; //numaric character we apply logic can incremet by 1
//let age1="30";
var student=false;*/
/*age =age+1;
age1=age1+1;//it concatinate the string not by incrementing the value
console.log(firstname);
console.log(age);
console.log(student);
console.log(age1);
console.log("Hellow  "+firstname);
console.log("Your age is "+age);
console.log("helow "+firstname + " your age is "+age+" years old");*/

// FOR DISPLAYING BELOW SCRIPT SHOULD HAVE TO DECLARE INSIDE THE BODY TAG
/*document.getElementById("p1").innerHTML = "hellow " + firstname;
document.getElementById("p2").innerHTML = "Your age is " + age + " years Old";
document.getElementById("p3").innerHTML = "Enrolled: " +student;*/

//OPERATORS
/*let x =20;
x++;
console.log(++x);//increment operator ++ before variable name and after that*/
//let student = 20;
/*console.log(student = student+1);
console.log(student = student-1);
console.log(student = student*2);
console.log(student = student/2);
console.log(student=student%3);*/

//ARGUMENT OPERATOR
/*console.log(student +=1);
console.log(student -=1);
console.log(student *=2);
console.log(student /=2);
console.log(student%=3);*/

//OPERATOR PRECIDENCE(IF WE WRITE ANY EQUATION IT WILL GIVE PRIORITY AS BELOW)
/* 
1. PARANTHESIS()
2.EXPONENTS
3.MULTIPLICATIONA AND DIVISON
4.ADDITION AND SUBSTRACTION
*/

/*let x = 1+2 *(3-2); 
console.log(x);*/

// HOW TO ACCEPT THE USER INPUT
//EASY WAY WITH WINDOWS PROMPT
 /*let username=window.prompt("Enter your name?");
 console.log(username);*/

//DIFFICULT WAY USING HTML TEXTBOX
 /*let username ;

 document.getElementById("mybutton").onclick = function(){
    username =document.getElementById("mytext").value;
   console.log(username);
  
 }*/

 let username ;

 document.getElementById("mybutton").onclick = function(){
    username =document.getElementById("mytext").value;
   console.log(username);

   document.getElementById("mylabel").innerHTML = "Hello " + username;
  
 }
