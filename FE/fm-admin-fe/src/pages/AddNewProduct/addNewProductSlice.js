import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: '',
    error: '',
    newProduct: {},
}

const fetchAddNewProduct = createAsyncThunk(
    'product/fetchAddNewProduct',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('http://localhost:5000/products', payload)
            return data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const addNewProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAddNewProduct.pending]: (state) => {
            state.loading = 'pending'
        },
        [fetchAddNewProduct.fulfilled]: (state, action) => {
            state.loading = 'fulfilled'
            state.newProduct = action.payload
        },
        [fetchAddNewProduct.rejected]: (state, action) => {
            state.loading = 'rejected'
            state.error = action.payload
        }
    }
})

export default addNewProductSlice
export { fetchAddNewProduct }