export function ItemsReducer(state = {items: []}, action){
    const allItems = state.items;

    switch(action.type){
       case "add item":
            return {items: [...allItems, action.payload]};

       case "remove item":
               return {items: allItems.filter((item) => {
                              if(item.id == action.payload.id)
                                   return false;
                              else 
                                   return true;
                         })
                    }

       case "change item": 
             return {items: allItems.map((item) => {
                              if(item.id == action.payload.id)
                                   return {
                                        id : item.id,
                                        title: item.title,
                                        price: item.price,
                                        quantity: action.payload.quantity,
                                        image: item.image
                                   }
                              return item;
                         })
                    }
        case "remove all":
             return{items: []}
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