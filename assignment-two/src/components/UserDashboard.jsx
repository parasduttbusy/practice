import { Box, Divider, Fab, Grid, Input, InputAdornment, OutlinedInput, Switch, Typography } from '@mui/material'
import React, { useContext } from 'react'
import CompanyInfo from './CompanyInfo'
import RightSidebarMenu from './RightSidebarMenu';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckboxCard from './CheckboxCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useParams } from 'react-router-dom';
import { CompanyContext, CompanyDispatchContext } from './companyContext';

const UserDashboard = () => {
    const companyData = useContext(CompanyContext)
    const dispatch = useContext(CompanyDispatchContext)
    let { companyId } = useParams();
    const [company] = companyData.filter((val, ind) => {
        return val.companyId === companyId
    })
    const deleteHandler = () => {
        dispatch({
            type: "deleted",
            companyId: companyId
        })
    }
    return (
        <Box id="UserDashboard" marginTop={1} sx={{
            minWidth: "75%",
            maxWidth: "100%",
            paddingX: {
                xs: 2
            },
            maxHeight: "90vh",
            minHeight: "90vh",
            overflow: 'hidden'
        }}>
            <Grid container sx={{ marginBottom: 1 }}>
                <Grid item xs={12} sx={{
                    display: "flex",
                    justifyContent: "flex-end"
                }}>
                    <Link to={"/"}>
                        <Fab size='small' disableRipple width={"fit-content"} sx={{
                            background: "transparent",
                            boxShadow: 0,
                        }}>
                            < CloseIcon />
                        </Fab>
                    </Link>

                </Grid>

                <Grid item xs={10}>
                    <CompanyInfo value={company.name} placeholder={"Name"} feild={"name"} companyId={companyId} />
                    <CompanyInfo value={company.country} placeholder={"Country"} feild={"country"} companyId={companyId} />
                    <CompanyInfo value={company.gstn} placeholder={"GSTIN/UIN - PAN/TAN"} feild={"gstn"} companyId={companyId} />
                    <CompanyInfo value={company.mobile} placeholder={"Mobile Number - Landline Number"} feild={"mobile"} companyId={companyId} />
                    <CompanyInfo value={company.email} placeholder={"Email"} feild={"email"} companyId={companyId} />
                </Grid>
                <Grid sx={{display:"flex",justifyContent:"end"}} item xs={2}>
                    <Link to={"/"}>
                        <Fab size='small' disableRipple onClick={deleteHandler} sx={{ background: "transparent", boxShadow: 0 }}>
                            <DeleteForeverIcon color='error' />
                        </Fab>
                    </Link>
                    <Switch color="success" defaultChecked />
                </Grid>
            </Grid>

            <Box fullWidth sx={{
                borderTop: "1px dashed lightgray",
                borderBottom: "1px dashed lightgray",
            }}>
                <RightSidebarMenu />
            </Box>
            <Box id={"bottomDashboard"} sx={{ overflowY: "scroll", maxHeight: "57vh", paddingRight: "1vw" }}>
                <Grid container sx={{ marginTop: 1.5 }} spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CheckboxCard value={"BackOrder"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CheckboxCard value={"Payment Reminder"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CheckboxCard value={"Notification"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CheckboxCard value={"SEZ/EOU"} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CheckboxCard value={"Export Tax"} />
                    </Grid>
                </Grid>

                <Grid container spacing={2} marginY={2}>
                    <Grid item xs={12}>
                        <Box sx={{ height: "7vh", borderBottom: "1px dashed lightgrey", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography sx={{ textJustify: "center", textAlignLast: "end", height: "50%", color: "#808080" }}>Wallet Discount %</Typography>
                            <Input disableUnderline sx={{
                                direction: "rtl",
                                paddingRight: 3,
                                color: "#808080"
                            }}></Input>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ height: "7vh", borderBottom: "1px dashed lightgrey", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography sx={{ textJustify: "center", textAlignLast: "end", height: "50%", color: "#808080" }}>Tax Discount %</Typography>
                            <Input disableUnderline sx={{
                                direction: "rtl",
                                paddingRight: 3,
                                color: "#808080"
                            }}></Input>
                        </Box>
                        {/* <OutlinedInput placeholder='Tax Discount %' fullWidth endAdornment={<InputAdornment position="end">11</InputAdornment>} /> */}
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ height: "7vh", borderBottom: "1px dashed lightgrey", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography sx={{ textJustify: "center", textAlignLast: "end", height: "50%", color: "#808080" }}>TCS %</Typography>
                            <Input disableUnderline sx={{
                                direction: "rtl",
                                paddingRight: 3,
                                color: "#808080"
                            }}></Input>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ height: "7vh", borderBottom: "1px dashed lightgrey", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography sx={{ textJustify: "center", textAlignLast: "end", height: "50%", color: "#808080" }}>Price List</Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Input disableUnderline sx={{
                                    direction: "rtl",
                                    paddingRight: 3,
                                    color: "#808080"
                                }}></Input>
                                <ArrowForwardIosIcon fontSize='small' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ height: "7vh", borderBottom: "1px dashed lightgrey", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography sx={{ textJustify: "center", textAlignLast: "end", height: "50%", color: "#808080" }}>Catalog</Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Input disableUnderline sx={{
                                    direction: "rtl",
                                    paddingRight: 3,
                                    color: "#808080"
                                }}></Input>
                                <ArrowForwardIosIcon fontSize='small' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ height: "7vh", borderBottom: "1px dashed lightgrey", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography sx={{ textJustify: "center", textAlignLast: "end", height: "50%", color: "#808080" }}>Groups</Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Input disableUnderline sx={{
                                    direction: "rtl",
                                    paddingRight: 3,
                                    color: "#808080"
                                }}></Input>
                                <ArrowForwardIosIcon fontSize='small' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ height: "7vh", borderBottom: "1px dashed lightgrey", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <Typography sx={{ textJustify: "center", textAlignLast: "end", height: "50%", color: "#808080" }}>Company Type</Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Input disableUnderline sx={{
                                    direction: "rtl",
                                    paddingRight: 3,
                                    color: "#808080"
                                }}></Input>
                                <Typography sx={{ textJustify: "center", textAlignLast: "end", height: "50%", color: "#808080" }}>Debtor</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}

export default UserDashboard
