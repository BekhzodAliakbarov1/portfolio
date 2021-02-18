import React from 'react'
import style from './Home1.module.css';
import img from '../../../assets/img/about_me_pic2.jpg'

function Home1({title, brend}) {
    return (
        <div id='target' className={style.main} style={{backgroundImage: `url(${img})`}}>
            {
                brend 
                    ?<h1>{brend}</h1>
                    :<h1><span>,,</span> HBBH <span>՚՚</span></h1> 
                
            }
            <h3>{title}</h3>

            <div className={style.scroll}>
                <div></div>
            </div>
            <h5>SCROLL</h5>
        </div>
    )
}

export default Home1
