// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance

// create objects and deal with inheritance in JavaScript. It is a syntactical 
// sugar over the existing prototype-based inheritance and does not introduce a new object-oriented inheritance model.

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const product1 = new Product("White Shirt", 19.99);
const product2 = new Product("Black Pants", 25.10);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total1 = product1.calculateTotal(salesTax);
console.log(`Total Price (with tax) : $${total1.toFixed(2)}`);
const total2 = product2.calculateTotal(salesTax);
console.log(`Total Price (with tax) : $${total2.toFixed(2)}`);
const total3 = product3.calculateTotal(salesTax);
console.log(`Total Price (with tax) : $${total3.toFixed(2)}`);
