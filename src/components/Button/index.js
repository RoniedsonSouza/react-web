import React from 'react'
import * as C from "./styles"

const Button = ({ text, onClick, type = "button", disabled, StartIcon, width }) => {
    return (
        <C.Button style={{ width: `${width}` }} type={type} onClick={onClick} disabled={disabled} StartIcon={StartIcon}>
            <span>{StartIcon}</span>
            {text}
        </C.Button>
    )
}

export default Button;