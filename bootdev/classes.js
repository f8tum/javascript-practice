// Classes are a template for creating objects but cleaner
// By default all classes properties are public but we can make them private

class Message {
  // private member declared with a #
  #createdAt;

  // static members - can't be accessed outside the class
  static totalMsgLength = 0;
  static totalMsgNum = 0;

  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    this.#createdAt = new Date();
    Message.totalMsgLength += body.length;
    Message.totalMsgNum++;
  } 

  static getAverageMessageLength() {
    return Math.round(Message.totalMsgLength / Message.totalMsgNum * 100);
  }

}

const message = new Message("Top G", "f8tum", "Remember?");
console.log(message);