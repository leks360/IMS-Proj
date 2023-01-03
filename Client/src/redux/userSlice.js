import {createSlice} from '@reduxjs/toolkit'

const initialState={
    currentUser:null,
    loading:false,
    error:false,
}
export const UserSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading=true;
        },
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload;
            state.loading=false;
        },
        loginFailure:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=true;
        },
        logout:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=false;
        }
    }
});

export const {loginStart,loginSuccess,loginFailure,logout}=UserSlice.actions;
export default UserSlice.reducer;
