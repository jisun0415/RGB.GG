import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';

function Information1() {
    return(
        <div>
            <nav id="menubar">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">RANKING</Link></li>
                <li><Link to="/member">MEMBER</Link></li>
                <li><Link to="/guide">GUIDE</Link></li>
            </ul>
            </nav>

            <div className="search-info">
                <Link to="/information1"><input className="input-2" type="text" placeholder="Search anything"/>
                <button className="search_button-info">.GG</button></Link>
            </div>

            <div>
                
            </div>



        </div>
    );
};

export default Information1;