
import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
;}

export default App;
