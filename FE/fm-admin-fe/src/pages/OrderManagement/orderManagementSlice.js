import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: 'pending',
    error: '',
    orderList: [],
}

const fetchGetAllOrder = createAsyncThunk(
    'order/getAllOrder',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('http://localhost:5000/orders')
            return data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const orderManagementSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGetAllOrder.fulfilled]: (state, action) => {
            state.loading = 'fulfilled'
            state.orderList = action.payload
        },
        [fetchGetAllOrder.rejected]: (state, action) => {
            state.loading = 'rejected'
            state.error = action.payload
        },
    }
})

export default orderManagementSlice
export { fetchGetAllOrder }