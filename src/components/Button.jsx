import React from 'react'
import css from './Button.module.css'

const Button = ({ value, onButtonClick }) => {
    return (
        <button className={css.button} onClick={onButtonClick}>{value}</button>
    )
}

export default Button