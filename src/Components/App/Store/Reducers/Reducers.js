export function ItemsReducer(state = {items: []}, action){
    const allItems = state.items;

    switch(action.type){
       case "add item":
            return {items: [...allItems, action.newItem]};

       case "remove item":
               return allItems.filter((item) => {
                    if(item.id == action.id)
                         return false;
               });

       case "change item quantity": 
             return allItems.map((item) => {
                    if(item.id == action.id)
                         item.quantity += action.quantity
                    return item;
               })
       case "get items":
            return state;
       default: 
            return state;
     }
}

export function OpenCartReducer(state = false, action){
     
     switch(action.type){
          case 'open':
               return true;
          case 'close':
               return false;
          default:
               return state;
     }
}