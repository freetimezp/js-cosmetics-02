import React from 'react';

import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon } from '@heroicons/react/outline';
import Logo from '../../assets/logo.png';

import css from './Footer.module.css';

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="logo" />
                    <span>Cosmei</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>69000, Zaporizziya, Ukraine</span>
                        </span>
                        <span className={css.pngLine}>
                            {" "}
                            <PhoneIcon className={css.icon} />
                            <a href="tel:123-456-789">123-456-789</a>
                        </span>
                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href="mailto:cosmei@gmail.com">cosmei@gmail.com</a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            Sign In                            
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <a href="/about">
                                <p>About Us</p>
                            </a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <p>Safety Privacy & Terms</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className={css.copyright}>
                <span>Copyright @2023 by Cosmei.</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    );
}

export default Footer;
