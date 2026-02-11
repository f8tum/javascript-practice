// super keyword allows us to call methods on an object's parent
// often used to call a parent constructor when a child object has its own

class Sender {
  constructor (recipient) {
    this.recipient = recipient;
  }

  formatMessage (message) {
    return `To: ${this.recipient}, Message: ${message}`;
  }
}

class SMSSender extends Sender {
  constructor (recipient) {
    super (recipient);
  }

  formatMessage (message) {
    return `${super.formatMessage(message)} [sms]`;
  }
}

class EmailSender extends Sender{
  constructor (recipient) {
    super (recipient);
  }

  formatMessage (message) {
    return `${super.formatMessage(message)} [Email]`;
  }
}

const sms = new SMSSender("f8tum");
console.log(sms.formatMessage("Hello"));