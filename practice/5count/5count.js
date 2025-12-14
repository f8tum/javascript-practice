// onclick triggers the function
// function is a reusable block of code

let count = parseInt(document.getElementById("count").textContent);

function decreaseCount() 
{
  count--;
  document.getElementById("count").textContent = count; 
}

function resetCount() 
{
  count = 0;
  document.getElementById("count").textContent = count;
}

function increaseCount() 
{
  count++;
  document.getElementById("count").textContent = count;
}
