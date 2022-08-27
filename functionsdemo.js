// defination
// calc

// addition 
// substraction
//multiplication
//division

//  let no1=prompt("enter first no")

// let no2=prompt("enter second no")
//  var result =mul(no1,no2)
//  console.log("result",result)
//  alert(result)
//multiplication

function mul(){
    var number1=document.getElementById("number1").value;  
    var number2=document.getElementById("number2").value;  
    var result=number1*number2
    document.getElementById("result").innerHTML = result;
   
}
function add(){
    var number1=document.getElementById("number1").value;  
    var number2=document.getElementById("number2").value;  
    var result=Number(number1)+Number(number2)
    document.getElementById("result").innerHTML = result;
   
}
