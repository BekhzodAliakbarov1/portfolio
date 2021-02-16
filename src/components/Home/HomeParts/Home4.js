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
                    <p>LoremVelit ea pariatur in laboris ea eu nisi minim.</p>
                    </Zoom>
                    <Zoom right>
                        <p>LoremVelit eiusmod elit nostrud ex eiusmod sint ex tempor in commodo exercitation sint laboris reprehenderit. Et qui occaecat consequat aute voluptate enim laboris dolor do. Id sunt mollit do dolore quis est laborum.</p>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Home4
