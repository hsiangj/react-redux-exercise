import {useState} from 'react';
import {v4 as uuid} from 'uuid';

const NewTodoForm = ({addTodo}) => { 

  const [task, setTask] = useState('')

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({task, id: uuid()})
    setTask('')
  }

  return (
    <div>
      <form>
        <label htmlFor="task">Task: </label>
        <input 
          id="task"
          name="task"
          value={task}
          onChange={handleChange}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>

  )
}

export default NewTodoForm;