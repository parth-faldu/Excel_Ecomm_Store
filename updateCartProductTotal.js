import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector('.productSubTotal');
    let productFinalTotal = document.querySelector('.productFinalTotal');
    let localCartProducts = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
        let productPrice = parseFloat(curElem.price) || 0;
        return accum + productPrice;
    }, initialValue);

    productSubTotal.textContent = `₹${(totalProductPrice).toFixed(2)}`;
    productFinalTotal.textContent = `₹${(totalProductPrice + 50).toFixed(2)}`;

    //we all products are removed then display null (-)
    if (productSubTotal.textContent == "₹0.00") {
        productSubTotal.textContent = "-";
        productFinalTotal.textContent = "-";
        document.body.querySelector('.productTax').textContent = "-";
    }
};