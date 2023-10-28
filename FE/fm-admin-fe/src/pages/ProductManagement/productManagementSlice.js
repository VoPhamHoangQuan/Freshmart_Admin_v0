import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: 'pending',
    error: '',
    productList: [],
    oldProduct: {},
}

const fetchGetAllProduct = createAsyncThunk(
    'product/fetchGetAllProduct',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('http://localhost:5000/products')
            return data
        }
        catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const fetchDeleteProductById = createAsyncThunk(
    '/product/fetchDeleteProductById',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`http://localhost:5000/products/deleteProductById/${payload}`)
            return data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const productManagementSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGetAllProduct.pending]: (state) => {
            state.loading = 'pending'
        },
        [fetchGetAllProduct.fulfilled]: (state, action) => {
            state.productList = action.payload
            state.loading = 'fulfilled'
        },
        [fetchGetAllProduct.rejected]: (state, action) => {
            state.error = `${action.payload}`
            state.loading = 'rejected'
        },
        [fetchDeleteProductById.fulfilled]: (state, action) => {
            state.oldProduct = action.payload
        },
        [fetchDeleteProductById.rejected]: (state, action) => {
            state.error = `${action.payload}`
            state.loading = 'rejected'
        },
    }
})

export default productManagementSlice
export { fetchGetAllProduct, fetchDeleteProductById }