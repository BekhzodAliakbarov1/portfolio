import React from 'react';
import style from './Footer2.module.css'


function Footer2() {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <h1><span>H</span>B<span></span>B<span>H</span></h1>
                <div className={style.web}>
                    <h3><a href="https://t.me/hbbhItCompany">telegram</a></h3>
                    <h3><a href="https://instagram.com/hbbhitcompany">Instagram</a></h3>
                    <h3><a href="">Facebook</a></h3>
                    <h3><a href="">linkedin</a></h3>
                    <h3><a href="">twitter</a></h3>
                </div>
                <h3>Copyright © 2021 All rights reserved | This is made with by HBBH</h3>
            </div>
        </div>
    )
}

export default Footer2
