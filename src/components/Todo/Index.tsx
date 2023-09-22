import {useState , useEffect} from 'react';
import axios from 'axios';  
import './Todo.css';
import Todo from './Todo';
import AppCarousel from '../Carousel/Carousel'
import { useAppDispatch , useAppSelector } from '../../Hooks/UsedTypeSelector';
import {fetchTodos} from "../../app/slices/TodoSlice/Index"
import { updateTodo } from '../../app/slices/TodoSlice/Index';
import { deleteTodo } from '../../app/slices/TodoSlice/Index';


function App() {
  const dispatch = useAppDispatch();
  interface Todo {
    title : string;
    id:number;
    completed:boolean;
  }
useEffect(()=>{
 dispatch(fetchTodos())
},[])
 
const  { data , isLoading}= useAppSelector((state) => state.todo);
// console.log("data",data)


const handleDeleteTodo = (todoId: number) => {
  // console.log("todoId" , todoId)
  dispatch(deleteTodo(todoId));
};
const handleCompleted = (todo: any) => {
  console.log("todo",todo.completed)
  // todo.completed = !todo.completed
  // Object.assign(todo , {completed:!todo.completed})
  
  dispatch(updateTodo({...todo , completed:!todo.completed}));
};

  return (
  
    <div className="App">
      
      <AppCarousel/>
      
     { isLoading ? (
      <h1>Loding...</h1>
     ):(
      data && data.map((todo: Todo , index:any ) => (
        <div><Todo todo={todo} index = {index} handleDeleteTodo = {handleDeleteTodo} handleCompleted = {handleCompleted}/></div>

      ))
     )
     }
   </div>
   
  );
}

export default App;