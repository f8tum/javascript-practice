const idSpamMessage = (message) => {
  if (message.toLowerCase().includes("offer"))
    return true;
  if (message.toLowerCase().includes("free"))  
    return true;
return false;
}

idSpamMessage(`\nHey we are here to offer you a discount of....\n`);

if (idSpamMessage)
  console.log(`\nStop calling me!\n`);
else 
  console.log(`Hello...`); 