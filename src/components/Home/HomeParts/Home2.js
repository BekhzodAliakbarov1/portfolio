import React, {useState, useEffect} from 'react'
import style from './Home2.module.css'
import img1 from '../../../assets/img/work_1_md.jpg'
import img2 from '../../../assets/img/work_2_md.jpg'
import img3 from '../../../assets/img/work_3_md.jpg'
import img4 from '../../../assets/img/work_4_full.jpg'
import img5 from '../../../assets/img/work_5_md.jpg'
import img6 from '../../../assets/img/work_6_md.jpg'
import img7 from '../../../assets/img/work_7_a_md.jpg'
import img8 from '../../../assets/img/work_8_md.jpg'
import img9 from '../../../assets/img/work_9_a_md.jpg'


function Home2() {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    useEffect(() => {
        const scrall = () => {
            if(window.scrollY > 280){
                setFirst(true)
            }
            if(window.scrollY > 440){
                setSecond(true)
            }
            if(window.scrollY > 755){
                setThird(true)
            }
        }

        
        window.addEventListener('scroll', scrall)
    }, [])





    return (
        <div className={style.main}>
            <h1>Portfolios</h1>
            <div className={style.container}>
                <div className={first ? `${style.card1} ${style.scroll}` : style.card1} style={{backgroundImage: `url(${first &&img1})`}}><a href="https://react-udemy-9-lesson.vercel.app">Video Search</a></div>
                <div className={first ? `${style.card2} ${style.scroll}` : style.card2} style={{backgroundImage: `url(${first &&img2})`}}><a href="https://corona-tracker-two.vercel.app">Corona Tracker</a></div>
                <div className={first ? `${style.card3} ${style.scroll}` : style.card3} style={{backgroundImage: `url(${first &&img3})`}}><a href="https://react-course-7-lesson.vercel.app">Photo Search</a></div>
            </div>
            <div className={style.container}>
                <div className={second ? `${style.card4} ${style.scroll1}` : style.card4} style={{backgroundImage: `url(${second&& img4})`}}><a href="https://around-the-world-flame.vercel.app">Around the world</a></div>
                <div className={second ? `${style.card5} ${style.scroll1}` : style.card5} style={{backgroundImage: `url(${second&&img5})`}}><a href="https://ecommers-website.vercel.app">Ecommerce</a></div>
                <div className={second ? `${style.card6} ${style.scroll1}` : style.card6} style={{backgroundImage: `url(${second&&img6})`}}><a href="https://calculator-ebon-rho.vercel.app">Calculator</a></div>
            </div>
            <div className={style.container}>
                <div className={third ? `${style.card7} ${style.scroll2}` : style.card4} style={{backgroundImage: `url(${third&& img7})`}}><a href="https://hbbhitcompany-interier.vercel.app">Video Search</a></div>
                <div className={third ? `${style.card8} ${style.scroll2}` : style.card4} style={{backgroundImage: `url(${third&& img8})`}}><a href="https://react-udemy-9-lesson.vercel.app">Video Search</a></div>
                <div className={third ? `${style.card9} ${style.scroll2}` : style.card4} style={{backgroundImage: `url(${third&& img9})`}}><a href="https://react-udemy-9-lesson.vercel.app">Video Search</a></div>

            </div>
        </div>
    )
}



export default Home2
