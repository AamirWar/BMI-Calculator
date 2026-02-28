let currentUnit = "metric";

let metricBtn = document.getElementById("metric");
let imperialBtn = document.getElementById("imperial");

metricBtn.addEventListener("click", function(){
    currentUnit = "metric";

    document.getElementById("wght").placeholder= "Enter your weight(kg)";
    document.getElementById("hght").placeholder= "Enter your height(cm)";
});

imperialBtn.addEventListener("click", function(){
    currentUnit = "imperial";
    
    document.getElementById("wght").placeholder= "Enter your weight(lbs)";
    document.getElementById("hght").placeholder= "Enter your height(in)";
});

let getresult = document.getElementById("getbtn");
getresult.addEventListener("click", getBMI);

function getBMI(){

    let height = Number(document.getElementById("hght").value);
    let weight = Number(document.getElementById("wght").value);

    if(height<=0 || weight<=0){
        return;
    }
    let bmi;
    let classify;
    let stateClass;

    if(currentUnit==="metric"){
        bmi = weight / ((height/100) * (height/100));
    }
    else{
        bmi = 703 * weight / (height * height);
    }

    if(bmi < 18.5){
        classify = "Underweight";
        stateClass = "under";
    }
    else if(bmi < 25){
        classify = "Normal";
        stateClass = "normal";
    }
    else if(bmi < 29){
        classify = "Overweight";
        stateClass = "over";
    }
    else{
        classify = "Obese";
        stateClass = "obese";
    }

    let outputBox = document.querySelector(".output");

    // Remove old state classes
    outputBox.classList.remove("under","normal","over","obese");

    // Add new state class
    outputBox.classList.add(stateClass);

    document.getElementById("opt1").innerHTML = bmi.toFixed(2);
    document.getElementById("opt2").innerHTML = "<br>"+classify;
}
