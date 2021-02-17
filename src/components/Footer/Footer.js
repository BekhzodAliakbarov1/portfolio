import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import style from './Footer.module.css'


function Footer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [cliced, setCliced] = useState(false)

    const timeOut = () => {
        const time =  setTimeout(() => {
            setCliced(false)
        }, 4000);
    }

    const click = () => {
        setEmail('')
        setName('')
        setMessage('')
        setCliced(true)
        timeOut()
    }

    return (
        <div className={style.main}>
            <Zoom left>
                <h1>Our happy clients</h1>
            </Zoom>
            <div className={style.container}>
                <div className={style.inputs}>
                    <div className={style.input}>
                        <Roll left>
                        <input 
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            type="text" 
                            placeholder='NAME' 
                            required
                        />
                        </Roll>
                        <Roll right>
                            <input 
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                type="email" 
                                placeholder='EMAIL' 
                                required
                            />
                        </Roll>
                        <Flip>
                            <textarea
                                value={message}
                                onChange={(e)=> setMessage(e.target.value)} 
                                placeholder='MESSAGE...'
                            ></textarea>
                        </Flip>
                    </div>
                    <div className={style.button} onClick={click}>
                        Send Message
                    </div>
                    {cliced && <div style={{padding:'5px'}}><h6 style={{color: 'green'}}>Successfull</h6></div>}
                </div>
                <div className={style.information}>
                    <Zoom>
                    <div>
                        <h4>EMAIL</h4>
                        <h3 type='email'>hbbhitcomapny@gmail.com</h3>
                    </div>
                    </Zoom>
                    <Zoom>
                    <div>
                        <h4>PHONE</h4>
                        <h3>+998996026611</h3>
                    </div>
                    </Zoom>
                    <Zoom>
                    <div>
                        <h4>ADDRESS</h4>
                        <h3>Inshaolloh Jannat</h3>
                    </div>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Footer
