import {FaUserCircle, FaSearch} from 'react-icons/fa'

const data=[
  {
    id:1,
    icon:<FaUserCircle />,
    name:'John Doe',
    role:'admin'
  }
]

const iconStyle = { width: '1.5rem',height: '1.5rem' }

const TopNav = () => {
  return (
    <div className="top-nav-container">
     <div className="tittle">
       <h2>Dashboard</h2>
     </div>

     <div className="search-input">
      <input type="text"  placeholder="Search Here" className="search-input"
      icon={<FaSearch/>}
      />  
     </div>
   
   
    <div className="user-profile">
      {data.map ((person)=> {
        const{id,icon,name,role}=person;

        return (
          <div className="user-details" key={id}>
            <div className="user-dp">
            {icon}
            </div>
            
            <div className="user-decription">
            <h3>{name}</h3>
            <h4>{role}</h4>
            </div>
            
          </div>
        )
      })}
    </div>

  </div>
  )
}






export default TopNav