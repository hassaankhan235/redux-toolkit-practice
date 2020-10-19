import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addTask } from './Redux/counterSlice'

function Todo() {
    const [id, setId] = useState(0)
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const tskob = useSelector( (state) => {
        return state.counter.tasks.filter(task => {
          if(task.id === 0){
            return task
          } 
           else return 'none'  })
    })

  return (
    <div>
      ID IN THE BEGINNING IS <br/>{tskob.map(tsk=>{return tsk.name })} <br/>
      Id: <input type='text' onChange={(e) => {
          setId(e.target.value)
      }
      } />
      Task: <input type='text' onChange= {(e) => {
          setTask(e.target.value)
      }} />
      <button onClick={() => {
        dispatch(addTask({tid:id, task: task}))} 
      } >
      Submit Task </button>
    </div>
  )
}

export default Todo