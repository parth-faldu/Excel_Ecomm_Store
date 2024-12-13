const cartValue = document.querySelector('#cartValue');

export const updateCartValue = (cartProducts) => {
    let initialValue = 0;
    let totalProductQuantity = cartProducts.reduce((accum, curElem) => {
        let productQuantity = parseFloat(curElem.quantity) || 0;
        return accum + productQuantity;
    }, initialValue);

    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${totalProductQuantity} </i>`);
};