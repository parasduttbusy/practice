import { Container, Typography } from '@mui/material'
import React from 'react'
import Home from './Home'
import UserDashboard from './UserDashboard'

const RightSidebar = () => {
    return (
        <Container id="right-sidebar" sx={{
            width: { md: "75%", sm: "100%" },
            margin: 0,
            padding: 0,
            maxHeight: "90vh",
            overflowX:"hidden",
            minWidth:"75%",
            maxWidth:"100%"
        }}>
            <UserDashboard />
        </Container>
    )
}

export default RightSidebar