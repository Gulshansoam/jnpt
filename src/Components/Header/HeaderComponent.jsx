import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Route, Routes } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
// import Dashboard from '@material-ui/icons/Dashboard'
import Alpr from './BodyComponent/Dashboard/Alpr'
import AtccHourly from './BodyComponent/Dashboard/AtccHourly'
import Atcc from './BodyComponent/Dashboard/Atcc'
import Search from './BodyComponent/Dashboard/Search'
import LogOut from './BodyComponent/Dashboard/LogOut'
import { Box } from '@material-ui/core'
// import { mergeClasses } from '@material-ui/styles'
import { useStyles } from './HeaderStyles'

import DashBoard from './BodyComponent/Dashboard/DashBoard'

export default function HeaderComponent() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar/>
      <Sidebar/>
      <Box className={classes.wrapper}>
      {/* <BrowserRouter> */}
      <Routes>
        {/* <Route index element={<Dashboard/>}/> */}
          <Route exact path="/alpr" element={<Alpr />} />
          <Route exact path="/atcc-hourly" element={<AtccHourly />} />
          <Route exact path="/atcc" element={<Atcc />} />
          <Route exact path="/search" element={<Search/>} />
          {/* <Route exact path="/" element={<Dashboard/>}/> */}
          <Route  exact path='/logout' element={<LogOut/>}/>
          <Route  exact path='/' element={<DashBoard/>}/>
        {/* </Route> */}
      </Routes>
    {/* </BrowserRouter> */}
     
      </Box>
     
      </React.Fragment>
   
  )
}