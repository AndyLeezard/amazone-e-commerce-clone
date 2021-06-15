import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  //user: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //This is where actions exist
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
      //state.user = [...state.user]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);

      let newBasket = [...state.items];

      if (index >= 0){
        //The item exists in the basket, so remove it
        newBasket.splice(index, 1)
      }else{
        console.warn(`Cannot remove product (id: ${action.payload.id}) as is not in the basket !`)
      }

      state.items = newBasket;
      //state.user = [...state.user]
    },
    /*setUser: (state, action) => {
      state.items = [...state.items];
      state.user = action.payload;
      console.warn(`basketSlice - user set to : ${action.payload}`)
    }*/
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions; //, setUser

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);
//export const selectUser = (state) => state.user;

export default basketSlice.reducer;
