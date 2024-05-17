import { Box, Input, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { CompanyDispatchContext } from './companyContext';

const CompanyInfo = ({ value = "", placeholder, feild, companyId }) => {
    const [editState, setEditState] = useState(false);
    const [input, setInput] = useState("")
    const dispatch = useContext(CompanyDispatchContext)
    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    const handleEdit = () => {
        setEditState(!editState)
    }
    const onDone = ()=>{
        dispatch({
            type: "changed",
            change:{
                feild:feild,
                changed: input
            },
            companyId: companyId
        })
        setEditState(!editState)
    }

    const onClose = ()=>{
        setEditState(!editState)
    }
    return (
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
            {(editState) ? (
                <Input onChange={handleChange} placeholder={value} value={input} sx={{
                    background: "white",
                    paddingY: 0.5,
                    paddingLeft: 2,
                    borderRadius: "5px",
                    height: "25px",
                    marginRight: "2%"
                }} />
            ) : (
                (value !== "") ? <Typography sx={{ marginRight: "2%" }}>{value}</Typography> : <Typography sx={{ marginRight: "2%", color:"grey" }}>{placeholder}</Typography>
            )}


            <Box sx={{display:"flex", gap:2}}>
                {!editState && <EditIcon onClick={handleEdit}  sx={{ cursor: "pointer", fontSize: 18 }} />}
                {editState && <DoneIcon color='success' onClick={onDone} sx={{ cursor: "pointer", fontSize: 18 }}/>}
                {editState && <CloseIcon color='error' onClick={onClose} sx={{ cursor: "pointer", fontSize: 18 }}/>}
            </Box>
        </Box>
    )
}

export default CompanyInfo