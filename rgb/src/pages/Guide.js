import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';
import '../css/guide.css';

function  Guide() {
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
            <div className="guidetable" >
                <table >
                    <tr>
                        HOME 페이지 이용 GUIDE <br></br><br></br>
                        &nbsp; 어쩌고 어쩌고 어쩌고 저쩌고<br></br><br></br>
                    </tr>
                    <tr>
                        Ranking 페이지 이용 GUIDE <br></br><br></br>
                        &nbsp; 어쩌고 저쩌고 어쩌고 저쩌고
                    </tr>
                </table>
            </div>

            </div>
    );
};

export default Guide;