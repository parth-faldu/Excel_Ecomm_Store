import { getCartProductFromLS } from "./getCartProducts";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price, name) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector('.productPrice');

    let quantity = 1;
    let localStoragePrice = 0;

    let LocalCartProducts = getCartProductFromLS();
    let existingProd = LocalCartProducts.find((curProd) => curProd.id == id);

    if (existingProd) {
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }
    else {
        localStoragePrice = price;
        price = price;
    }

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
        }
        else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if (event.target.className == "cartDecrement") {
        if (quantity == 1) {
            removeProductFromCart(id, name);
            return;
        }
        if(quantity > 1){
            quantity -= 1;
        }
    }

    //update price in localstorage
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = { id, quantity, price: localStoragePrice };

    updatedCart = LocalCartProducts.map((curProd) => {
        return curProd.id == id ? updatedCart : curProd;
    });

    //update localstorage
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    //update product div 
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    updateCartProductTotal();
};