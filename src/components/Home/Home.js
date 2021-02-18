import React, {useState, useEffect} from 'react'
import Home1 from './HomeParts/Home1'
import style from './Home.module.css'
import Home2 from './HomeParts/Home2'
import Home3 from './HomeParts/Home3'
import Home4 from './HomeParts/Home4'
import Home5 from './HomeParts/Home5'
import Home6 from './HomeParts/Home6'
import Home7 from './HomeParts/Home7'


function Home() {
    const [count, setCount] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setCount(true)
        }, 3000);
        return() => {
            clearTimeout(timeOut)
        }
    }, [])

    return (
        <div className={style.main}>
            <div className={count ? `${style.mainV} ${style.visibleMenu}` :  `${style.mainV} ${style.inVisibleMenu}`}>
                <Home1 title='We are IT compony based on front-end' brend='Welcome'/>
                <Home2 />
                <Home3 />
                <Home4 />
                <Home5 />
                <Home6 />
                <Home7 />
            </div>
            <div className={count ? `${style.logo} ${style.inVisible}` :  `${style.logo} ${style.visible}`}>
                <h1><span>,,</span> HBBH <span>՚՚</span></h1> 
            </div>
        </div>
    )
}

export default Home
