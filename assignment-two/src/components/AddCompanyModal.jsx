import { Modal, Typography, Box, TextField, Grid, Button, FormControl } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useReducer } from 'react';
import dataReducer from './dataReducer';
import data from '../data';
import { CompanyDispatchContext } from './companyContext';

const AddCompanyModal = ({ open = false, toogleOpen }) => {
    
    const [formData, setFormData] = useState({
        name: "",
        companyId: "",
        city: "",
        state: ""
    })
    const dispatch= useContext(CompanyDispatchContext);
    const handleSubmit = () => {
        dispatch({
            type: "added",
            addedData:{
                name: formData.name,
                companyId : formData.companyId,
                city: formData.city,
                state: formData.state
            }
        })
        toogleOpen()
        setFormData({
            name: "",
            companyId: "",
            city: "",
            state: ""
        })
    }

    const onChangeHandler = (e) => {
        setFormData(() => {
            return { ...formData, [e.target.id]: e.target.value };
        })
    }
    return (
        <Modal
            onClose={toogleOpen}
            open={open}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <FormControl sx={{
                width: {
                    xs: "70%",
                    sm: "50%",
                    md: "30%",
                },
            }}>
                <Box sx={{
                    background: "white",
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    minHeight: "50%",

                    borderRadius: "10px"
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center", marginBottom: 2 }}>
                        Create Company
                    </Typography>
                    <TextField onChange={onChangeHandler} id='name' label={"Name"} value={formData.name}></TextField>
                    <TextField onChange={onChangeHandler} id='companyId' label={"Company Id"} value={formData.companyId}></TextField>
                    <TextField onChange={onChangeHandler} id='state' label={"State"} value={formData.state}></TextField>
                    <TextField onChange={onChangeHandler} id='city' label={"City"} value={formData.city}></TextField>
                    <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={6}>
                            <Button onClick={handleSubmit} variant="contained" color="success" fullWidth> Submit</Button>
                        </Grid>
                        <Grid item xs={6} background={"sucess"}>
                            <Button onClick={toogleOpen} variant="contained" sx={{
                                background: "white",
                                color: "black",
                                ":hover": {
                                    background: "lightgrey"
                                }
                            }} fullWidth> Cancel</Button>
                        </Grid>
                    </Grid>
                </Box>
            </FormControl>
        </Modal>
    )
}

export default AddCompanyModal