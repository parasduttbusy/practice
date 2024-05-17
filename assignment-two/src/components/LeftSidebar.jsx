import React, { useState } from 'react'
import CardList from './CardList'
import { Box, Chip, Container, Fab, Modal, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import AddCompanyModal from './AddCompanyModal';
import { useContext } from 'react';
import { LeftHeadingTypo } from './CardList';
import { CompanyContext } from './companyContext';
import ClearIcon from '@mui/icons-material/Clear';

const LeftSidebar = ({ wmd = "25%", wsm = "", wxs = "100%", maxH = "89vh", dmd = "block", dxs = "none", toogleDrawer }) => {
    const [open, setOpen] = useState(false)
    const companyData = useContext(CompanyContext)

    const toogleOpen = () => {
        setOpen(!open)
    }
    return (
        <Container onClick={toogleDrawer} disableGutters sx={{
            width: { md: wmd, xs: wxs, sm: wsm },
            margin: 0,
            padding: 0,
            overflow: "hidden",
            maxHeight: maxH,
            minWidth: "25%",
            maxWidth: "100%",
            backgroundColor: "#F8F8F8",
            display: {
                md: dmd,
                xs: dxs
            },
        }}>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingX: 2,
                paddingY: 1
            }}>
                <LeftHeadingTypo variant='h6'>Customer</LeftHeadingTypo>
                <Fab size='small' onClick={toogleOpen} sx={{
                    boxShadow: 0,
                    background: "#6C6C6C",
                    color: "white",
                    padding: 0,
                    ":hover": {
                        background: "lightgrey"
                    },
                    width: 20,
                    minHeight: 10,
                    maxHeight: 20
                }}>
                    <AddIcon fontSize='small' sx={{ padding: 0, margin: 0 }} />
                </Fab>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                paddingX: 3,
                paddingY: 1
            }}>
                <LeftHeadingTypo variant='p' sx={{ fontSize: 15, marginRight:2, fontWeight:"600" }}>{companyData.length} results</LeftHeadingTypo>
                <Chip
                    label="Enabled"
                    sx={{fontWeight:600, padding:0, height:25, width:100}}
                    deleteIcon={<ClearIcon/>}
                    icon={<ClearIcon sx={{fontSize:15}}/>}
                />
                
            </Box>
            <CardList />
            <AddCompanyModal open={open} toogleOpen={toogleOpen} />
        </Container>
    )
}

export default LeftSidebar