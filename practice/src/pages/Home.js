import {Link} from 'react-router-dom';
import imagemain from '../images/slogan.png';
import imagemain2 from '../images/logo2.png';
import '../App.css';

const Home = () =>{
    return(
    <div>
        <nav id="menubar">
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">RANKING</Link></li>
        </ul>
    </nav>

    <div>
    <img className="logo2" src={imagemain2}/>
    </div>

    <br></br>

    <div>
        <img className="slogan" src={imagemain}/>
    </div>

    <div className="search">
        <input type="text" placeholder="Welcome to RGB"/>
        <button>.GG</button>
    </div>
    
    </div>
    );
};

export default Home;