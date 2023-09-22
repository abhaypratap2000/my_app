import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://127.0.01:3001/customer/",
    }),
    endpoints:(builder)=>({
        loginUser:builder.mutation({
            query:(body:{email:string;password:string})=>{
                return {
                    url:'login',
                    method:"post",
                    body,
                };
            },
        }),
       RegisterUser:builder.mutation({
            query:(body:{email:string;password:string;phone:string;name:string;address:string})=>{
                return {
                    url:'signup',
                    method:"post",
                    body,
                };
            },
        }),
        OTPVerification:builder.mutation({
            query:(body:{email:string;otp:string})=>{
                return {
                    url:'OTPverify',
                    method:"post",
                    body,
                };
            },
        }),
    }),
});

export const {useLoginUserMutation , useRegisterUserMutation , useOTPVerificationMutation} = authApi;
// export const authReducer = authApi.reducer; // Export the authApi reducer
