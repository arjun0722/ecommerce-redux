import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    removefromcart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
   total(state,action){
    return state.reduce((a,b)=>{
      return a.id+b.id
    })
   }
  },
});
export const { add, removefromcart, increase } = cartSlice.actions;
export default cartSlice.reducer;
