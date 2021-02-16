import React from 'react'
import style from './Home1.module.css';
import img from '../../../assets/img/about_me_pic2.jpg'

function Home1() {
    return (
        <div className={style.main} style={{backgroundImage: `url(${img})`}}>
            <h1>HBOBH</h1>
            <h3>we are it compony based on front-end</h3>

            <div className={style.scroll}>
                <div></div>
            </div>
            <h5>SCROLL</h5>
        </div>
    )
}

export default Home1
