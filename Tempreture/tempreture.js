let input = document.getElementById('in');
let output = document.getElementById('input');
function getvalue1(){
let option1 = document.getElementById("option1").value;
console.log(`value 1 = ${option1}`);
}
function getvalue2(){
    let option2 = document.getElementById("option2").value;
    console.log(`value 2 = ${option2}`);
}
let button = document.querySelector("button");

button.addEventListener("click",function(){
      let value1 = input.value;
      if(option1.value == "" && (option2.value=="Fahrenhiet" || option2.value=="Celcius" || option2.value=="Kelvin")){
        alert(`Please Select CONVERT IN Option"`);
      }
      else if(option1.value == "" && option2.value==""){
        alert("Please Select CONVERT IN and CONVERT TO Options");
      }
      else if(value1==""){
        alert(`Please Enter the Value`);
      }
      else if(((option1.value=="Fahrenhiet" || option1.value=="Celcius" || option1.value== "Kelvin") && option2.value == "" ))
      {
        alert(`Please Select CONVERT TO Option `);
      }
     else if(option1.value == "Celcius" && option2.value=="Fahrenhiet"){
        let temp = celtofah(value1);
        output.value = temp;
        console.log(output.value);
      }
      else if(option1.value == "Fahrenhiet" && option2.value=="Celcius"){
        let temp1 = fahtocel(value1);
        output.value = temp1;
        console.log(output.value);
      }
      else if(option1.value == "Fahrenhiet" && option2.value=="Fahrenhiet"){
        output.value = value1;
        console.log(output.value);

      }
      else if(option1.value == "Celcius" && option2.value=="Celcius"){
        output.value = value1;
        console.log(output.value);
      }
    else if(option1.value == "Celcius" && option2.value == "Kelvin"){
        let temp = celtokel(value1);
        output.value = temp;
        console.log(output.value);
      }
      else if(option1.value == "Kelvin" && option2.value == "Celcius"){
        let temp = keltocel(value1);
        output.value = temp;
        console.log(output.value);
      }
      else if(option1.value == "Fahrenhiet" && option2.value == "Kelvin"){
        let temp = fahtokel(value1);
        output.value = temp;
        console.log(output.value);
      }
      else if(option1.value == "Kelvin" && option2.value == "Fahrenhiet"){
        let temp = keltofah(value1);
        output.value = temp;
        console.log(output.value);
      }
      else if(option1.value == "Kelvin" && option2.value == "Kelvin"){
       output.value = value1;
       console.log(output.value);
      }
})
  function fahtocel(temp){
    let ans = (temp - 32) * 5/9;
    return ans;
}
  function celtofah(temp){
    let ans = temp*(9/5)+32;
    return ans;
}
  function celtokel(temp){
  let int1 = parseInt(temp);
  let ans = int1+273.15;
  return ans;
}
  function keltocel(temp){
  let ans = temp-273.15;
  return ans;
}
  function fahtokel(temp){
  let ans =  (temp-32)*5/9 + 273.15;
  return ans;
}
 function keltofah(temp){
  let ans =  (temp-273.15)*9/5 + 32;
  return ans;
}


