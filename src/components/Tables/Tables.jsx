import React from 'react'
import DataTable from 'react-data-table-component'
import { FaCircle } from 'react-icons/fa';



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
        selector: row => row.review,

    },

    {
        name: 'Status',
        selector: row => row.status,
    } 

];

const data = [
    {
        id: 1,
        name: 'UI/UX Design',
        department: 'UI Team',
        status: 'review',
        review:<FaCircle/>
    },
    {
        id: 2,
        name: 'Web Development',
        department: 'Front End',
        status: 'In Progress',
        review:<FaCircle/>
    },
    {
        id: 3,
        name: 'Cash App',
        department: 'Mobile Team',
        status: 'Pending',
        review:<FaCircle/>
    },
    {
        id: 4,
        name: 'Dextor Laboratory',
        department: 'UI Team',
        status: 'review',
        review:<FaCircle/>
    },
    {
        id: 5,
        name: 'Phinese and Ferb',
        department: 'Front End',
        status: 'In Progress',
        review:<FaCircle/>
    },
    {
        id: 6,
        name: 'Power Puff Girls',
        department: 'Mobile Team',
        status: 'Pending',
        review:<FaCircle/>
    },
    {
        id: 7,
        name: 'Mojo jojo',
        department: 'UI Team',
        status: 'review',
        review:<FaCircle/>
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


function Tables() {
    return (
        <div className="projects-table">
            
            <DataTable
                title="Recent Projects"
                subtitle="See All"
                columns={columns}
                data={data}
                customStyles={customStyles}
            />
             

      
         </div>

       
    );
};

export default Tables