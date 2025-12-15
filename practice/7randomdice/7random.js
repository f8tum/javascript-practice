function rollDice() 
{
    let min = 1;
    let max = 6;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("num").textContent = num;
}
