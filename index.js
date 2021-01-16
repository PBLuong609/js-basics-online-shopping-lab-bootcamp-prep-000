var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor(Math.random()*100);
 var itemName = item;
 var tempCart={};
 tempCart[itemName] = itemPrice;

 cart.push(tempCart);
 console.log("addToCart function called:");
 console.log(tempCart);
 console.log(cart);

 return cart;
}
addToCart('bananas');
//addToCart('apples');


function viewCart() {
  // write your code here
  var cartIntroMsg = "In your cart, you have ";
  var cartBodyMsg;


  console.log(cart.length);
  if(cart.length == 0){
    console.log("Your shopping cart is empty.");
    return "Your shopping cart is empty.";
  }
  else if (cart.length == 1) {
    for (var i = 0; i < cart.length; i++) {
      var str = "I am me";
      str.replace("am","not");
      //var str = cart[i];
      console.log(`${cartIntroMsg} ${str}.`);
      //str.replace(' : ',' at $');
    }
  }
  else if (cart.length == 2) {

  }
  else {

  }

}
viewCart();

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
