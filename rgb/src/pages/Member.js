import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';

function Member() {
    return (
        <div>
            <nav id="menubar">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">RANKING</Link></li>
                <li><Link to="/member">MEMBER</Link></li>
                <li><Link to="/guide">GUIDE</Link></li>
            </ul>
            </nav>
            <br/><br/>
            <div className="div-button">
                멤버 페이지에 잘 들어왔음.
            </div>
            </div>
    );
};

export default Member;
