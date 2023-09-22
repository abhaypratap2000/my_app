import React from "react";
import { TodoType } from "../../types/Todo.types";

interface Props {
    todo: TodoType,
    index: number,
    handleCompleted: (todo:any) => void,
    handleDeleteTodo: (id: number) => void

}

// const Todo: React.FC<Props> = ({ todo, index, handleCompleted, handleDelete }) => {
    // handleCompleted(todo)
    const Todo: React.FC<Props> = ({ todo, index ,handleDeleteTodo , handleCompleted}) => {
    return (
    
    <div className="todo" style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        {todo.title}
        <div>
            <button onClick={() => handleCompleted(todo)}>{todo.completed ? 'Incompleted' : 'completed'}</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          
        </div>
    </div>
    )
}
export default Todo