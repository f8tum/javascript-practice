// .check = checks if a radio button or checkbox is selected or not

function saySelected() 
{
  const myCheckbox = document.getElementById("myCheckbox");
  const visaBtn = document.getElementById("visa");
  const mastercardBtn = document.getElementById("mastercard");
  const paypalBtn = document.getElementById("paypal");
  const subResult = document.getElementById("subResult");
  const paymentResult = document.getElementById("paymentResult");

  if (myCheckbox.checked)
    subResult.textContent = "You are subscribed"; 
  else
    subResult.textContent = "You are not subscribed";

  if (visaBtn.checked) 
    paymentResult.textContent = "Payment method: Visa";
  else if (mastercardBtn.checked)
    paymentResult.textContent = "Payment method: MasterCard";
  else if (paypalBtn.checked)
    paymentResult.textContent = "Payment method: PayPal";
  else 
    paymentResult.textContent = "No payment method selected";
}
