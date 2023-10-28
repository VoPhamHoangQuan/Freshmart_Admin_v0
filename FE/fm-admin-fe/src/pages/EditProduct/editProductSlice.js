import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: '',
    error: '',
    productInfo: {},
    oldProduct: {},
}

const fetchGetProductById = createAsyncThunk(
    'editProduct/fetchGetProductById',
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `http://localhost:5000/products/getProductById/${payload}`
            )
            return data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const fetchEditProductById = createAsyncThunk(
    '/editProduct/fetchEditProductById',
    async (payload, { rejectWithValue }) => {
        try {
            const productId = payload.productId
            const newProductInfo = payload.newProductInfo
            const { data } = await axios.put(
                `http://localhost:5000/products/editProductById/${productId}`,
                newProductInfo
            )
            return data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

const editProductSlice = createSlice({
    name: 'editProduct',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchGetProductById.pending]: (state) => {
            state.loading = 'pending'
        },
        [fetchGetProductById.fulfilled]: (state, action) => {
            state.loading = 'fulfilled',
                state.productInfo = action.payload
        },
        [fetchGetProductById.rejected]: (state, action) => {
            state.loading = 'rejected',
                state.error = action.payload
        },
        [fetchEditProductById.pending]: (state) => {
            state.loading = 'pending'
        },
        [fetchEditProductById.fulfilled]: (state, action) => {
            state.oldProduct = action.payload
        },
        [fetchEditProductById.rejected]: (state, action) => {
            state.loading = 'rejected'
            state.error = action.payload
        }
    }
})

export default editProductSlice
export { fetchGetProductById, fetchEditProductById }