// inheritance allows child class to use properties and methods of the parent class

class Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }

  sendMessage(message) {
    throw new Error("sendMessage method must be implemented");  
  }
}

class SMSSender extends Sender{
  sendMessage(message) {
    console.log(`\nSending SMS to ${this.recipient} : ${message}`);
  }
}

class EmailSender extends Sender{
  sendMessage(message) {
    console.log(`Sending email to ${this.recipient} : ${message}\n`);
  }
}

const smsSender = new SMSSender("f8tum");
smsSender.sendMessage("Hello There!");

const emailSender = new EmailSender("f8tum");
emailSender.sendMessage("Hello There!");