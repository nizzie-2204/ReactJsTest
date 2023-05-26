import { createSlice } from '@reduxjs/toolkit';

export const phoneSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Date.now(),
                text: action.payload,
            };

            // state.push(todo);
        },
    },
});

// this is for dispatch
export const { addTodo } = phoneSlice.actions;

// this is for configureStore
export default phoneSlice.reducer;
