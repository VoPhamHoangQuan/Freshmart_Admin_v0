import { PropTypes } from 'prop-types'
import style from './editOrderForm.module.scss'

export default function EditProductFrom() {
    // const [showPopUp, setShowPopUp] = useState(false)
    // const [showError, setShowError] = useState(false)




    // function handleTogglePopupClick() {
    // }

    // function handleConfirmClick() {

    // }


    // function handleCancelClick() {
    //     setShowPopUp(false)
    //     setShowError(false)
    // }

    return (
        <>
            {/* form section */}
            <div className="row">
                {/* popup confirm */}
                {
                    // showPopUp && (
                    //     <div className={style.popup_model}>
                    //         <div className={style.popup_layout}>
                    //         </div>
                    //         <div className={style.popup_container}>
                    //             <span>Please Confirm Change Product Infomation in your store !</span>
                    //             <div className={style.controller}>
                    //                 <button onClick={handleConfirmClick} className='submit_btn'>Confirm</button>
                    //                 <button onClick={handleCancelClick} className='cancel_btn'>Cancel</button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // )
                }
                {/* end popup confirm */}
                {/* popup error */}
                {
                    // showError && (
                    //     <div className={style.popup_model}>
                    //         <div className={style.popup_layout}>
                    //         </div>
                    //         <div className={style.popup_container}>
                    //             <span>You may missing some infomation below !</span>
                    //             <div className={style.controller}>
                    //                 <button onClick={handleCancelClick} className='cancel_btn'>Cancel</button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // )
                }
                {/* end popup error */}
                <div className='col_lg_9_12'>
                    <div className={style.orderInfo_container}>
                        <span className={style.title}>
                            Edit Order Form
                        </span>
                        <div className={style.orderInfo}>
                            <span></span>
                            <></>
                        </div>
                    </div>
                </div>
                <div className='col_lg_3_12'>
                    <div className={style.orderController_container}>
                        <div className={style.controller}>
                            <span>Payment Status</span>
                            <div >
                                <input
                                    type='checkbox'
                                    id='paymentStatus'
                                />
                                <label
                                    htmlFor='paymentStatus'>Paid
                                </label>
                            </div>
                        </div>

                        <div className={style.controller}>
                            <span>Delivery Status</span>
                            <div >
                                <input
                                    type='checkbox'
                                    id='deliveryStatus'
                                />
                                <label
                                    htmlFor='deliveryStatus'>Delivered
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end form section */}
        </>
    )
}

EditProductFrom.propTypes = {
    productInfo: PropTypes.object,
}



