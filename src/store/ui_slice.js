import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'toggle',
    initialState: { cartIsVisible: false },
    reducers: {
        toggle: (state) => {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

// these exports should stay the way they are
export const uiActions = uiSlice.actions;

export default uiSlice;
