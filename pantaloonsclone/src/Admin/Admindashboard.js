import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import adminDashboard from '../image/admin-dashboard.png'
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Admindashboard = () => {
  return (
    <div className='custom-admin-dashboard'>
      <Admin />
      <img src={adminDashboard} alt='admin-image' />
    </div>
  )
}

export default Admindashboard
