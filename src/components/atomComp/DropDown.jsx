import React from "react";
import {Select as MSelect, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';

const DropDown =((props)=>{

    const {
        name= "",
        options =[],
        label='',
        onchange= () => null,
        onblur = ()=> null,
        id='',
        className ='',
        required=true,
        error = false,
        helperText ="",
        preSelectedValue=''
    } =props
return(
    <>
    <FormControl variant = "outlined" fullWidth error={error}>
    <InputLabel id={name}>{`${label} ${required ? "*" : ""}`}</InputLabel>
       <MSelect
       onChange={(e)=>onchange(e.target.value,name)}
       onBlur={(e) => onblur(e.target.value, name)}
       labelId={name}
       label={`${label} ${required ? "*" : ""}`}
       required={required}
       className={className}
       id={id}
       value={preSelectedValue}
       >
        {options.map((res,index)=>{
            return(<MenuItem
                value={res.value}
                key ={index}>
                    {res.text}
                </MenuItem>
            )
        })}
       </MSelect>
       <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
    </>
)
})

export default DropDown;