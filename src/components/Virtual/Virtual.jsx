import React from 'react';
import ReactCompareImage from 'react-compare-image';

import Shade from '../../assets/shade.png';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

import css from './Virtual.module.css';

const Virtual = () => {
    return (
        <div className={css.virtual}>
            <div className={css.left}>
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong Shade Again</span>
                <span>Try Now!</span>
                <img src={Shade} alt="shade" />
            </div>

            <div className={css.right}>
                <div className={css.wrapper}>
                    <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
            </div>
        </div>
    );
}

export default Virtual;
