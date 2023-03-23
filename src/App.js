import './App.css';
import Home from './pages/home/Home';
import Navigationbar from './Components/navbar/Navigationbar';
import SignIn from './pages/signin/SignIn';

function App() {
  return (
    <div>
      <Navigationbar />
      <Home />
      <SignIn/>

    </div>
   
  );
}

export default App;
