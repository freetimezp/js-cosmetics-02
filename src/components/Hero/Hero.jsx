import React from 'react';

import HeroImg from '../../assets/hero.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

import css from './Hero.module.css';

const Hero = () => {
    return (
        <div className={css.container}>
            <div className={css.h_sides}>
                <span className={css.text1}>Skin protection cream</span>
                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>{" "}
                        Seedly say has suitable disposal and boy. Exercise joy man child rejoiced.
                    </span>
                </div>
            </div>

            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="hero" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Trafic</span>
                </div>
                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Clients</span>
                </div>
            </div>
        </div>
    );
}

export default Hero;
