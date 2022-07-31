
import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import About2 from './pages/About2';
import About3 from './pages/About3';
const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about2" element={<About2/>} />
      <Route path="/about3" element={<About3/>} />
    </Routes>
  );
;}

export default App;
