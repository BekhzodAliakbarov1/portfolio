import React from 'react';
import Carousel from 'react-elastic-carousel';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import style from './Home7.module.css'
import img1 from '../../../assets/img/person_man_1.jpg'
import img2 from '../../../assets/img/person_man_2.jpg'
import img3 from '../../../assets/img/person_woman_1.jpg'


function Home7() {
    return (
        <div className={style.main}>
            <Zoom left>
                <h1>Our happy clients</h1>
            </Zoom>
            <Carousel>
                <div className={style.card}>
                    <h1>!!!</h1>
                    <Tada>
                        <p>LoremLaboris labore laboris occaecat sunt quis et. Do non non occaecat consectetur quis mollit enim officia consectetur non elit officia. Pariatur labore officia duis in laborum dolore. Sunt pariatur</p>
                    </Tada>
                    <div className={style.img} style={{backgroundImage: `url(${img1})`}}>

                    </div>
                </div>
                <div className={style.card}>
                    <h1>!!!</h1>
                    <Tada>
                        <p>LoremLaboris labore laboris occaecat sunt quis et. Do non non occaecat consectetur quis mollit enim officia consectetur non elit officia. Pariatur labore officia duis in laborum dolore. Sunt pariatur</p>
                    </Tada>
                    <div className={style.img} style={{backgroundImage: `url(${img2})`}}>

                    </div>
                </div>
                <div className={style.card}>
                    <h1>!!!</h1>
                    <Tada>
                        <p>LoremLaboris labore laboris occaecat sunt quis et. Do non non occaecat consectetur quis mollit enim officia consectetur non elit officia. Pariatur labore officia duis in laborum dolore. Sunt pariatur</p>
                    </Tada>
                    <div className={style.img} style={{backgroundImage: `url(${img3})`}}>

                    </div>
                </div>
                <div className={style.card}>
                    <h1>!!!</h1>
                    <Tada>
                        <p>LoremLaboris labore laboris occaecat sunt quis et. Do non non occaecat consectetur quis mollit enim officia consectetur non elit officia. Pariatur labore officia duis in laborum dolore. Sunt pariatur</p>
                    </Tada>
                    <div className={style.img} style={{backgroundImage: `url(${img1})`}}>

                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Home7
