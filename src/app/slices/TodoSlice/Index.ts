
import { createSlice, createAsyncThunk , PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios'; 

interface todo {
  id: number;
  text: string;
  completed: boolean;
}


interface TodoState {
    isLoading: boolean;
    data: any | []| null; 
    error: String | null;
    todos: todo[];
  }

  const initialState= {
    isLoading: false,
    data: null,
    error:null,
    todos: [],
  }as TodoState;



export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return response.data.slice(0,10); 
    } catch (error) {
      throw error;
    }
  });

  const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      deleteTodo: (state, action: PayloadAction<number>) => {
        // console.log('Deleting todo with ID:', action.payload);
        state.data = state.data.filter((todo:any) => todo.id !== action.payload);
        // console.log("jskkjdskjkjd",state.data , state.data?.length)
      },
      updateTodo:(state , action:PayloadAction<todo>)=>{
        state.data.splice(state.data.findIndex((value:todo)=>value.id == action.payload.id) ,1, action.payload)
      }
    },
    extraReducers(builders){
        builders
        .addCase(fetchTodos.pending,(state , action)=>{
            state.isLoading = true
        })
        .addCase(fetchTodos.fulfilled,(state , action: PayloadAction<[]>)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchTodos.rejected,(state , action:PayloadAction<any>)=>{
            state.isLoading = false;
            state.error = action.payload
        })
    }
  });

  export const { deleteTodo , updateTodo } = todoSlice.actions;
  export default todoSlice.reducer;
  