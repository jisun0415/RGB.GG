
import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import About2 from './pages/About2';
import Information1 from './pages/Information1';

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about2" element={<About2/>} />
      <Route path="/information1" element={<Information1/>} />
    </Routes>
  );
;}

export default App;
