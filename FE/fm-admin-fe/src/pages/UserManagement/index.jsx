import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import UserTable from "../../components/userComponents/UserTable"
import { fetchGetAllUser } from "./userManagementSlice";

export default function UserManagement() {
    const dispatch = useDispatch();
    const { userList, loading } = useSelector(state => state.userManagement)

    useEffect(() => {
        (async () => {
            await dispatch(fetchGetAllUser())
        })()
    }, [])

    return (
        loading === 'fulfilled' && <UserTable userList={userList} />
    )
}
