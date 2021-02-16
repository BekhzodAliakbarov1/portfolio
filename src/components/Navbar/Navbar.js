import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

import style from './Navbar.module.css'

function Navbar() {
    const [scrall, setscrall] = useState(false)

    useEffect(() => {
        const scrall = () =>{
            if(window.scrollY > 200){
                setscrall(true)
            }else{
                setscrall(false)
            }
        }

        window.addEventListener('scroll',scrall )
        
    }, [])
    return (
        <div className={scrall ? style.mainWhite : style.main}>
            <div className={style.container}>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/portfolio'>
                    Portfolio
                </Link>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/services'>
                    Services
                </Link>
                <Link to='/'>
                    HBBH
                </Link>
                <Link to='/skills'>
                    Skills
                </Link>
                <Link to='/testimonial'>
                    Testimonial
                </Link>
                <Link to='/journal'>
                    Journal
                </Link>
                <Link to='/contact'>
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Navbar
