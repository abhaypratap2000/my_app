import {configureStore , combineReducers} from '@reduxjs/toolkit';
import todoSlice from './slices/TodoSlice/Index'
import {authApi } from '../services/auth';
import authReducer from '../app/slices/AuthSlice/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query/react'; // Import setupListeners

const rootReducer = combineReducers({
  auth:authReducer,
  todo: todoSlice,
  [authApi.reducerPath]:authApi.reducer
  });
  
export const store = configureStore({
     reducer:rootReducer,
     middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(authApi.middleware),
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store;
setupListeners(store.dispatch);