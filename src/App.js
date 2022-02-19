import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AdminLogin from './Components/LogReg/Admin/AdminLogin'
import AdminReg from './Components/LogReg/Admin/AdminReg'
import VolunteerLogin from './Components/LogReg/Volunteer/VolunteerLogin'
import VolunteerReg from './Components/LogReg/Volunteer/VolunteerReg'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin'
import AdminClosed from './Pages/AdminClosed'
import VolunteerClosed from './Pages/VolunteerClosed'
import Home from './Pages/Home'
import Victim from './Pages/Victim'
import Volunteer from './Pages/Volunteer'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route exact path='/adminclosed' element={<AdminClosed />} />
          <Route exact path='/victim' element={<Victim />} />
          <Route exact path='/volunteer' element={<Volunteer />} />
          <Route exact path='/volunteerclosed' element={<VolunteerClosed />} />
          <Route exact path='/adminlogin' element={<AdminLogin />} />
          <Route exact path='/adminsignup' element={<AdminReg />} />
          <Route exact path='/volunteersignup' element={<VolunteerReg />} />
          <Route exact path='/volunteerlogin' element={<VolunteerLogin />} />
        </Routes>
      </Router>

    </>
  )
}

export default App





