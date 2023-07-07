import {useSelector, useDispatch} from 'react-redux';

import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todos);
  console.debug('TodoList:', todos)

  const addTodo = (newTodo) => {
    dispatch({type:'ADD_TODO', todo: newTodo})
  }

  const deleteTodo = (id) => {
    dispatch({type: 'DELETE_TODO', id})
  }

  const todosComponent = todos.map(todo => (
    <Todo 
      key={todo.id}
      id={todo.id}
      task={todo.task}
      deleteTodo={()=>deleteTodo(todo.id)}
    />
  ))

  return (
    <div>
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo}/>
      <ul>
        {todosComponent}
      </ul>
      
    </div>
  )
}

export default TodoList;