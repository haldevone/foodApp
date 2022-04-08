import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import headerImg from "../../images/headerImg.jpg"
import HeaderCartButton from './HeaderCartButton'
import {faLeaf} from "@fortawesome/free-solid-svg-icons"

function Header(props) {
  return (
    <>
        <header className='header'>
            
            <h1 className='header-item main-title'>
              <span>
                <FontAwesomeIcon icon={faLeaf}/>
              </span>HalDev´s Food
            </h1>
            <div className='header-item'>
              <HeaderCartButton onClick={props.onShowCart}/>
            </div>
            
        </header>
        <div className='main-image'>
            <img src={headerImg} alt="" />
        </div>
    </>
  )
}

export default Header