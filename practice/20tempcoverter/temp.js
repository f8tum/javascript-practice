function convert()
{
  const temperature = Number(document.getElementById("temp").value);  
  const celsius = document.getElementById("celsius");
  const fahrenheit = document.getElementById("fahrenheit");
  if (isNaN(temperature))
  {
    alert("Please enter a valid temperature");
    return false;
  }
  if (celsius.checked)
  {
    let ans = toFahrenheit(temperature);
    let message = "Result is " + ans.toFixed(1) + " fahrenheit";
    document.getElementById("result").textContent = message;
  }
  else if (fahrenheit.checked)
  {
    let ans = toCelsius(temperature);
    let message = "Result is " + ans.toFixed(1) + " celsius";
    document.getElementById("result").textContent = message;
  }
  return false;
}

function toFahrenheit(temperature)
{
  let result = temperature * (9/5) + 32;
  return result;
}

function toCelsius(temperature)
{
  let result = (temperature - 32) * (5/9);
  return result;
}