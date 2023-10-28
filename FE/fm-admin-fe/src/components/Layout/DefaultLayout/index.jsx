import style from './defaultLayout.module.scss'
import PropTypes from 'prop-types'
import logo from '../../../vendors/images/logo_shop.png'
import { Link } from 'react-router-dom'

export default function DefaultLayout({ children }) {
    return (
        <div className={`row ${style.Layout_wrapper}`}>
            <div className={`col_lg_3_12 ${style.sideBar_wrapper}`}>
                <div className={`${style.sideBar_container}`}>
                    <div className={` ${style.sideBar_title}`}>
                        <Link className={style.sideBar_Link} to='/productManagement'>
                            <img src={logo} alt="logo shop" />
                        </Link>
                    </div>
                    <div className={` ${style.sideBar_menu}`}>

                        <div className={style.sideBar_item}>
                            <i className="fa-solid fa-arrow-right"></i>
                            <Link className={style.sideBar_Link} to='/productManagement'>
                                Product Management</Link>
                        </div>

                        <div className={style.sideBar_item}>
                            <i className="fa-solid fa-arrow-right"></i>
                            <Link className={style.sideBar_Link} to='/orderManagement'>
                                Order Management</Link>
                        </div>

                        <div className={style.sideBar_item}>
                            <i className="fa-solid fa-arrow-right"></i>
                            <Link className={style.sideBar_Link} to='/'>
                                comment Management</Link>
                        </div>
                        <div className={style.sideBar_item}>
                            <i className="fa-solid fa-arrow-right"></i>
                            <Link className={style.sideBar_Link} to='/userManagement'>
                                User Management</Link>
                        </div>
                    </div>
                    <div className={style.sideBar_userContainer}>
                        <img src="https://preview.keenthemes.com/metronic8/demo3/assets/media/avatars/300-1.jpg"
                            alt="hi"
                            className={style.user_imageContainer}
                        />
                        <span className={style.user_name}>Roy Jonse</span>
                        <i className="fa-solid fa-gear"></i>
                    </div>
                </div>
            </div>
            <div className={`col_lg_9_12 ${style.content_wrapper}`}>
                <div className={style.content_headerWrapper}>
                    <div className={style.header_welcome}>
                        <span className={style.welcome_userName}>
                            Hello, Roy Jonse.
                        </span>
                        <span className={style.welcome_newSale}>
                            You have got 10 new sales.
                        </span>
                    </div>
                    <div className={style.header_searchContainer}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className={style.searchInput} placeholder='Quick Search' />
                    </div>
                </div>

                {children}
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node,
}
