// class = ES6 feature (new verion) cleaner wa to use objectd
//         allows you to use static keyword, encapsuation and inheritance
//         OOP object oriented programming in javascript

class Product
{
  constructor(name, price)
  {
    this.name = name;
    this.price = price
  }

  displayProduct()
  {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }
  calculateTotal()
  {
    return this.price + (this.price * salesTax);
  }
};

const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pants", 21.99);
const product3 = new Product("underwear", 9.99);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price with tax: $${total.toFixed(2)}`);
