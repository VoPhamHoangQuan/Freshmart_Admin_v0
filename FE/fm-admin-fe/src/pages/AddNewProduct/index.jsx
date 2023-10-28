import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NewProductForm from "../../components/productComponents/NewProductForm"
import { fetchAddNewProduct } from './addNewProductSlice'

export default function AddNewProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState()

    useEffect(() => {
        async function addNewProduct(newProduct) {
            await dispatch(fetchAddNewProduct(newProduct))
            navigate('/productManagement')
        }
        try {
            !!newProduct && addNewProduct(newProduct)
        }
        catch (err) {
            console.log('newProduct is empty')
        }

    }, [newProduct])

    return (
        <NewProductForm
            setNewProduct={setNewProduct}
        />
    )
}
