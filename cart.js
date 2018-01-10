let shoppingCart = [];

class Item {
  constructor(name, price, id, quantity = 1) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.id = id;
  }
}

//let orange = new Item("Orange", 1.99, 1, 3);
//let drumset = new Item("Drumset", 99, 2);

//ADD NEW ITEM TO CART
function addItem(name, price, id, quantity = 1) {
  const item = new Item(name, price, id, quantity);
  shoppingCart.push(item);
}

addItem("Orange", 1.99, 1, 3);
addItem("Drumset", 99, 2);
addItem("TV", 200, 3)

console.log(shoppingCart);

//REMOVE ITEM FROM CART
function removeItem(id) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === id) {
      shoppingCart.splice(i, 1);
      return
    }
  }
}

removeItem(2);

console.log(shoppingCart);
