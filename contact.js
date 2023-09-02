const form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
  if (form.checkValidity()==false){
    alert("please fill all");
    e.preventDefault();
  }
  else{
    greet()
  }
  
})

function greet(){

    var form = document.getElementById("form");
    var thanks = document.getElementById("thanks") ;
              form.style.display="none";
              thanks.style.display="flex";

 }
