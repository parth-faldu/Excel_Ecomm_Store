import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id,name) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id != id);

    //update the localStorage after removing the item
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    //remove product div 
    let removeDiv = document.getElementById(`card${id}`);

    if(removeDiv){
        removeDiv.remove();
        showToast("delete",name);
    }
    updateCartValue(cartProducts);
    updateCartProductTotal();
};
