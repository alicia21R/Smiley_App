import React,{ useState, useEffect} from 'react';
import {FaFile, FaFileArchive, FaMoneyBill, FaUsers} from 'react-icons/fa'

const cards=[
    {
        id:"1",
        total:54,
        name:"Customers",
        icon:<FaUsers/>,
    },
    {
        id:"2",
        total:190,
        name:"Projects",
        icon:<FaFile/>,
    },
    
    {
        id:"3",
        total:500,
        name:"Orders",
        icon:<FaFileArchive/>,
    },
    
    {
        id:"4",
        total:"$54",
        name:"Income",
        icon:<FaMoneyBill/>,
    
    },    
]


function Cards() {
    const isBackgroundWhite =true;

    return (
    <section className="cards-container">   
         {cards.map((card,index)=>{
            const{name,total,icon}=card;

             return (
               <Card key={card.id} 
                 card={card}
                 iconstyle={iconstyle}
                 style={{
                   card:{backgroundColor:'orange'}
                 }}
               >

               </Card>
             )
         })}
        
    </section>

  )
}

// destructuring items in the array
const Card=(props)=>{

    const{name,total,icon} =props.card;
    return(
    <div className="card">
        <h3>{name}</h3>
        <h4>{total}</h4>
        {icon}
    </div>

    )
    
}

const iconstyle={
    icon:{
        style:{
            width:'100px',
            height:'100px',
            backgroundColor:'yellow'

        }
    }
    
}



export default Cards






  