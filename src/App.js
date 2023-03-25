import './App.css';
import Home from './pages/home/Home';
import Navigationbar from './Components/navbar/Navigationbar';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/sidebar/Sidebar';
import FarmerControl from './pages/farmerControl/FarmerControl';
import { useLocation } from 'react-router-dom';

function App() {

  const location =useLocation.pathname !== ''


  return (
    <Router>
      <Navigationbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signUp" element={<SignUp />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/sidebar" element={<Sidebar />} />
      <Route exact path='/farmercontrol' element={<FarmerControl />} />
      </Routes>
    </Router>

   
  );
}

export default App;
