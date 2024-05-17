import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
const CheckboxCard = ({value}) => {
    const [checkState, setCheckState] = useState(false);
    const clickHandler = ()=>{
        setCheckState(!checkState);
    }
    return (
        <Box onClick={clickHandler} sx={{
            padding: 2,
            boxShadow: 2,
            position: "relative",
            cursor: "pointer",
            border:"1px dashed grey",
            borderColor:"lightgray"
        }}>
            <Typography textAlign={"center"}>{value}</Typography>
            {checkState && (<DoneIcon fontSize='small' color='success' sx={{ position: "absolute", right: 10, top: 5 }} />)}
        </Box>
    )
}

export default CheckboxCard