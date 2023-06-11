let generate = document.querySelector('#clicked')
let valnum = document.querySelector('#input');
let output = document.querySelector('#outputCelcius')
let input_type = document.querySelector('#type')

function temperatureConverter() {


// Fahrenheit to Celcius 

if(input_type.value === "fh")
{
output.innerHTML=`${(valnum.value-32)/1.8}°C`; 
// console.log(output);
// console.log("clicked"); 
// console.log(valnum);
}
// celcius to fahrenhiet
else if(input_type.value === "cl")
{
output.innerHTML = `${(valnum.value * 1.8) + 32}°F`;
}

}

generate.addEventListener("click", temperatureConverter);
// valnum.addEventListener("input", temperatureConverter); 