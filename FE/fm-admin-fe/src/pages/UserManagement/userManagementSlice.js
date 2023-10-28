import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: 'pending',
    error: '',
    userList: [],
}

const fetchGetAllUser = createAsyncThunk(
    'user/fetchGetAllUser',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('http://localhost:5000/users');
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
)

const userManagementSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGetAllUser.pending]: (state) => {
            state.loading = 'pending';
        },
        [fetchGetAllUser.fulfilled]: (state, action) => {
            state.userList = action.payload;
            state.loading = 'fulfilled';
        },
        [fetchGetAllUser.rejected]: (state, action) => {
            state.loading = 'rejected';
            state.error = action.payload;
        }
    }
})

export default userManagementSlice;
export { fetchGetAllUser };