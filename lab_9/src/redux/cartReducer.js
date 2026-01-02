import { ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY } from './cartActions';

const initialState = {
    items: [], 
    total: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newClip = action.payload;
            const existingItem = state.items.find(item => item.id === newClip.id);

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item => 
                        item.id === newClip.id 
                            ? { ...item, quantity: item.quantity + 1 } 
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...newClip, quantity: 1 }],
                };
            }

        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };

        case UPDATE_QUANTITY:
            return state; 
            
        default:
            return state;
    }
};

export default cartReducer;