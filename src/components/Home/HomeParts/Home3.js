import React from 'react';
import style from './Home3.module.css'
import img1 from '../../../assets/img/logo-adobe.png'
import img2 from '../../../assets/img/logo-paypal.png'
import img3 from '../../../assets/img/logo-google.png'
import img4 from '../../../assets/img/logo-puma.png'
import Flip from 'react-reveal/Flip';


function Home3() {
    return (
        <div className={style.main}>
            <Flip left>
                <div className={style.container}>
                    <div className={style.card1} style={{backgroundImage: `url(${img1})`}}></div>
                    <div className={style.card1} style={{backgroundImage: `url(${img2})`}}></div>
                    <div className={style.card1} style={{backgroundImage: `url(${img3})`}}></div>
                    <div className={style.card1} style={{backgroundImage: `url(${img4})`}}></div>
                    <div className={style.card1} style={{backgroundImage: `url(${img1})`}}></div>
                    <div className={style.card1} style={{backgroundImage: `url(${img1})`}}></div>
                </div>
            </Flip>
        </div>
    )
}

export default Home3
