function ShoppingCart() {
  this.products = [];

  this.addProduct = function(p) {
    this.products.push(p);
  };
}

function Discount() {
  this.calc = function(products) {
    var ndiscount = new NumberDiscount()
    var pdiscount = new PriceDiscount()
    var none = new NoneDiscount()

    ndiscount.setNext(pdiscount)
    pdiscount.setNext(none)

    return ndiscount.exec(products)
  };
}

function NumberDiscount() {
  this.next = null
  this.setNext = (fn) => {
    this.next = fn
  }

  this.exec = (products) => {
    var result = 0
    if (products.length > 3)
      result = 0.05

    return result + this.next.exec(products)
  }
}

function PriceDiscount() {
  this.next = null
  this.setNext = (fn) => {
    this.next = fn
  }

  this.exec = (products) => {
    const result = 0;
    const total = products.reduce((a, b) => (
      a + b
    ))

    if (total >= 500) {
      result = 0.1
    }

    return result + this.next.exec(products);
  }
}

function NoneDiscount() {
  this.exec = () => (0)
}

module.exports = [ShoppingCart, Discount];
