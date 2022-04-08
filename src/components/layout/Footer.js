import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLeaf} from "@fortawesome/free-solid-svg-icons"

function Footer() {
  return (
    <div className='footer'>
        <h1>              
            <span>
            <FontAwesomeIcon icon={faLeaf}/>
            </span>HalDev´s Food
        </h1>
        <hr />
        <p className='centerText'>© 2022 HalDevOne</p>
    </div>
  )
}

export default Footer