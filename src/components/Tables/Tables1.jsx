import React from 'react'
import DataTable from 'react-data-table-component'
import { FaFacebookMessenger, FaPhone, FaUser, FaUserShield } from 'react-icons/fa';


const columns = [
    {
        name: 'Profile',
        selector: row => row.name,
        
    },
    {
        name: 'Details',
        selector: row => row.name,
    },
    {
        name: 'Status',
        selector: row => row.icon
        
    },
    {
        selector: row => row.status,
    },
    {
        selector: row => row.message,
    }
];

const data = [
    {
        id: 1,
        name: 'Lewis Hamilton',
        role: 'CEO Excerpt',
        icon:<FaUser/>,
        status: <FaPhone/>,
        message:<FaFacebookMessenger/>
        
    },
    {
        id: 2,
        name: 'Paris Hammilton',
        role: 'CEO Excerpt',
        icon: <FaUser/>,
       status:<FaPhone/>,
       message:<FaFacebookMessenger/>
    },
    {
        id: 3,
        name: 'Chicago West Hilton',
        role: 'CEO Excerpt',
        icon: <FaUser/>,
        status:<FaPhone/>,
        message:<FaFacebookMessenger/>
    },
    {
        id: 4,
        name: 'Dextor Kevin',
        role: 'CEO Dextor Laboratory',
        icon: <FaUser/>,
        status:<FaPhone/>,
        message:<FaFacebookMessenger/>
    },
    {
        id: 5,
        name: 'Wieruch Robert',
        role: 'CTO Wieruch',
        icon: <FaUser/>,
       status:<FaPhone/>,
       message:<FaFacebookMessenger/>
    },
    {
        id: 6,
        name: 'Sung chi Lee',
        role: 'CEO Sung Chi',
        icon: <FaUser/>,
        status:<FaPhone/>,
        message:<FaFacebookMessenger/>
    },
    {
        id: 7,
        name: 'Mojo Mara Jojo',
        role: 'CEO Excerpt',
        icon: <FaUser/>,
        status:<FaPhone/>,
        message:<FaFacebookMessenger/>
    },
    
]


const customStyles = {
    
    headCells: {
        style: {
            padding:'8px',
            justifyContent: 'center'
        },
    },
    cells: {
        style: {
            padding:'8px',
            margin:'5px'

        },
    },
   
};




function Tables1() {
  return (
    <div className="aside-projects-table">
            
    <DataTable
        title="New Customers"
        columns={columns}
        data={data}
        customStyles={customStyles}

    />
  
  
 </div>
  )
}



export default Tables1