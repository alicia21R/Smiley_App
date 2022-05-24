import React from 'react'
import DataTable from 'react-data-table-component'



const columns = [
    {
        name: 'Project',
        selector: row => row.name,
    },
    {
        name: 'Department',
        selector: row => row.department,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
];

const data = [
    {
        id: 1,
        name: 'UI/UX Design',
        department: 'UI Team',
        status: 'review'
    },
    {
        id: 2,
        name: 'Web Development',
        department: 'Front End',
        status: 'In Progress'
    },
    {
        id: 3,
        name: 'Cash App',
        department: 'Mobile Team',
        status: 'Pending'
    },
    {
        id: 4,
        name: 'Dextor Laboratory',
        department: 'UI Team',
        status: 'review'
    },
    {
        id: 5,
        name: 'Phinese and Ferb',
        department: 'Front End',
        status: 'In Progress'
    },
    {
        id: 6,
        name: 'Power Puff Girls',
        department: 'Mobile Team',
        status: 'Pending'
    },
    {
        id: 7,
        name: 'Mojo jojo',
        department: 'UI Team',
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


function Tables() {
    return (
        <div className="projects-table">
            
            <DataTable
                title="Recent Projects"
                columns={columns}
                data={data}
                customStyles={customStyles}
            />

      
         </div>

       
    );
};

export default Tables