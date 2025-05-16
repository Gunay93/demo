import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";
import {FaMoneyCheckAlt, FaRegFileExcel, FaShoppingBasket, FaStoreAlt, FaTag} from "react-icons/fa";
import { GrDomain, GrAnalytics, GrMoney } from "react-icons/gr";
import { MdCampaign, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { countConfirmCampaign } from "../redux/setting/campaign/campaignSlice";
import { countPendingStores } from "../redux/stores/store-gallery/storeGallerySlice";
import { countStores } from "../redux/product-pending/productPendingSlice";
import { countsTemplate } from "../redux/setting/store/excelTemplateSlice";
import checkSection from "../helpers/checkSection";
import { retrieveStorePendingCount } from "../redux/stores/store/storeSlice";
import checkPermission from "../helpers/checkPermission";


const SideBar = () => {
    const dispatch = useDispatch();
    const [isMenuOpen, setMenuOpen] = useState(true);
    const { count: campaignCount } = useSelector(state => state.campaigns);
    const { count: storeCount } = useSelector(state => state.storeGallery);
    const { count: storePendingCount } = useSelector(state => state.stores);
    const { count: storeProductPendingCount } = useSelector(state => state.productPending);
    const { count: excelTemplateCount } = useSelector(state => state.excelTemplate);
    
    useEffect(() => {
        dispatch(countConfirmCampaign());
        dispatch(countPendingStores());
        dispatch(countStores());
        dispatch(retrieveStorePendingCount());
        dispatch(countsTemplate());
    }, [dispatch]);

    const closeMenuBar = () => {
        document.getElementById('navbarVerticalCollapse').classList.remove('show')
    }
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const renderBadge = (count, variant) => (
        count ? <Badge pill variant={variant} style={{ marginLeft: "auto", marginRight: 0 }}>{count}</Badge> : null
    );
    
    return (
        <div className={`sidebar ${!isMenuOpen && 'w-92'}`}>
            <nav
                className={`navbar navbar-light m-0 navbar-vertical navbar-expand-xl navbar-inverted sidebar-nav ${!isMenuOpen && 'w-92'}`}>
                <div className="d-flex gap-3 align-items-center pb-xl-5">
                    <div className="toggle-icon-wrapper m-0" onClick={toggleMenu}>
                        <button className="btn navbar-toggler-humburger-icon navbar-vertical-toggle p-0"
                            data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation"><span
                                className="navbar-toggle-icon"><span className="toggle-line"></span></span></button>

                    </div>
                    <Link to='/' className={`navbar-brand me-0 ${!isMenuOpen && 'd-none'}`} href="/">
                        <div className="d-flex align-items-center">
                            <img src="/assets/img/icons/spot-illustrations/cosmetica.svg" alt="logo" width={150} />
                        </div>
                    </Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
                    <div className="navbar-vertical-content scrollbar">
                        <ul className="navbar-nav flex-column py-3 py-xl-0" id="navbarVerticalNav">
                            <li className="nav-item">
                                {/* <Link to='/' className="nav-link" role="button" aria-expanded="false" onClick={closeMenuBar}>
                                    <div className="d-flex align-items-center"><span className="nav-link-icon">
                                        <span className="fas fa-chart-pie fa-w-20"></span></span>
                                        <span className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Dashboard</span>
                                    </div>
                                </Link> */}

                                {/* {
                                    checkSection('statistika') ? ( */}
                                        <Link to='/' className="nav-link" role="button" onClick={closeMenuBar}
                                            aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <GrAnalytics />
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Dashboard</span>

                                            </div>
                                        </Link>
                                    {/* ) : ''
                                } */}
                                

                                {/*<Link to='/product' className="nav-link" role="button" aria-expanded="false">*/}
                                {/*    <div className="d-flex align-items-center"><span className="nav-link-icon"><span*/}
                                {/*        className="fas fa-box-open"></span></span><span*/}
                                {/*        className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Products</span>*/}
                                {/*    </div>*/}
                                {/*</Link>*/}

                                {/* {
                                    checkSection('order') ? ( */}
                                        <Link to='/order' className="nav-link" role="button" aria-expanded="false" onClick={closeMenuBar}>
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    {/*<span className="fas fa-cart-shopping"></span>*/}
                                                    <FaShoppingBasket />
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Order</span>
                                            </div>
                                        </Link>
                                    {/* ) : ''
                                } */}

                                {
                                    checkSection('product-variants') ? (
                                        <Link to='/product-variants' className="nav-link" role="button" onClick={closeMenuBar}
                                            aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <MdOutlineProductionQuantityLimits />
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Product Variants</span>
                                            </div>
                                        </Link>) : ''
                                }

                                {
                                    checkSection('product-pending') && checkPermission('storesProductPending') ? (

                                        storeProductPendingCount?.data && storeProductPendingCount?.data?.countSingle > 0 ? (
                                            <Link to='/store-data-pending/1' className="nav-link" role="button" onClick={closeMenuBar}
                                                aria-expanded="false">
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-icon">
                                                        <MdOutlineProductionQuantityLimits />
                                                    </span>
                                                    <span className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Product Pending
                                                    </span>
                                                    {/*<span className="spinner-grow spinner-grow-sm text-warning " role="status"*/}
                                                    {/*      style={{width: '10px', height: '10px', marginLeft: '50px'}}*/}
                                                    {/*      aria-hidden="true"></span>*/}
                                                    {renderBadge(storeProductPendingCount?.data?.countSingle + storeProductPendingCount?.data?.countBulk + storeProductPendingCount?.data?.countApi, "primary")}

                                                </div>
                                            </Link>) : (
                                            <Link to='/store-data-pending/2' className="nav-link" role="button" onClick={closeMenuBar}
                                                aria-expanded="false">
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-icon">
                                                        <MdOutlineProductionQuantityLimits />
                                                    </span>
                                                    <span className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Product Pending
                                                    </span>
                                                    {/*<span className="spinner-grow spinner-grow-sm text-warning " role="status"*/}
                                                    {/*      style={{width: '10px', height: '10px', marginLeft: '50px'}}*/}
                                                    {/*      aria-hidden="true"></span>*/}
                                                    {renderBadge(storeProductPendingCount?.data?.countSingle + storeProductPendingCount?.data?.countBulk + storeProductPendingCount?.data?.countApi, "primary")}

                                                </div>
                                            </Link>)
                                    ) : ''
                                }

{
                                    // checkSection('stores') ? (
                                        storePendingCount?.data && storePendingCount?.data?.storePendingCount > 0 ? (

                                                <Link to='/store/pendding' className="nav-link" role="button" onClick={closeMenuBar}
                                                      aria-expanded="false">
                                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <FaStoreAlt></FaStoreAlt>
                                        </span>
                                                        <span
                                                            className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Stores</span>
                                                        {renderBadge(storePendingCount?.data?.storePendingCount, "primary")}
                                                    </div>
                                                </Link>) :
                                            (<Link to='/stores' className="nav-link" role="button" onClick={closeMenuBar}
                                                   aria-expanded="false">
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-icon">
                                                        <FaStoreAlt></FaStoreAlt>
                                                    </span>
                                                    <span
                                                        className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Stores</span>
                                                    {renderBadge(storePendingCount?.data?.storePendingCount, "primary")}
                                                </div>
                                            </Link>)
                                    // ) : ''
                                }

                                {
                                    checkSection('store-gallery') ? (
                                        <Link to='/store-gallery/stores' className="nav-link" role="button" onClick={closeMenuBar}
                                            aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <FaStoreAlt></FaStoreAlt>
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Store Gallery </span>
                                                {renderBadge(storeCount.data, "primary")}


                                            </div>
                                        </Link>) : ''
                                }
                                
                                {
                                    checkSection('excel-template-upload') ? (
                                        <Link to='/excel-template-uploads' className="nav-link" role="button" onClick={closeMenuBar}
                                            aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <FaRegFileExcel />
                                                </span>
                                                <span className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Excel Template Uploads</span>
                                                {renderBadge(parseInt(excelTemplateCount?.updatePriceCount) + parseInt(excelTemplateCount?.updateInfoCount) + parseInt(excelTemplateCount?.deleteCount) + parseInt(excelTemplateCount?.importCount), "primary")}

                                            </div>
                                        </Link>
                                    ) : ''
                                }

                                {
                                    checkSection('main-sliders') ? (
                                        <Link to='/main-sliders' className="nav-link" role="button" onClick={closeMenuBar}
                                            aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <GrDomain></GrDomain>
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Main Sliders</span>
                                            </div>
                                        </Link>
                                    ) : ''
                                }

                                
                                {
                                    checkSection('users') ? (
                                        <Link to='/users' className="nav-link" role="button" aria-expanded="false" onClick={closeMenuBar}>
                                            <div className="d-flex align-items-center"><span
                                                className="nav-link-icon"><span
                                                    className="fas fa-users"></span></span><span
                                                        className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Users</span>
                                            </div>
                                        </Link>) : ''
                                }

                                {
                                    checkSection('campaign') ? (
                                        <Link to='/campaign' className="nav-link" role="button" aria-expanded="false" onClick={closeMenuBar}>
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <MdCampaign />
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Campaign</span>
                                                {renderBadge(campaignCount.data, "primary")}


                                            </div>
                                        </Link>) : ''
                                }
                                {
                                    checkSection('cashback') ? (
                                        <Link to='/cashbacks' className="nav-link" role="button" aria-expanded="false" onClick={closeMenuBar}>
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <FaMoneyCheckAlt />
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Cashback</span>

                                            </div>
                                        </Link>) : ''
                                }
                                {/* {
                                    checkSection('finance') ? ( */}
                                        <Link to='/finance/store' className="nav-link" role="button" onClick={closeMenuBar}
                                              aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <GrMoney />
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Finans</span>

                                            </div>
                                        </Link>
                                    {/* ) : ''
                                } */}
                                {/* {
                                    checkSection('statistika') ? ( */}
                                        {/* <Link to='/analytics/statistics' className="nav-link" role="button" onClick={closeMenuBar}
                                            aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <GrAnalytics />
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Statistika</span>

                                            </div>
                                        </Link> */}
                                    {/* ) : ''
                                } */}
                                {/* {
                                    checkSection('promotion') ? ( */}
                                        <Link to='/promotion' className="nav-link" role="button" onClick={closeMenuBar}
                                            aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <span className="nav-link-icon">
                                                    <FaTag />
                                                </span>
                                                <span
                                                    className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Promotion</span>

                                            </div>
                                        </Link>
                                    {/* ) : ''
                                } */}
                                <Link to='/settings' className="nav-link" role="button" aria-expanded="false" onClick={closeMenuBar}>
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            {/* <span className="fa fa-gears"></span> */}
                                            <AiFillSetting></AiFillSetting>
                                        </span>
                                        <span
                                            className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Settings</span>
                                    </div>
                                </Link>

                                {
                                    checkSection('blog') ||  checkSection('category-blog') ? (
                                        <Link to='/articles' className="nav-link" role="button" aria-expanded="false" onClick={closeMenuBar}>
                                            <div className="d-flex align-items-center"><span
                                                className="nav-link-icon"><span
                                                className="fas fa-blog"></span></span><span
                                                className={`nav-link-text ps-3 ${!isMenuOpen && 'd-none'}`}>Məqalələr</span>
                                            </div>
                                        </Link>) : ''
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SideBar;