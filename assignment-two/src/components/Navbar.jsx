import React, { useState } from 'react'
import Button, { Drawer, Fab, Input, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Person, Search } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import PersonIcon from '@mui/icons-material/Person';
import LeftSidebar from './LeftSidebar';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerHandler = (e) => {
    e.preventDefault();
    setDrawerOpen(!drawerOpen)
  }


  return (
    <div>
      <AppBar position='static' elevation={0} sx={{
        background: 'linear-gradient(to right, #5700BB, #AD24CF)',
        padding: 0
      }} >
        <Toolbar >
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: 0,
            padding: 0,
            alignItems: "center"
          }}>
            <Box display={{ xs: "none", md: "block" }} minWidth={"15%"}>

            </Box>
            <Fab size='small' onClick={drawerHandler} sx={{
              display: { md: "none" }, backgroundColor: "transparent", boxShadow: 0, color: "white", ":focus": {
                backgroundColor: "transparent", color: "white"
              }
            }}>
              <MenuIcon />
            </Fab>
            <Box sx={{
              background: "white",
              paddingX: 2,
              width: { md: "50vw", xs: "40vw", sm: "30vw" },
              borderRadius: "5px",
              display: "flex",
              alignItems: "center"
            }}>
              <Fab disableTouchRipple elevation={0} sx={{
                borderRadius: 0,
                width: "7%",
                height: "80%",
                color: "black",
                background: "white",
                boxShadow: 0,

              }}>

                <Search  sx={{ color: "grey" }} />
              </Fab>
              <Input disableUnderline placeholder='Search' sx={{
                background: "white",
                paddingY: 0.5,
                paddingLeft: 2,
                width: "50vw",
                borderRadius: "5px",
              }} />
              <Fab disableTouchRipple sx={{
                borderRadius: 0,
                width: "7%",
                height: "80%",
                color: "black",
                background: "white",
                boxShadow: 0,

              }}>
                <TuneIcon  sx={{ color: "grey" }} />
              </Fab>
            </Box>
            <Box>
              <Typography variant='h7' sx={{ display: { sm: "block", xs: "none" } }}>
                Logged In as : Niyati India Pvt. Ltd.
              </Typography>
              <Tooltip title="Delete">
                <Fab size='small' sx={{ display: { sm: "none", xs: "block" }, backgroundColor: "lightgrey", boxShadow: 0 }}>
                  <PersonIcon />
                </Fab>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer onClose={drawerHandler} open={drawerOpen} anchor='left' sx={{
        display: {
          md: "none"
        }
      }}>
        <LeftSidebar dmd='none' maxH='100vh' dxs='block' wsm='70vw' wxs='90vw' wmd='50vw' toogleDrawer={drawerHandler} />
      </Drawer>
    </div>
  )
}

export default Navbar