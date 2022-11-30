import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartManagement',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart: (state, action) => {

            const id = action.payload.id;
            if (state.items.find(el => el.id === id)) {
                const index = state.items.findIndex(el => el.id === id);
                if (state.items[index].quantity >= 1) {
                    state.items[index].quantity += 1;
                    state.items[index].totalPrice =
                        state.items[index].price * state.items[index].quantity;
                    state.totalQuantity += 1;
                } else {
                    state.items[index].quantity = 1;
                }
                state.items.push(action.payload)
                // return state;
            }
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            if (state.items.find(el => el.id === id)) {
                const index = state.items.findIndex(el => el.id === id);
                if (state.items[index].quantity >= 1) {
                    state.items[index].quantity -= 1;
                    state.items[index].totalPrice =
                        state.items[index].price * state.items[index].quantity;
                    state.totalQuantity -= 1;
                } else {
                    state.items[index].quantity = 1;
                }
                return state;
            }
        }
    }
});

// these exports should stay the way they are
export const cartActions = cartSlice.actions;

export default cartSlice;
