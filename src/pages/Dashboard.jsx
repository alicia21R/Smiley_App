import React, { useState } from 'react';
import Cards from '../components/Cards/Cards'




const Dashboard = () => {
  return (
    <div className="main-dashboard"> <h2>Dashboard</h2>
     <div className="dashboard-items">
          <Cards/>
      </div> 
    </div>

  )
}

export default Dashboard