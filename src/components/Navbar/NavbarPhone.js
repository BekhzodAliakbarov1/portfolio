import React, { useState} from 'react';
import style from './Navbar.module.css';

import {RiMenu3Fill} from 'react-icons/ri'
import {VscChromeClose} from 'react-icons/vsc'
import { Link } from 'react-router-dom';

function NavbarPhone() {
    const [click, setClick] = useState(false)
    // const [scrall, setscrall] = useState(false)

    // useEffect(() => {
    //     const scrall = () =>{
    //         if(window.scrollY > 200){
    //             setscrall(true)
    //         }else{
    //             setscrall(false)
    //         }
    //     }

    //     window.addEventListener('scroll',scrall )
        
    // }, [])
    return (
        <div className={style.mainPhone}>
            <div className={style.visible}>
                <div className={style.containerPhone}>
                    <Link to='/'>
                        HBBH
                    </Link>
                    {click 
                        ? <VscChromeClose onClick={() => setClick(false)}/> 
                        :<RiMenu3Fill onClick={() => setClick(true)}/> 
                    }
                </div>
            </div>
            {
                click &&
                <div className={style.invisible}>
                    <div className={style.clickedMenu}>
                        <Link to='/' onClick={() => setClick(false)}>
                            Home
                        </Link>
                        <Link to='/portfolio' onClick={() => setClick(false)}>
                            Portfolio
                        </Link>
                        <Link to='/about' onClick={() => setClick(false)}>
                            About
                        </Link>
                        <Link to='/services' onClick={() => setClick(false)}>
                            Services
                        </Link>
                        <Link to='/skills' onClick={() => setClick(false)}>
                            Skills
                        </Link>
                        <Link to='/testimonial' onClick={() => setClick(false)}>
                            Testimonial
                        </Link>
                        <Link to='/journal' onClick={() => setClick(false)}>
                            Journal
                        </Link>
                        <Link to='/contact' onClick={() => setClick(false)}>
                            Contact
                        </Link>
                    </div>
                </div>

            }
        </div>
    )
}

export default NavbarPhone
