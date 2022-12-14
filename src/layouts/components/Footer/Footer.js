import { Link } from 'react-router-dom'
import { useState } from 'react';

import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import styles from "./Footer.module.scss"
import config from "src/config";
import images from "src/assets/images";
// import { SidebarData } from './FooterBarMobile';
import { faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)


function Footer() {
    const [subnav1, setSubnav1] = useState(false)
    const showSubnav1 = () => {
        setSubnav1(!subnav1)
    }

    const [subnav2, setSubnav2] = useState(false)
    const showSubnav2 = () => {
        setSubnav2(!subnav2)
    }

    const [subnav3, setSubnav3] = useState(false)
    const showSubnav3 = () => {
        setSubnav3(!subnav3)
    }

    const [subnav4, setSubnav4] = useState(false)
    const showSubnav4 = () => {
        setSubnav4(!subnav4)
    }

    // const [subnav, setSubnav] = useState(false);

    // const showSubnav = () => setSubnav(!subnav);

    const animate1 = subnav1 ? 'animate' : ''
    const animate2 = subnav2 ? 'animate' : ''
    const animate3 = subnav3 ? 'animate' : ''
    const animate4 = subnav4 ? 'animate' : ''

    const classes1 = cx('wrap__column-footer', animate1)
    const classes2 = cx('wrap__column-footer', animate2)
    const classes3 = cx('wrap__column-footer', animate3)
    const classes4 = cx('wrap__column-footer', animate4)


    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    <div className={cx('wide l-4 m-12 c-12')}>
                        <div className={cx('wrap-logo')}>
                            <Link to={config.routes.home} className={cx('logo-link')}>
                                <img src={images.logo} alt='Logo' className={cx('img-logo')} />
                            </Link>
                            <div className={cx('text')}>Ch??ng t??i ph??t tri???n chu???i c???a h??ng ti??u chu???n v?? Apple Mono Store nh???m mang ?????n tr???i nghi???m t???t nh???t v??? s???n ph???m v?? d???ch v??? c???a Apple cho ng?????i d??ng Vi???t Nam.</div>
                            <div className={cx('wrap-icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wide l-2 m-3 c-0')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')}>
                                <ul className={cx('heading')}>S???n ph???m</ul>

                            </div>
                            <div className={cx('wrap__column-footer')}>
                                <Link to={config.routes.iphone} className={cx('information')}>iPhone</Link><br />
                                <Link to={config.routes.ipad} className={cx('information')}>iPad</Link><br />
                                <Link to={config.routes.mac} className={cx('information')}>Mac</Link><br />
                                <Link to={config.routes.watch} className={cx('information')}>Apple Watch</Link><br />
                                <Link to={config.routes.loudspeaker} className={cx('information')}>??m thanh</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wide l-2 m-3 c-0')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')}>
                                <ul className={cx('heading')}>Th??ng tin</ul>

                            </div>
                            <div className={cx('wrap__column-footer')}>
                                <Link to='' className={cx('information')}>Gi???i thi???u</Link><br />
                                <Link to='' className={cx('information')}>Khuy???n m??i</Link><br />
                                <Link to='' className={cx('information')}>B???o h??nh v?? s???a ch???a</Link><br />
                                <Link to='' className={cx('information')}>Tuy???n d???ng</Link><br />
                                <Link to='' className={cx('information')}>Tin t???c</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wide l-2 m-3 c-0')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')}>
                                <ul className={cx('heading')}>Ch??nh s??ch</ul>

                            </div>
                            <div className={cx('wrap__column-footer')}>
                                <Link to='' className={cx('information')}>Tr??? g??p</Link><br />
                                <Link to='' className={cx('information')}>Giao h??ng</Link><br />
                                <Link to='' className={cx('information')}>?????i tr???</Link><br />
                                <Link to='' className={cx('information')}>B???o h??nh</Link><br />
                                <Link to='' className={cx('information')}>H???y giao d???ch</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wide l-2 m-3 c-0')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')}>
                                <ul className={cx('heading')}>Li??n h???</ul>

                            </div>
                            <div className={cx('wrap__column-footer')}>
                                <div><span className={cx('information-call')}>Mua h??ng:</span><span className={cx('call')}>113</span></div>
                                <div><span className={cx('information-call')}>Khi???u n???i:</span><span className={cx('call')}>114</span></div>
                                <div><span className={cx('information-call')}>?????i t??c v?? Doanh nghi???p:</span><span className={cx('call')}>115</span></div>
                                <img className={cx('bocongthuong')} src={images.bocongthuong} alt="bocongthuong" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}

                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')} onClick={showSubnav1}>
                                <ul className={cx('heading')}>S???n ph???m</ul>
                                <div className={cx('icon')}>
                                    {subnav1 && (<FontAwesomeIcon icon={faSortUp} />)}
                                    {!subnav1 && (<FontAwesomeIcon icon={faSortDown} />)}
                                </div>
                            </div>
                            <div className={classes1}>
                                <Link to={config.routes.iphone} className={cx('information')}>iPhone</Link><br />
                                <Link to={config.routes.ipad} className={cx('information')}>iPad</Link><br />
                                <Link to={config.routes.mac} className={cx('information')}>Mac</Link><br />
                                <Link to={config.routes.watch} className={cx('information')}>Apple Watch</Link><br />
                                <Link to={config.routes.loudspeaker} className={cx('information')}>??m thanh</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')} onClick={showSubnav2}>
                                <ul className={cx('heading')}>Th??ng tin</ul>
                                <div className={cx('icon')}>
                                    {subnav2 && (<FontAwesomeIcon icon={faSortUp} />)}
                                    {!subnav2 && (<FontAwesomeIcon icon={faSortDown} />)}
                                </div>
                            </div>
                            <div className={classes2}>
                                <Link to='' className={cx('information')}>Gi???i thi???u</Link><br />
                                <Link to='' className={cx('information')}>Khuy???n m??i</Link><br />
                                <Link to='' className={cx('information')}>B???o h??nh v?? s???a ch???a</Link><br />
                                <Link to='' className={cx('information')}>Tuy???n d???ng</Link><br />
                                <Link to='' className={cx('information')}>Tin t???c</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')} onClick={showSubnav3}>
                                <ul className={cx('heading')}>Ch??nh s??ch</ul>
                                <div className={cx('icon')}>
                                    {subnav3 && (<FontAwesomeIcon icon={faSortUp} />)}
                                    {!subnav3 && (<FontAwesomeIcon icon={faSortDown} />)}
                                </div>
                            </div>
                            <div className={classes3}>
                                <Link to='' className={cx('information')}>Tr??? g??p</Link><br />
                                <Link to='' className={cx('information')}>Giao h??ng</Link><br />
                                <Link to='' className={cx('information')}>?????i tr???</Link><br />
                                <Link to='' className={cx('information')}>B???o h??nh</Link><br />
                                <Link to='' className={cx('information')}>H???y giao d???ch</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')} onClick={showSubnav4}>
                                <ul className={cx('heading')}>Li??n h???</ul>
                                <div className={cx('icon')}>
                                    {subnav4 && (<FontAwesomeIcon icon={faSortUp} />)}
                                    {!subnav4 && (<FontAwesomeIcon icon={faSortDown} />)}
                                </div>
                            </div>
                            <div className={classes4}>
                                <div><span className={cx('information-call')}>Mua h??ng:</span><span className={cx('call')}>113</span></div>
                                <div><span className={cx('information-call')}>Khi???u n???i:</span><span className={cx('call')}>114</span></div>
                                <div><span className={cx('information-call')}>?????i t??c v?? Doanh nghi???p:</span><span className={cx('call')}>115</span></div>

                            </div>
                        </div>
                    </div>
                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-contact')}>
                            <div className={cx('wrap-bocongthuong')}>
                                <img className={cx('bocongthuong')} src={images.bocongthuong} alt="bocongthuong" />
                            </div>
                            <div className={cx('wrap-icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;