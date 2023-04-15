import React from 'react';

import HeroImg from '../../assets/hero.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';

import css from './Hero.module.css';

const Hero = () => {
    const transition = { duration: 3, type: 'spring' };

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
                <motion.div
                    initial={{ bottom: '2rem' }}
                    whileInView={{ bottom: '0rem' }}
                    transition={transition}
                    className={css.blueCircle}
                ></motion.div>

                <motion.img 
                    src={HeroImg} 
                    alt="hero" 
                    width={600}
                    initial={{ bottom: '-2rem' }}
                    whileInView={{ bottom: '0rem' }}
                    transition={transition}
                />

                <motion.div 
                    className={css.cart2}
                    initial={{ right: "4%" }}
                    whileInView={{ right: "2%" }}
                    transition={transition}
                >
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
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
