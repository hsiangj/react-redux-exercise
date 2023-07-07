

const Todo = ({id, task, deleteTodo}) => {
  return (
    <div>
      <li>
        {task}
        <button onClick={deleteTodo}>x</button>
      </li>
    </div>

  )
}

export default Todo;