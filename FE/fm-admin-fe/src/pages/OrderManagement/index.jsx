import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import OrderTable from "../../components/orderComponents/OrderTable"
import { fetchGetAllOrder } from "./orderManagementSlice"

export default function OrderManagement() {
    const dispatch = useDispatch()
    const { orderList, loading } = useSelector(state => state.orderManagement)

    useEffect(() => {
        (async () => {
            await dispatch(fetchGetAllOrder())
        })()
    }, [])

    return (
        loading === 'fulfilled' && <OrderTable orderList={orderList} />
    )
}
