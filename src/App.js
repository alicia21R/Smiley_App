import './App.css';
import SideBar from './components/Sidebar/SideBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Customers from './pages/Customers';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Products from './pages/Products';
import TopNav from './components/TapNavbar/TopNav';
import Cards from './components/Cards/Cards';



function App() {
  return (
    <Router>
     
      <SideBar>
      <TopNav/>

      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/accounts" element={<Accounts/>} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/products" element={<Products/>} />
     
        
      </Routes>
      </SideBar>
    
    </Router>
  );
}

export default App;
