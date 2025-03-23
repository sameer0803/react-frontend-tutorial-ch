import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

const initialState = {
    todos: [
        { id: '1', text: 'Hello World' },
    ]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtoDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload // ✅ Fix: Use the actual payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
});

export const { addtoDo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
