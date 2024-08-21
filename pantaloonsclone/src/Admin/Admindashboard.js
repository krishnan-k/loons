import React from 'react'
import Admin from './Admin'
import adminDashboard from '../image/admin-dashboard.png'
const Admindashboard = () => {
  return (
    <div className='custom-admin-dashboard'>
      <Admin/>
      <img src={adminDashboard} alt='admin-image'/>
    </div>
  )
}

export default Admindashboard
