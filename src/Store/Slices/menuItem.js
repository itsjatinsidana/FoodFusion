import { createSlice } from "@reduxjs/toolkit";

const menuItemSlice = createSlice({
    name:"menuItem",
    initialState:{
        AllItems:[]
    },
    reducers:{
        setMenuItems:(state, action)=>{
           const {menuItems}= action.payload;
       
         state.AllItems=menuItems
        }
    }
})
export const{setMenuItems}=menuItemSlice.actions;
export default menuItemSlice.reducer;