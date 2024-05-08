import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        registerUser: (state, action) => {
            const { username } = action.payload;
            const exists = state.users.some(user => user.username === username);
            if (!exists) {
                state.users.push(action.payload);
            } else {
                throw new Error('Пользователь уже существует');
            }
        }
    }
});

export const { registerUser } = usersSlice.actions;

export default usersSlice.reducer;


