import './App.css';
import Home from './pages/home/Home';
import Navigationbar from './Components/navbar/Navigationbar';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigationbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signUp" element={<SignUp />} />

      </Routes>
    </Router>

   
  );
}

export default App;
