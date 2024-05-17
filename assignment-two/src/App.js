import React from 'react'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import LeftSidebar from './components/LeftSidebar'
import { Outlet } from 'react-router-dom'
import { CompanyContext, CompanyDispatchContext } from './components/companyContext'
import { useReducer } from 'react'
import dataReducer from './components/dataReducer'
import data from './data'
const App = () => {
  const [companyData, dispatch] = useReducer(dataReducer, data)
  return (
    <CompanyContext.Provider value={companyData}>
      <CompanyDispatchContext.Provider value={dispatch}>
        <div>
          <Navbar />
          <Container disableGutters sx={{
            display: "flex",
            margin: 0,
            padding: 0,
            minWidth: "100vw",
            maxWidth: "100vw",
            minHeight: "91vh",
            "& .css-MuiContainer-root": {
              paddingLeft: 0
            },
            width: "100%"
          }}>
            <LeftSidebar />
            <Container id="right-sidebar" sx={{
              width: { md: "75%", sm: "100%" },
              margin: 0,
              padding: 0,
              maxHeight: "90vh",
              overflowY: "hidden",
              overflowX: "hidden",
              minWidth: "75%"
            }}>
              <Outlet />
              {/* <Home /> */}
              {/* <UserDashboard /> */}
            </Container>
          </Container>
        </div>
      </CompanyDispatchContext.Provider>
    </CompanyContext.Provider>
  )
}

export default App