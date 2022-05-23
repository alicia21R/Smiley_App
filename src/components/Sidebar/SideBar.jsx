import React, {useState} from 'react';
import {FaBars, FaCartArrowDown, FaFirstOrder, FaHome, FaShoppingBag, FaTasks, FaUnlockAlt, FaUserCircle, FaUsers} from 'react-icons/fa'
import{AnimatePresence, motion} from "framer-motion";
import { NavLink } from 'react-router-dom';
import {Gi3DGlasses} from"react-icons/gi"


const routes=[
{
  path: '/',
  name:"Dashboard",
  icon:<FaHome/>
},

{
  path: '/orders',
  name:"Orders",
  icon:<FaFirstOrder/>
},{
  path: '/tasks',
  name:"Tasks",
  icon:<FaTasks/>
},
{
  path: '/products',
  name:"Products",
  icon:<FaCartArrowDown/>
},
{
  path: '/inventory',
  name:"Inventory",
  icon:<FaShoppingBag/>
},
{
  path: '/customers',
  name:"Customers",
  icon:<FaUsers/>
},
{
  path: '/projects',
  name:"Projects",
  icon:<FaUnlockAlt/>
},
{
  path: '/accounts',
  name:"Accounts",
  icon:<FaUserCircle/>
},

]



const Sidebar = ({children}) => {

  const[isOpen, setIsOpen]=useState(false);
  const toggle =()=> setIsOpen(!isOpen)
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };


  return (
   
    <div className="main-container">
      <motion.div
       animate={{
        width: isOpen ? "200px" : "45px",

        transition: {
          duration: 0.5,
          type: "spring",
          damping: 10,
        },
      }}
      className={'sidebar'}
      
      >

       {/*top area/part */}
       <div className="top_section">
        

        <AnimatePresence>
          <Gi3DGlasses className="icon_logo"/>
          {isOpen &&
          (<motion.h1
            variants={showAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="logo"
          >
            Smiley
          </motion.h1>)}
        </AnimatePresence>

        <div className="bars">
         <FaBars onClick={toggle}/>
       </div>
        
       </div>

       


       {/* // nav items */}
     <section className="routes">
       {routes.map((route,index) =>{

         return(
           <NavLink 
           to={route.path}
           key={route.name}
          className='link'
          activeClassName='active'
           >

             <div className="icon"> {route.icon}</div>
             <AnimatePresence>
               {isOpen &&(
                  <motion.div 
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                  >
                    {route.name}
                  </motion.div>
               )}
            
             </AnimatePresence>
             
           </NavLink>
         )

       })}
     </section>
     </motion.div>

      
     <main>{children}</main>
      
    </div>

   
  )
}

export default Sidebar