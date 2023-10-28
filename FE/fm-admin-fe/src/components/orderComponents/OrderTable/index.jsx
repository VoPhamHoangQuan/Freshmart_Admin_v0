import { PropTypes } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import style from './orderTable.module.scss'

export default function OrderTable({ orderList }) {
  const navigate = useNavigate()

  return (
    <div className={style.table_wrapper}>
      {/* tabel header */}
      <div className={style.table_headerWrapper}>
        <div className={style.header_nameWrapper}>
          <span className={style.tableName}>
            Order Statistics
          </span>
          <span className={style.tableStatistic}>
            {
              `Total ${orderList.length} Orders`
            }
          </span>
        </div>
      </div>
      {/* end table header */}

      {/* table content */}
      <div className={style.table_contentWrapper}>
        <table className={style.table_content}>
          <thead>
            <tr>
              <th className="min_w_20rem">
                Order
              </th>
              <th className='min_w_10rem'>
                Total
              </th>
              <th className='min_w_10rem'>
                Payment method
              </th>
              <th className='min_w_10rem'>
                Payment status
              </th>
              <th className='min_w_10rem'>
                Delivery status
              </th>
              <th className='min_w_10rem'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* order row */}
            {
              orderList.map((order, key) => (
                <tr key={key}>
                  <th className="min_w_20rem">
                    <div className={style.user_col_wrap}>
                      <img className={style.user_image} src={order.userInfo.image} alt="sds" />
                      <div className={style.userInfo_wrap}>
                        <span className={style.user_name}>{order.userInfo.name}</span>
                        <span className={style.user_gender}>{order.userInfo.gender}</span>
                      </div>
                    </div>
                  </th>
                  <th className='min_w_10rem'>
                    <span >{order.shippingInfo.shippingPrice + order.shippingInfo.itemsPrice}</span>
                  </th>
                  <th className='min_w_10rem'>
                    <span>{order.paymentMethod}</span>
                  </th>
                  <th className='min_w_10rem'>
                    {order.isPaid ?
                      <span style={{ color: 'rgb(50 164 49)' }}>Paid</span> :
                      <span style={{ color: 'red' }}>Waiting</span>}
                  </th>
                  <th className='min_w_10rem'>
                    {order.isDelivered ?
                      <span style={{ color: 'rgb(50 164 49)' }}>Delivered</span> :
                      <span style={{ color: 'red' }}>Waiting</span>}
                  </th>
                  <th className='min_w_10rem'>
                    <div className={style.action_wrap}>
                      <div
                        className={`${style.action} ${style.normalbtn}`}
                        onClick={() => navigate(`/editOrder/${order._id}`)}
                      >
                        <i className='fa-solid fa-pen-to-square '></i>
                      </div>
                      <div className={`${style.action} ${style.dangerbtn}`}>
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </div>
                  </th>
                </tr>
              ))
            }
            {/* end order row */}



          </tbody>
        </table>
      </div>
      {/* end table content */}

    </div>
  )
}


OrderTable.propTypes = {
  orderList: PropTypes.array,
} 