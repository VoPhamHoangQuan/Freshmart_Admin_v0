import { useState } from 'react';
import { PropTypes } from 'prop-types'
import style from './editProductForm.module.scss'
import uploadImage from '../../../vendors/js/uploadImage';

export default function EditProductFrom({ productInfo, setNewProductInfo }) {
    const [showPopUp, setShowPopUp] = useState(false)
    const [showError, setShowError] = useState(false)

    const [name, setName] = useState(productInfo.name)
    const [description, setDescription] = useState(productInfo.description)
    const [category, setCategory] = useState(productInfo.category)
    const [image, setImage] = useState(productInfo.image)
    const [oldPrice, setOldPrice] = useState(productInfo.oldPrice)
    const [primaryPrice, setPrimaryPrice] = useState(productInfo.primaryPrice)
    const [origin, setOrigin] = useState(productInfo.origin)
    const [brand, setBrand] = useState(productInfo.brand)
    const [weight, setWeight] = useState(productInfo.weight)
    const [exp, setExp] = useState(productInfo.exp)
    const [stock, setStock] = useState(productInfo.stock)


    function handleTogglePopupClick() {
        if (
            !!name &&
            !!description &&
            !!category &&
            !!image &&
            !!primaryPrice &&
            !!oldPrice &&
            !!origin &&
            !!brand &&
            !!weight &&
            !!exp &&
            !!stock) {
            setShowPopUp(true)
        } else {
            setShowError(true)
        }
    }

    function handleConfirmClick() {
        if (image != productInfo.image) {
            uploadImage(image).then(
                (downloadUrl) => {
                    const inputProduct = {
                        name,
                        description,
                        category,
                        image: downloadUrl,
                        primaryPrice,
                        oldPrice,
                        origin,
                        brand,
                        weight,
                        exp,
                        stock
                    }
                    setNewProductInfo(inputProduct)
                    setShowPopUp(false)
                }
            )
        } else {
            const inputProduct = {
                name,
                description,
                category,
                image,
                primaryPrice,
                oldPrice,
                origin,
                brand,
                weight,
                exp,
                stock
            }
            setNewProductInfo(inputProduct)
            setShowPopUp(false)
        }
    }


    function handleCancelClick() {
        setShowPopUp(false)
        setShowError(false)
    }

    return (
        <>
            {/* form section */}
            <div className="row">
                {/* popup confirm */}
                {
                    showPopUp && (
                        <div className={style.popup_model}>
                            <div className={style.popup_layout}>
                            </div>
                            <div className={style.popup_container}>
                                <span>Please Confirm Change Product Infomation in your store !</span>
                                <div className={style.controller}>
                                    <button onClick={handleConfirmClick} className='submit_btn'>Confirm</button>
                                    <button onClick={handleCancelClick} className='cancel_btn'>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* end popup confirm */}
                {/* popup error */}
                {
                    showError && (
                        <div className={style.popup_model}>
                            <div className={style.popup_layout}>
                            </div>
                            <div className={style.popup_container}>
                                <span>You may missing some infomation below !</span>
                                <div className={style.controller}>
                                    <button onClick={handleCancelClick} className='cancel_btn'>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* end popup error */}
                <div className={style.container}>
                    <div className={style.form_container}>
                        <form>
                            <div className={style.title_container}>
                                <span>Edit Product</span>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productName'>Name *</label>
                                <input
                                    type='text'
                                    id='productName'
                                    placeholder='Enter product name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                ></input>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productDescription'>Description *</label>
                                <textarea
                                    id='productDescription'
                                    placeholder='Enter Product Description'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productCategory'>Category *</label>
                                <select
                                    id='productCategory'
                                    defaultValue={category}
                                    onChange={e => setCategory(e.target.value)}
                                >
                                    <option value='chicken'>Chicken</option>
                                    <option value='pork'>Pork</option>
                                    <option value='egg'>Egg</option>
                                    <option value='fish'>Fish</option>
                                    <option value='sea food'>Sea Food</option>
                                    <option value='vegetable'>Vegetable</option>
                                    <option value='root vegetable'>Root Vegetable</option>
                                    <option value='fruit'>Fruit</option>
                                </select>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productImage'>Image *</label>
                                <div className={style.image_container}>
                                    <img
                                        src={image}
                                        alt='product image' />
                                    <input
                                        style={{ border: 'none' }}
                                        type="file" id='productImage'
                                        placeholder='Choose Product Image'
                                        onChange={e => {
                                            setImage(e.target.files[0])
                                        }}
                                    ></input>
                                </div>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productPrice'>Price (VND) *</label>
                                <input
                                    type="number"
                                    id='productPrice'
                                    placeholder='Enter Product Price'
                                    value={oldPrice}
                                    onChange={e => setOldPrice(e.target.value)}
                                ></input>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productDiscount'>Discount Price (VND)</label>
                                <input
                                    type="number"
                                    id='productDiscount'
                                    placeholder='Enter Product Discount Price'
                                    value={primaryPrice}
                                    onChange={e => setPrimaryPrice(e.target.value)}
                                ></input>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productOrigin'>Origin *</label>
                                <input
                                    type='text'
                                    id='productOrigin'
                                    placeholder='Enter product Orgin'
                                    value={origin}
                                    onChange={e => setOrigin(e.target.value)}
                                ></input>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productBrand'>Brand *</label>
                                <input
                                    type='text'
                                    id='productBrand'
                                    placeholder='Enter product Brand'
                                    value={brand}
                                    onChange={e => setBrand(e.target.value)}
                                ></input>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productWeight'>Weight (g) *</label>
                                <input
                                    type='number'
                                    id='productWeight'
                                    placeholder='Enter product Weight'
                                    value={weight}
                                    onChange={e => setWeight(e.target.value)}
                                ></input>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productExp'>Expiration Date *</label>
                                <input
                                    type='date'
                                    id='productExp'
                                    placeholder='Enter product Expiration Date'
                                    value={exp}
                                    onChange={e => setExp(e.target.value)}
                                ></input>
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor='productStock'>In Stock*</label>
                                <input
                                    type='number'
                                    id='productStock'
                                    placeholder='Enter Number Of Product In Stock'
                                    value={stock}
                                    onChange={e => setStock(e.target.value)}
                                ></input>
                            </div>
                            <div className={style.btn_container}>
                                <button
                                    type='button'
                                    onClick={handleTogglePopupClick}
                                    className='submit_btn'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* end form section */}
        </>
    )
}

EditProductFrom.propTypes = {
    productInfo: PropTypes.object,
    setNewProductInfo: PropTypes.func,
}



