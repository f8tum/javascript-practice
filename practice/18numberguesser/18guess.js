let answer = Math.floor(Math.random() * 101);
let count = 0;

function guess() 
{
  let num = Number(document.getElementById("num").value);
  count++;

  if (num < 0 || num > 100 || isNaN(num)) 
  {
    alert("You must enter an integer between 0 and 100");
    return false;
  }

  if (num < answer)
    document.getElementById("result").textContent = "Your guess is less than the number";
  else if (num > answer) 
    document.getElementById("result").textContent = "Your guess is greater than the number";
  else
  {
    let message = "Hurray! Your guess is correct! You took " + count + " tries";
    document.getElementById("result").textContent = message;
    answer = Math.floor(Math.random() * 101);
    count = 0;
  }
  return false; 
}
