export default function CartReducer(state = {cart: []}, action){
    const cart = state.cart;

    switch(action.type){
       case "set":
            return {cart: [...cart, action.newItem]};
       case "get":
            return state;
       default: 
            return state;
}
}