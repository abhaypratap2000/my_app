import { createSlice , PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface AuthState{
    email:string | null;
    signature:string | null;
    verified:string | null
}

const initialState :AuthState = {
    email:null,
    signature:null,
    verified:null
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(
            state , 
            action:PayloadAction<{email:string; signature:string}>
        )=>{
            localStorage.setItem(
                "user",JSON.stringify({
                    email:action.payload.email,
                    signature:action.payload.signature
                })
            );
            state.email = action.payload.email;
            state.signature = action.payload.signature;
        },
        logout:(state)=>{
            localStorage.clear();
            state.email = null;
            state.signature = null;
        },
        // otpvarification:(
        //     state,
        //     action:PayloadAction<{verified:string}>
        // )=>{
        //     localStorage.setItem(
        //         "user",JSON.stringify({
        //             verified:action.payload.verified
        //         })
        //     );
        //     state.verified = action.payload.verified;
        // }
    }
})

export const selectAuth = (state:RootState) => state.auth;
export const {setUser , logout } = authSlice.actions;
export default authSlice.reducer;