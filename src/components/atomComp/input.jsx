import React from "react";
import { TextField, FormControl } from '@mui/material';
const Input = (props) => {
    const{
        onchange =() =>null,
        onblur =() => null,
        onfocus =() =>null,
        id = "",
        placeholder = "",
        type = "",
        required = false,
        name = "",
        value = "",
        helperText = "",
        label = "",
        error = false,
        className = "",
        inputProps = {},
    } = props;
    return ( <FormControl fullWidth>
        <TextField
        id={id}
        onChange={(e)=>onchange(e.target.value,name)}
        onBlur={(e)=>onblur(e.target.value,name)}
        onFocus={(e)=>onfocus(e.target.value,name)}
        required={required}
        label={label}
        helperText={helperText}
        type={type}
        variant="outlined"
        error={error}
        name={name}
        placeholder={placeholder}
        value={value}
        className={className}
        inputProps={inputProps}
        />
    </FormControl> );
}
 
export default Input;