import React from 'react'
import * as C from "./styles"

const Button = ({ text, onClick, type = "button", disabled }) => {
    return (
        <C.Button type={type} onClick={onClick} disabled={disabled}>
            {text}
        </C.Button>
    )
}

export default Button;