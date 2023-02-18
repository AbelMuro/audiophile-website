export function ItemsReducer(state = {items: []}, action){
    const allItems = state.items;

    switch(action.type){
       case "set":
            return {items: [...allItems, action.newItem]};
       case "get":
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