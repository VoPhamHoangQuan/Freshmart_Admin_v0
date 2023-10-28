import { configureStore } from '@reduxjs/toolkit'
import productManagementSlice from '../pages/ProductManagement/productManagementSlice'
import userManagementSlice from '../pages/UserManagement/userManagementSlice'
import orderManagementSlice from '../pages/OrderManagement/orderManagementSlice'
import addNewProductSlice from '../pages/AddNewProduct/addNewProductSlice'
import editProductSlice from '../pages/EditProduct/editProductSlice'

export const store = configureStore({
    reducer: {
        productManagement: productManagementSlice.reducer,
        userManagement: userManagementSlice.reducer,
        orderManagement: orderManagementSlice.reducer,
        addNewProductSlice: addNewProductSlice.reducer,
        editProductSlice: editProductSlice.reducer,
    },
})
