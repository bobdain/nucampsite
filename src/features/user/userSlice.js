import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null
};

const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            setCurrentUser: (state, action) => {
                return { ...state, currentUser: action.payload }; // QUESTION: Why do we need to spread the current state?
            }
        }
    }
);

export const userReducer = userSlice.reducer;
export const { setCurrentUser} = userSlice.actions;
export const selectCurrentUser = (state) => state.user.currentUser;