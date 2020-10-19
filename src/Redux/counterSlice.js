import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {tasks: [{id:0,name:'khan'},{id:1,name:'hassaan'}]},
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: action.payload.tid,
                name: action.payload.task
            })
        } 
    }
})

export const {addTask} = counterSlice.actions
export default counterSlice.reducer