import React from "react";
import { Button as MButton } from '@mui/material';
import './Button.scss'

const Button =((props)=>{
    const {
        type='',
        disabled = false,
        onclick= ()=> null,
        buttonText="",
    } = props
    return(
        <MButton
        onClick={(e)=>onclick(e)}
        disabled={disabled}
        type={type}
        className={"button"}
        variant="contained"
        >
    
            {buttonText}
            </MButton>
    )
})

export default Button