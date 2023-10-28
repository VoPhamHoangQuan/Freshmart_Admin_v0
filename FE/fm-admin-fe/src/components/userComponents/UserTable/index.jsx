import { PropTypes } from 'prop-types'
import style from './userTable.module.scss'


export default function UserTable({ userList }) {
  return (
    <div className={style.table_wrapper}>
      {/* tabel header */}
      <div className={style.table_headerWrapper}>
        <div className={style.header_nameWrapper}>
          <span className={style.tableName}>
            User Statistics
          </span>
          <span className={style.tableStatistic}>
            {`Total ${userList.length} Users`}
          </span>
        </div>
        <div className={style.table_addBtnWrapper}>
          <i className="fa-solid fa-plus"></i>
          <span>New User</span>
        </div>
      </div>
      {/* end table header */}

      {/* table content */}
      <div className={style.table_contentWrapper}>
        <table className={style.table_content}>
          <thead>
            <tr>
              <th className="min_w_20rem">
                User
              </th>
              <th className='min_w_14rem'>
                Phone
              </th>
              <th className='min_w_10rem'>
                Gender
              </th>
              <th className='min_w_10rem'>
                Status
              </th>
              <th className='min_w_10rem'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* user row */}
            {
              userList.map((user, key) => (
                <tr key={key}>
                  <th className="min_w_20rem">
                    <div className={style.user_col_wrap}>
                      <img className={style.user_image} src={user.image} alt="sds" />
                      <div className={style.userInfo_wrap}>
                        <span className={style.user_name}>{user.name}</span>
                        <span className={style.user_gender}>{user.isAdmin ? 'Admin' : 'User'}</span>
                      </div>
                    </div>
                  </th>
                  <th className='min_w_14rem'>
                    <span >{user.phone}</span>
                  </th>
                  <th className='min_w_10rem'>
                    <span>{user.gender}</span>
                  </th>
                  <th className='min_w_10rem'>
                    <span>{user.isDeleted ? 'Deleted' : 'Avalable'}</span>
                  </th>
                  <th className='min_w_10rem'>
                    <div className={style.action_wrap}>
                      <div className={`${style.action} ${style.normalbtn}`}>
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
            {/* end user row */}
          </tbody>
        </table>
      </div>
      {/* end table content */}

    </div>
  )
}
UserTable.propTypes = {
  userList: PropTypes.array,
}