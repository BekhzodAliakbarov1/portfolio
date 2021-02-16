import React from 'react'
import style from './Home4.module.css';
import img from "../../../assets/img/cover_bg_2.jpg";
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

function Home4() {
    return (
        <div className={style.main}>
            <Zoom left>
                <h1>About Us</h1>
            </Zoom>
            <div className={style.container}>
                <div className={style.img} style={{backgroundImage: `url(${img})`}}></div>
                <div className={style.info}>
                    <RubberBand>
                        <h1>We can make it together</h1>
                    </RubberBand>
                    <Zoom left>
                    <p>We are small It Company and at the moment we are working as a front-end developers.</p>
                    </Zoom>
                    <Zoom right>
                        <p>Hello we are HBBH It Company which is small it comany based on Front-End. At the moment we are four front-end developers and day by day our knowladge is continue increasing, we can make landing pages advertisements in web apps and we can show our best at the moment we are using the most popular framework which is React and for this reason our webSite is fast and attract users easily!</p>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Home4
