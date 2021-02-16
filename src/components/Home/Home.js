import React from 'react'
import Home1 from './HomeParts/Home1'
import style from './Home.module.css'
import Home2 from './HomeParts/Home2'
import Home3 from './HomeParts/Home3'
import Home4 from './HomeParts/Home4'
import Home5 from './HomeParts/Home5'
import Home6 from './HomeParts/Home6'
import Home7 from './HomeParts/Home7'
import Footer from '../Footer/Footer'


function Home() {
    return (
        <div className={style.main}>
            <Home1 title='we are it compony based on front-end'/>
            <Home2 />
            <Home3 />
            <Home4 />
            <Home5 />
            <Home6 />
            <Home7 />
        </div>
    )
}

export default Home
