import {MdMessage} from 'react-icons/md'
import styles from './Button.module.css'
import React from 'react'

const Button = (props) => {

  // yahan par ab men object re structuring karonga jo k bht zarori he 
  const {isOutline,text ,icon}=props;
  return ( 
    <button className={isOutline? styles.outLinebtn:styles.primbtn}>  
    {props.icon}
    {props.text} 
    </button>
  )
}

export default Button
