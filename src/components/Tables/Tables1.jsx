import React from 'react'
import DataTable from 'react-data-table-component'
import { FaUser } from 'react-icons/fa';


const columns = [
    {
        name: 'Profile',
        selector: row => row.profile,
    },
    {
        name: 'Details',
        selector: row => row.details,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
];

const data = [
    {
        id: 1,
        details: 'UI/UX Design',
        profile:'FaUser',
        status: 'review'
    },
    {
        id: 2,
        details: 'Web Development',
        profile: 'Front End',
        status: 'In Progress'
    },
    {
        id: 3,
        details: 'Cash App',
        profile: 'Mobile Team',
        status: 'Pending'
    },
    {
        id: 4,
        details: 'Dextor Laboratory',
        profile: 'UI Team',
        status: 'review'
    },
    {
        id: 5,
        details: 'Phinese and Ferb',
        profile: 'Front End',
        status: 'In Progress'
    },
    {
        id: 6,
        details: 'Power Puff Girls',
        profile: 'Mobile Team',
        status: 'Pending'
    },
    {
        id: 7,
        details: 'Mojo jojo',
        profile: 'UI Team',
        status: 'review'
    },
    
]

const customStyles = {
    title:{
        style: {
            width:'50%'
        }

    },

    rows: {
        style: {
            width:'100%'
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