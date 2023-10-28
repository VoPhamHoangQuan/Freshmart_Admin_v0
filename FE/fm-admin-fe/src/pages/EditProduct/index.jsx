import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import {
    fetchGetProductById,
    fetchEditProductById
} from './editProductSlice'
import EditProductFrom from "../../components/productComponents/EditProductForm"

export default function EditProduct() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    const [newProductInfo, setNewProductInfo] = useState()
    const { productInfo, loading } = useSelector(state => state.editProductSlice)


    useEffect(() => {
        (async function (id) {
            await dispatch(fetchGetProductById(id))
        })(id)
    }, [])

    useEffect(() => {
        async function editProduct(id, newProductInfo) {
            await dispatch(fetchEditProductById(
                {
                    productId: id,
                    newProductInfo: newProductInfo
                }))
            navigate('/productManagement')
        }
        try {
            !!newProductInfo && editProduct(id, newProductInfo)
        } catch (err) {
            console.log('editProduct is empty')
        }
    }, [newProductInfo])



    return (
        loading === 'fulfilled' && <EditProductFrom productInfo={productInfo} setNewProductInfo={setNewProductInfo}></EditProductFrom>
    )
}
