import React from 'react'
import style from './Home6.module.css'
import Bounce from 'react-reveal/Bounce';
import CountUp from 'react-countup';
import LightSpeed from 'react-reveal/LightSpeed';


function Home6() {
    return (
        <div className={style.main}>
            <Bounce top>
                <h1>Our Skills</h1>
            </Bounce>
            <div className={style.container}>
                <LightSpeed left>
                    <div className={style.card}>
                        <div className={style.numbers}>
                            <CountUp start={0} end={90} duration={2} />
                            <span>%</span>
                        </div>
                        <h5>HTML / CSS</h5>
                    </div>
                </LightSpeed>
                <LightSpeed left>
                    <div className={style.card}>
                        <div className={style.numbers}>
                            <CountUp start={0} end={80} duration={2} />
                            <span>%</span>
                        </div>
                        <h5>React</h5>
                    </div>
                </LightSpeed>
                <LightSpeed right>
                    <div className={style.card}>
                        <div className={style.numbers}>
                            <CountUp start={0} end={70} duration={2} />
                            <span>%</span>
                        </div>
                        <h5>JavaScript</h5>
                    </div>
                </LightSpeed>
                <LightSpeed right>
                    <div className={style.card}>
                        <div className={style.numbers}>
                            <CountUp start={0} end={90} duration={2} />
                            <span>%</span>
                        </div>
                        <h5>Wordpress</h5>
                    </div>
                </LightSpeed>
            </div>
        </div>
    )
}

export default Home6
