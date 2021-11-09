import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import {BrowserRouter, Routes , Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path = '/' element = {<Home/>}/>
          <Route exact path = '/signup' element = {<Signup/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
