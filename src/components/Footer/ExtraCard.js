import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import style from './Extra.module.css'

function ExtraCard(props) {

    const onMarkerClick = () => {
        console.log('hello');
    }
    
    return (
        <div className={style.one}>
            <h1>Our Location</h1>
            <div className={style.mapdiv}>
                    <Map google={props.google} zoom={14}>
    
                        <Marker onClick={onMarkerClick}
                                name={'Current location'} />
                    </Map>
                </div>
        </div>
    )
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyBCly-dqdR5WfF36aKxjAswVayYWzbxaYc')
  })(ExtraCard)