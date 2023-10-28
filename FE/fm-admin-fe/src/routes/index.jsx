import Home from '../pages/Home'
import ProductManagement from '../pages/ProductManagement'
import UserManagement from '../pages/UserManagement'
import OrderManagement from '../pages/OrderManagement'
import AddNewProduct from '../pages/AddNewProduct'
import EditProduct from '../pages/EditProduct'
import EditOrder from '../pages/EditOrder'

export const populateRoutes = [
    { path: '/', component: Home },
    { path: '/productManagement', component: ProductManagement },
    { path: '/userManagement', component: UserManagement },
    { path: '/orderManagement', component: OrderManagement },
    { path: '/addNewProduct', component: AddNewProduct },
    { path: '/editProduct/:id', component: EditProduct },
    { path: '/editOrder/:id', component: EditOrder },
]

export const privateRoutes = [

]