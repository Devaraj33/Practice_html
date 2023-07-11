// using this into normal code;
/*let a;
let b;
let c;

a = window.prompt("Enter Side of A");
a = Number(a);
b = window.prompt("Enter side of B");
b = Number(b);

//c = Math.pow(a,2)+Math.pow(b,2);
c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log(c);*/
 
//ADVANCED LEVEL USING HTML;
document.getElementById("SubmitButton").onclick = function(){
    a = document.getElementById("aTextbox").value;
    a = Number(a);
    b = document.getElementById("bTextbox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML = "Side C:"+c;
}

