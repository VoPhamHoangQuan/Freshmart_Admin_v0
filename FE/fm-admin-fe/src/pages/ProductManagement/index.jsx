import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import ProductTable from "../../components/productComponents/ProductTable"
import { fetchGetAllProduct, fetchDeleteProductById } from "./productManagementSlice"

export default function ProductManagement() {
    const dispatch = useDispatch()
    const { productList, loading } = useSelector(state => state.productManagement)
    const [deleteProductId, setDeleteProductId] = useState()
    useEffect(() => {
        (async function () {
            await dispatch(fetchGetAllProduct())
        })()
    }, [])

    useEffect(() => {
        async function deleteProductById(deleteProductId) {
            await dispatch(fetchDeleteProductById(deleteProductId))
            await dispatch(fetchGetAllProduct())
        }
        try {
            !!deleteProductId && deleteProductById(deleteProductId)

        } catch (err) {
            console.log('deleteProductId is empty')
        }
    }, [deleteProductId])

    return (
        loading === 'fulfilled' &&
        <ProductTable
            productList={productList}
            setDeleteProductId={setDeleteProductId} />
    )
}
