import { PropTypes } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import style from './productTable.module.scss'


export default function ProductTable({ productList, setDeleteProductId }) {
  const navigate = useNavigate()
  const [showPopUp, setShowPopUp] = useState(false)
  const [productId, setProductId] = useState('')

  function handleNewProductOnClick() {
    navigate('/addNewProduct')
  }

  function handleTogglePopupClick(id) {
    setProductId(id)
    setShowPopUp(true)
  }

  function handleConfirmClick() {
    setDeleteProductId(productId)
    setShowPopUp(false)
  }


  function handleCancelClick() {
    setShowPopUp(false)
  }


  return (
    <div className='row'>
      {/* popup confirm */}
      {
        showPopUp && (
          <div className={style.popup_model}>
            <div className={style.popup_layout}>
            </div>
            <div className={style.popup_container}>
              <span>Please Confirm Delete Product in your store !</span>
              <div className={style.controller}>
                <button onClick={handleConfirmClick} className='submit_btn'>Confirm</button>
                <button onClick={handleCancelClick} className='cancel_btn'>Cancel</button>
              </div>
            </div>
          </div>
        )
      }
      {/* end popup confirm */}

      <div className={style.table_wrapper}>
        {/* tabel header */}
        <div className={style.table_headerWrapper}>
          <div className={style.header_nameWrapper}>
            <span className={style.tableName}>
              Product Statistics
            </span>
            <span className={style.tableStatistic}>
              {`Total ${productList.length} Products`}
            </span>
          </div>
          <div
            className={style.table_addBtnWrapper}
            onClick={handleNewProductOnClick}
          >
            <i className="fa-solid fa-plus"></i>
            <span>New Product</span>
          </div>
        </div>
        {/* end table header */}

        {/* table content */}
        <div className={style.table_contentWrapper}>
          <table className={style.table_content}>
            <thead>
              <tr>
                <th className="min_w_20rem">
                  Product
                </th>
                <th className='min_w_10rem'>
                  Quantity
                </th>
                <th className='min_w_10rem'>
                  Origin Price
                </th>
                <th className='min_w_10rem'>
                  Sale Price
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
              {/* product row */}
              {productList.map((product, index) =>
                !product.isDeleted &&
                <tr key={index}>
                  <th className="min_w_20rem">
                    <div className={style.user_col_wrap}>
                      <img className={style.user_image} src={product.image} alt="sds" />
                      <div className={style.userInfo_wrap}>
                        <span className={style.user_name}>{product.name}</span>
                        <span className={style.user_gender}>EXP: {product.exp}</span>
                      </div>
                    </div>
                  </th>
                  <th className='min_w_10rem'>
                    <span >{product.stock}</span>
                  </th>
                  <th className='min_w_10rem'>
                    <span>{product.oldPrice}</span>
                  </th>
                  <th className='min_w_10rem'>
                    <span>{product.primaryPrice}</span>
                  </th>
                  <th className='min_w_10rem'>
                    {
                      product.stock > 0 ?
                        <span style={{ color: 'rgb(50 164 49)' }}>Avalable</span> :
                        <span style={{ color: 'red' }}>Out Of Stock</span>
                    }
                  </th>
                  <th className='min_w_10rem'>
                    <div className={style.action_wrap}>
                      <div
                        className={`${style.action} ${style.normalbtn}`}
                        onClick={() => navigate(`/editProduct/${product._id}`)}
                      >
                        <i className='fa-solid fa-pen-to-square '></i>
                      </div>
                      <div
                        className={`${style.action} ${style.dangerbtn}`}
                        onClick={() => handleTogglePopupClick(product._id)}
                      >
                        <i className='fa-solid fa-trash'></i>
                      </div>
                    </div>
                  </th>
                </tr>
              )}
              {/* end product row */}
            </tbody>
          </table>
        </div>
        {/* end table content */}
      </div>
    </div>


  )
}

ProductTable.propTypes = {
  productList: PropTypes.array,
  setDeleteProductId: PropTypes.func,
}