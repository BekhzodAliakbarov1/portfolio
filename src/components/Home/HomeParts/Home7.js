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
                    <h1>{`</>`}</h1>
                    <Tada>
                        <p>This small company did a great job for us. At the beginning i thought that they cannot do this job but their job was the best one.I advise clinets that they can give their ideas and can see the best result.</p>
                    </Tada>
                    <div className={style.img} style={{backgroundImage: `url(${img1})`}}>

                    </div>
                </div>
                <div className={style.card}>
                    <h1>{`</>`}</h1>
                    <Tada>
                        <p>This HBBH company did a web site to our small market and our clients at the momnet can get all informations about our market and the number of users is continue increasing.</p>
                    </Tada>
                    <div className={style.img} style={{backgroundImage: `url(${img2})`}}>

                    </div>
                </div>
                <div className={style.card}>
                    <h1>{`</>`}</h1>
                    <Tada>
                        <p>I give one websites ideas for this company and they had only two days to complete and i thought that they could not do yhis jab but they are so so masters and they didi that job in time and i am very happy with their jobs</p>
                    </Tada>
                    <div className={style.img} style={{backgroundImage: `url(${img3})`}}>

                    </div>
                </div>
                <div className={style.card}>
                    <h1>{`</>`}</h1>
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
