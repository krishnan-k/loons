import { createSlice } from "@reduxjs/toolkit";


const storeItems = localStorage.getItem("cartItems");
const initialState = { cartItems: storeItems ? JSON.parse(storeItems) : [] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((items) => 
                items._id === newItem._id
            );
            if (existingItem) {
                existingItem.quantity += newItem.quantity
            } else {
                state.cartItems.push({
                    _id: newItem._id,
                    image: newItem.image,
                    title: newItem.title,
                    description:newItem.description,
                    quantity: newItem.quantity,
                    price: newItem.price,
                    comparePrice: newItem.comparePrice
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        deleteCart: (state, action) => {
            state.cartItems = state.cartItems.filter((items) => 
                items._id !== action.payload._id
            );
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        updateQuantity: (state,action) =>{
            const {_id, quantity} = action.payload;
            const itemToUpdate = state.cartItems.find(items => items._id === _id);
            if(itemToUpdate){
                itemToUpdate.quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, deleteCart, updateQuantity } = cartSlice.actions;