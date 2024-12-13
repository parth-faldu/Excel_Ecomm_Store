import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";

getCartProductFromLS();

export const addToCart = (event, id, stock,name) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = currentProdElem.querySelector('.productQuantity').innerText;
    let price = currentProdElem.querySelector('.productPrice').innerText;
    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    );


    if (existingProd != undefined && existingProd.id == id) {
        quantity = Number(existingProd.quantity) + Number(quantity);

        price = Number(price * quantity);
        let updatedCart = { id, quantity, price };

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id == id ? updatedCart : curProd;
        });

        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
        showToast("add",name);
        return;
    }


    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

    showToast("add",name);
};