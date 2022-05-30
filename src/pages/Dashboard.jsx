import React from 'react';
import Cards from '../components/Cards/Cards';
import Tables from '../components/Tables/Tables';
import Tables1 from '../components/Tables/Tables1';




const Dashboard = () => {
  return (
    <div className="main-dashboard"> 
     <div className="dashboard-items">
          <Cards/>
        <div className="tables">
           <Tables/> <Tables1/>
        </div>
          
          
      </div> 
    </div>

  )
}

export default Dashboard