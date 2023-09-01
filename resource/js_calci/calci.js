<<<<<<< HEAD

let input = document.getElementById("input");
let lable = document.getElementById("lable");
function butn1(){
    var input = document.getElementById("input");
    input.value+="1";
}
function butn2(){
    var input = document.getElementById("input");
    input.value+="2";
}
function butn3(){
    var input = document.getElementById("input");
    input.value+="3";
}
function butn4(){
    var input = document.getElementById("input");
    input.value+="4";
}
function butn5(){
    var input = document.getElementById("input");
    input.value+="5";
}
function butn6(){
    var input = document.getElementById("input");
    input.value+="6";
}
function butn7(){
    var input = document.getElementById("input");
    input.value+="7";
}

function butn8(){
    var input = document.getElementById("input");
    input.value+="8";
}
function butn9(){
    var input = document.getElementById("input");
    input.value+="9";
}
function butn0(){
    var input = document.getElementById("input");
    input.value+="0";
}
function ac(){
    var input = document.getElementById("input");
    input.value="";
    var lable = document.getElementById("lable");
    lable.innerText="Enter the expression";
}
function del(){
    var input = document.getElementById("input");
    let value=input.value;
    if(value=="Infinity"||value=='Error'){
        input.value="";
    }
    input.value=input.value.substr(0,input.value.length-1);
}
function para1(){
    var input = document.getElementById("input");
    input.value+="(";
}
function para2(){
    var input = document.getElementById("input");
    input.value+=")";
}
function add(){
    var input = document.getElementById("input");
    input.value+="+";
}
function sub(){
    var input = document.getElementById("input");
    input.value+="-";
}
function div(){
    var input = document.getElementById("input");
    input.value+="/";
}
function mul(){
    var input = document.getElementById("input");
    input.value+="*";
}
function dot(){
    var input = document.getElementById("input");
    input.value+=".";
}
function equal() {
    var input = document.getElementById("input");
    var result=0;
    try {
      result = eval(input.value);
      if (result.toString().indexOf('.') !== -1) {
        result = result.toFixed(4);
      }
    } catch (e) {
      result = 'Error';
    }
    var lable = document.getElementById("lable");
    lable.innerText=input.value;
    input.value=result.toString();

  }
=======

let input = document.getElementById("input");
let lable = document.getElementById("lable");
function butn1(){
    var input = document.getElementById("input");
    input.value+="1";
}
function butn2(){
    var input = document.getElementById("input");
    input.value+="2";
}
function butn3(){
    var input = document.getElementById("input");
    input.value+="3";
}
function butn4(){
    var input = document.getElementById("input");
    input.value+="4";
}
function butn5(){
    var input = document.getElementById("input");
    input.value+="5";
}
function butn6(){
    var input = document.getElementById("input");
    input.value+="6";
}
function butn7(){
    var input = document.getElementById("input");
    input.value+="7";
}

function butn8(){
    var input = document.getElementById("input");
    input.value+="8";
}
function butn9(){
    var input = document.getElementById("input");
    input.value+="9";
}
function butn0(){
    var input = document.getElementById("input");
    input.value+="0";
}
function ac(){
    var input = document.getElementById("input");
    input.value="";
    var lable = document.getElementById("lable");
    lable.innerText="Enter the expression";
}
function del(){
    var input = document.getElementById("input");
    let value=input.value;
    if(value=="Infinity"||value=='Error'){
        input.value="";
    }
    input.value=input.value.substr(0,input.value.length-1);
}
function para1(){
    var input = document.getElementById("input");
    input.value+="(";
}
function para2(){
    var input = document.getElementById("input");
    input.value+=")";
}
function add(){
    var input = document.getElementById("input");
    input.value+="+";
}
function sub(){
    var input = document.getElementById("input");
    input.value+="-";
}
function div(){
    var input = document.getElementById("input");
    input.value+="/";
}
function mul(){
    var input = document.getElementById("input");
    input.value+="*";
}
function dot(){
    var input = document.getElementById("input");
    input.value+=".";
}
function equal() {
    var input = document.getElementById("input");
    var result=0;
    try {
      result = eval(input.value);
      if (result.toString().indexOf('.') !== -1) {
        result = result.toFixed(4);
      }
    } catch (e) {
      result = 'Error';
    }
    var lable = document.getElementById("lable");
    lable.innerText=input.value;
    input.value=result.toString();

  }
>>>>>>> 32dddb969e55a6d2d76324b862ca1996956c328a
